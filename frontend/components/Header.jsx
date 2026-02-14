import React from "react";
import { Button } from "./ui/button";
import { Cookie, Refrigerator, Sparkles } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
// import HowToCookModal from "./HowToCookModal";
import PricingModal from "./PricingModal";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
import { Badge } from "./ui/badge";
import UserDropdown from "./UserDropdown";

export default async function Header() {
  const user = await checkUser();

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60 transition-all duration-300">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={user ? "/dashboard" : "/"}
          className="flex items-center gap-2 group"
        >
          <Image
            src="/logo.png"
            alt="QuantumQuisine Logo"
            width={60}
            height={60}
            className="w-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link
            href="/recipes"
            className="relative hover:text-orange-600 transition-colors flex gap-1.5 items-center group/link"
          >
            <Cookie className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
            <span>My Recipes</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover/link:w-full transition-all duration-300" />
          </Link>
          <Link
            href="/pantry"
            className="relative hover:text-orange-600 transition-colors flex gap-1.5 items-center group/link"
          >
            <Refrigerator className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
            <span>My Pantry</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover/link:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* <HowToCookModal /> */}

          <SignedIn>
            {/* Pricing Modal with Built-in Trigger */}
            {user && (
              <PricingModal subscriptionTier={user.subscriptionTier}>
                <Badge
                  variant="outline"
                  className={`flex h-8 px-3 gap-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    user.subscriptionTier === "pro"
                      ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white border-none shadow-sm hover:shadow-md hover:scale-105"
                      : "bg-stone-200/50 text-stone-600 border-stone-200 cursor-pointer hover:bg-stone-300/50 hover:border-stone-300 hover:scale-105"
                  }`}
                >
                  <Sparkles
                    className={`h-3 w-3 transition-transform duration-300 ${
                      user.subscriptionTier === "pro"
                        ? "text-white fill-white/20 animate-pulse-subtle"
                        : "text-stone-500"
                    }`}
                  />
                  <span>
                    {user.subscriptionTier === "pro" ? "Pro Chef" : "Free Plan"}
                  </span>
                </Badge>
              </PricingModal>
            )}

            <UserDropdown />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium transition-all duration-300 hover:scale-105"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="primary" className="rounded-full px-6 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}