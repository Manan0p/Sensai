"use server";

import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
    const {userId} = await auth();
    if (!userId) {
        throw new Error("Unauthorized");
    }
}