/* eslint-disable @typescript-eslint/no-unused-vars */
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { getPriceIDFromType } from "@/lib/plans";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function POST(request: NextRequest) {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });
    }

    const profile = await prisma.profile.findUnique({
      where: { userId: clerkUser.id },
    });

    if (!profile) {
      NextResponse.json({ error: "No profile found." });
    }

    if (!profile?.stripeSubscriptionId) {
      NextResponse.json({ error: "No active subscription found." });
    }

    const subscriptionId = profile?.stripeSubscriptionId;

    const cancelledSubscription = await stripe.subscriptions.update(
      subscriptionId!,
      {
        cancel_at_period_end: true,
      }
    );

    await prisma.profile.update({
      where: { userId: clerkUser.id },
      data: {
        subscriptionTier: null,
        stripeSubscriptionId: null,
        subscriptionActive: false,
      },
    });


    return NextResponse.json({ subscription: cancelledSubscription });
  } catch (error: any) {
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
