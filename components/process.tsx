"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    number: "1",
    title: "Tell Us About Your Business",
    description:
      "Share the essential details about your business so we can craft a website that perfectly fits your brand. We’ll guide you through what to provide, from your services and style preferences to branding elements and goals, making it simple and stress-free.",
  },
  {
    number: "2",
    title: "We Design Your Website",
    description:
      "Our team will create a custom one-page website tailored to your business, style, and goals. We focus on clean design, mobile optimization, and a layout that converts visitors into customers.",
  },
  {
    number: "3",
    title: "Review & Feedback",
    description:
      "Preview your website draft and let us know what you think. We’ll make adjustments based on your feedback to ensure the final result matches your vision perfectly.",
  },
  {
    number: "4",
    title: "Launch & Deliver",
    description:
      "Once you’re happy with the final version, we connect it to your domain, test everything, and launch your site. From start to finish, we handle the technical aspects so you can focus on running your business.",
  },
];

export function Process() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [triggeredCards, setTriggeredCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTriggeredCards((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="process"
      className="py-20 sm:py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Simple & Transparent
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Here&apos;s our simple, transparent process.
            </p>
          </div>

          {/* Process Steps Grid - Original Simple Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={cn(
                  "group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 sm:p-6 lg:p-7",
                  "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]",
                  "hover:border-primary/30 hover:bg-card/80",
                  /* Tablet/mobile: alternate slide-in from left/right, triggered when card scrolls into view */
                  index % 2 === 0 ? "process-slide-in-left" : "process-slide-in-right",
                  triggeredCards[index] && "process-card-in-view",
                )}
              >
                {/* Step Number with subtle enhancement */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="relative flex-shrink-0 self-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center font-bold text-base sm:text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 sm:pt-1">
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-foreground mb-2 sm:mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Step Description with H4 tag for better SEO */}
                <div className="sm:ml-16 lg:ml-18">
                  <h4 className="sr-only">Step {step.number} Details</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base group-hover:text-foreground/80 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Key Benefits with H5 tags for better SEO structure */}
                <div className="sm:ml-16 lg:ml-18 mt-4">
                  <h5 className="text-xs font-semibold text-primary/80 uppercase tracking-wide mb-2">
                    Key Benefits
                  </h5>
                  <ul className="space-y-1">
                    {step.number === "1" && (
                      <>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Provide all your branding and business details in
                            one place
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Highlight your services, target audience, and goals
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Receive guidance on what info is most important for
                            a high-converting website
                          </span>
                        </li>
                      </>
                    )}
                    {step.number === "2" && (
                      <>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Fully customized design for your brand
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Mobile-friendly and high-converting layout
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Professional, clean, and modern style
                          </span>
                        </li>
                      </>
                    )}
                    {step.number === "3" && (
                      <>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Preview and provide feedback on your website
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Small tweaks and adjustments applied quickly
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Ensures your website fully represents your brand
                          </span>
                        </li>
                      </>
                    )}
                    {step.number === "4" && (
                      <>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Website published and live for your audience
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Domain connection handled for you
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Guidance provided for ongoing website management
                          </span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-6">
              <div className="w-8 h-px bg-border" />
              <span>Ready to get started?</span>
              <div className="w-8 h-px bg-border" />
            </div>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl h-12 px-8 py-3 cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
