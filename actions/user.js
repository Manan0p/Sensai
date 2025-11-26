"use server";

import { auth } from "@clerk/nextjs/server";

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
                    industryInsight = await tx.industryInsight.create({
                        data:{
                            industry: data.industry,
                            salaryRanges: [], // Default empty array
                            growthRate: 0, // Default value
                            demandLevel: "Medium", // Default value
                            topSkills: [], // Default empty array
                            marketOutlook: "Neutral", // Default value
                            keyTrends: [], // Default empty array
                            recommendedSkills: [], // Default empty array
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
                        },
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
        return result.user;
    } catch (error) {
        console.error("Error updating user and industry:", error.message);
        throw new Error("Failed to update profile");
    }
}

export async function getUserOnboardingStatus() {
    
}