"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Star, Flame, Clock, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_STATS, FEATURES, HOW_IT_WORKS_STEPS } from "@/lib/data";
import PricingSection from "@/components/PricingSection";
import Link from "next/link";

export default function LandingPageClient({ subscriptionTier }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in-up, .fade-in, .stagger-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-orange-50/20 to-amber-50/30 text-stone-900 overflow-hidden relative">
      {/* Animated Background Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <Badge
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-700 bg-orange-50 text-sm font-bold mb-6 uppercase tracking-wide fade-in-up hover:scale-105 transition-transform duration-300 cursor-default animate-pulse-subtle"
                >
                  <Flame className="mr-1" />
                  #1 AI Cooking Assistant
                </Badge>

                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tight fade-in-up animation-delay-100">
                  Turn your{" "}
                  <span className="italic underline decoration-4 decoration-orange-600 relative inline-block hover:decoration-orange-700 transition-colors">
                    leftovers
                    <span className="absolute -inset-1 bg-orange-100 rounded-lg -z-10 opacity-50" />
                  </span>{" "}
                  into <br />
                  <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 bg-clip-text text-transparent animate-gradient">
                    masterpieces.
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-stone-600 mb-10 max-w-lg mx-auto md:mx-0 font-light fade-in-up animation-delay-200">
                  Snap a photo of your fridge. We&apos;ll tell you what to cook.
                  Save money, reduce waste, and eat better tonight.
                </p>

                <div className="fade-in-up animation-delay-300">
                  <Link href="/dashboard">
                    <Button
                      size="xl"
                      variant="primary"
                      className="px-8 py-6 text-lg group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50"
                    >
                      Start Cooking Free{" "}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <p className="mt-6 text-sm text-stone-500 fade-in-up animation-delay-400">
                  <span className="font-bold text-stone-900">10k+ cooks</span>{" "}
                  joined last month
                </p>
              </div>

              {/* Hero Image */}
              <div className="fade-in-up animation-delay-200 hover-lift">
                <Card className="relative aspect-square md:aspect-4/5 border-4 border-stone-900 bg-stone-200 overflow-hidden py-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:rotate-1">
                  <Image
                    src="/pasta-dish.png"
                    alt="Delicious pasta dish"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating Card */}
                  <Card className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm border-2 border-stone-900 py-0 animate-float shadow-xl">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">
                            Rustic Tomato Basil Pasta
                          </h3>
                          <div className="flex gap-0.5 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 fill-orange-500 text-orange-500 animate-star-pulse"
                                style={{ animationDelay: `${i * 100}ms` }}
                              />
                            ))}
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-2 border-green-700 bg-green-50 text-green-700 font-bold animate-pulse-subtle"
                        >
                          98% MATCH
                        </Badge>
                      </div>
                      <div className="flex gap-4 text-xs text-stone-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> 25 mins
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" /> 2 servings
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 border-y-2 border-stone-900 bg-stone-900 relative overflow-hidden fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-orange-900/20 animate-shimmer" />
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4 relative z-10">
            {SITE_STATS.map((stat, i) => (
              <div
                key={i}
                className="stagger-item hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl font-bold mb-1 text-stone-50 hover:text-orange-400 transition-colors">
                  {stat.val}
                </div>
                <Badge
                  variant="secondary"
                  className="bg-transparent text-orange-500 text-sm uppercase tracking-wider font-medium border-none"
                >
                  {stat.label}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-stone-900 via-orange-900 to-stone-900 bg-clip-text text-transparent">
                Your Smart Kitchen
              </h2>
              <p className="text-stone-600 text-xl font-light">
                Everything you need to master your meal prep.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {FEATURES.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card
                    key={index}
                    className="stagger-item border-2 border-stone-200 bg-white/80 backdrop-blur-sm hover:border-orange-600 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group py-0 hover:-translate-y-2 hover:scale-105"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="border-2 border-stone-200 bg-orange-50 p-3 group-hover:border-orange-600 group-hover:bg-orange-100 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                          <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-xs font-mono bg-stone-100 text-stone-600 uppercase tracking-wide border border-stone-200"
                        >
                          {feature.limit}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-stone-600 text-lg font-light">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 border-y-2 border-stone-200 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-stone-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(251,146,60,0.3),transparent_50%)]" />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 fade-in-up">
              Cook in 3 Steps
            </h2>

            <div className="space-y-12">
              {HOW_IT_WORKS_STEPS.map((item, i) => (
                <div
                  key={i}
                  className="stagger-item group hover:translate-x-4 transition-transform duration-300"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="flex gap-6 items-start">
                    <Badge
                      variant="outline"
                      className="text-6xl font-bold text-orange-500 border-none bg-transparent p-0 h-auto group-hover:scale-110 group-hover:text-orange-400 transition-all duration-300"
                    >
                      {item.step}
                    </Badge>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg text-stone-400 font-light group-hover:text-stone-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {i < HOW_IT_WORKS_STEPS.length - 1 && (
                    <hr className="my-8 bg-stone-700 border-stone-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-4 fade-in-up">
          <PricingSection subscriptionTier={subscriptionTier} />
        </section>
      </div>
    </div>
  );
}
