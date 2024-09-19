import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import Stripe from "stripe";
import BillingDashboard from "./_components/billing-dashboard";

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

async function Billing({ searchParams }: Props) {
  const { session_id } = searchParams ?? {
    session_id: "",
  };
  if (session_id) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
      typescript: true,
      apiVersion: "2024-06-20",
    });

    const session = await stripe.checkout.sessions.listLineItems(session_id);
    const user = await currentUser();
    if (user) {
      await db.user.update({
        where: {
          clerkId: user.id,
        },
        data: {
          tier: session.data[0].description,
          credits:
            session.data[0].description == "Unlimited"
              ? "Unlimited"
              : session.data[0].description == "Pro"
                ? "100"
                : "10",
        },
      });
    }
  }
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Billing
      </h1>
      <BillingDashboard />
    </div>
  );
}

export default Billing;
