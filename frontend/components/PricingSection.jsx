"use client";

import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { CheckoutButton } from "@clerk/nextjs/experimental";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PricingSection({ subscriptionTier = "free" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".pricing-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto" ref={sectionRef}>
      <div className="mb-16 fade-in-up">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-stone-900 via-orange-900 to-stone-900 bg-clip-text text-transparent">
          Simple Pricing
        </h2>
        <p className="text-xl text-stone-600 font-light">
          Start for free. Upgrade to become a master chef.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Plan */}
        <Card className="pricing-card border-2 border-stone-200 bg-white/80 backdrop-blur-sm hover:border-stone-400 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 opacity-0 translate-y-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Sous Chef</CardTitle>
            <div className="text-5xl font-bold text-stone-900">
              $0
              <span className="text-lg font-normal text-stone-400">/mo</span>
            </div>
            <CardDescription className="text-stone-600 font-light text-base">
              Perfect for casual weekly cooks.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ul className="space-y-4">
              {[
                "10 pantry scans per month",
                "5 AI meal recommendations",
                "Standard support",
                "Standard Recipes",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-stone-700">
                  <Check className="h-5 w-5 shrink-0 mt-0.5 text-stone-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className={"mt-auto"}>
            <Link href="/dashboard" className="w-full">
              <Button
                variant="outline"
                className="w-full border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="pricing-card relative border-2 border-orange-600 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 hover:border-orange-700 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:scale-105 opacity-0 translate-y-8 animation-delay-200">
          <Badge className="absolute top-0 right-0 rounded-none rounded-bl-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold uppercase tracking-wide border-none animate-pulse-subtle">
            MOST POPULAR
          </Badge>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-transparent to-transparent rounded-lg pointer-events-none" />

          <CardHeader className="relative z-10">
            <CardTitle className="text-3xl font-bold text-orange-900">
              Head Chef
            </CardTitle>
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              $5.00
              <span className="text-lg font-normal text-orange-400">/mo</span>
            </div>
            <CardDescription className="text-orange-800/70 font-light text-base">
              For the serious home cook.
            </CardDescription>
          </CardHeader>

          <CardContent className="relative z-10">
            <ul className="space-y-4">
              {[
                "Unlimited pantry scans",
                "Unlimited AI recipes",
                "Priority Support",
                "Recipes with Nutritional analysis",
                "Chef's Tips & Tricks",
                "Ingredient Substitutions",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-orange-950 group/item">
                  <Badge className="bg-orange-200 p-1 rounded-full h-6 w-6 flex items-center justify-center border-none group-hover/item:bg-orange-300 group-hover/item:scale-110 transition-all duration-300">
                    <Check className="h-4 w-4 text-orange-700" />
                  </Badge>
                  <span className="font-medium group-hover/item:text-orange-800 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="relative z-10">
            <SignedIn>
              <CheckoutButton
                planId="cplan_39cczrCXJkYrqxhwfjRbe9YbSd9"
                planPeriod="month"
                newSubscriptionRedirectUrl="/dashboard"
                checkoutProps={{
                  appearance: {
                    elements: {
                      drawerRoot: {
                        zIndex: 2000,
                      },
                    },
                  },
                }}
              >
                <Button
                  disabled={subscriptionTier === "pro"}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 disabled:bg-orange-400 disabled:cursor-not-allowed text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {subscriptionTier === "pro" ? "Subscribed" : "Subscribe Now"}
                </Button>
              </CheckoutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="primary" className="w-full hover:scale-105 transition-all duration-300">
                  Login to Subscribe
                </Button>
              </SignInButton>
            </SignedOut>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}