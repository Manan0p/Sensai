"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
    const {userId} = await auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if (!user){
        throw new Error("User not found");
    }

    try {
        const result = await db.$transaction(
            async(tx)=>{
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry : data.industry,
                    },
                });

                if (!industryInsight){
                    const insights = await generateAIInsights(data.industry);
                    // Normalize enum-like strings from AI to Prisma enums
                    const normalizeDemand = (v) => {
                        const s = String(v || "").toUpperCase();
                        if (["HIGH","MEDIUM","LOW"].includes(s)) return s;
                        return "MEDIUM"; // sensible default
                    };
                    const normalizeOutlook = (v) => {
                        const s = String(v || "").toUpperCase();
                        if (["POSITIVE","NEUTRAL","NEGATIVE"].includes(s)) return s;
                        return "NEUTRAL";
                    };

                    industryInsight = await db.industryInsight.create({
                        data:{
                            industry: data.industry,
                            salaryRanges: insights.salaryRanges,
                            growthRate: insights.growthRate,
                            demandLevel: normalizeDemand(insights.demandLevel),
                            topSkills: insights.topSkills,
                            marketOutlook: normalizeOutlook(insights.marketOutlook),
                            keyTrends: insights.keyTrends,
                            recommendedSkills: insights.recommendedSkills,
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
                        }
                    });
                }

                const updatedUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills,
                    },
                });

                return { updatedUser, industryInsight };
            },
            {
                timeout: 10000,
            }
        );
        return {success:true, ...result};
    } catch (error) {
        console.error("Error updating user and industry:", error.message);
        throw new Error("Failed to update profile" + error.message);
    }
}

export async function getUserOnboardingStatus() {
    const {userId} = await auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    });

    if (!user){
        throw new Error("User not found");
    }

    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true,
            },
        });

        return {
            isOnboarded: !!user?.industry,
        };

    } catch (error) {
        console.error("Error checking onboarding status:", error.message);
        throw new Error("Failed to check onboarding status");
    }
}