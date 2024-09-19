"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function onPaymentDetails() {
  const user = await currentUser();

  if (user) {
    const connection = await db.user.findFirst({
      where: {
        clerkId: user.id,
      },
      select: {
        tier: true,
        credits: true,
      },
    });

    if (user) {
      return connection;
    }
  }
}
