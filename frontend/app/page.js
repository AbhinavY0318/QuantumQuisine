import React from "react";
import { auth } from "@clerk/nextjs/server";
import LandingPageClient from "@/components/LandingPageClient";

export default async function LandingPage() {
  const { has } = await auth();
  const subscriptionTier = has({ plan: "pro" }) ? "pro" : "free";

  return <LandingPageClient subscriptionTier={subscriptionTier} />;
}
