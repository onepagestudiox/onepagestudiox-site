"use client";
import { useState } from "react";

export function DetailedFeatureBreakdown() {
  const [showDetailedBreakdown, setShowDetailedBreakdown] = useState(false);

  const handleToggle = () => {
    setShowDetailedBreakdown(!showDetailedBreakdown);

    // If we're showing the breakdown, scroll to it smoothly
    if (!showDetailedBreakdown) {
      setTimeout(() => {
        const element = document.getElementById("detailed-breakdown-content");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 100); // Small delay to ensure content is rendered
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleToggle}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl h-12 px-8 py-3 cursor-pointer"
      >
        <span className="flex items-center gap-2">
          {showDetailedBreakdown ? (
            <>
              Hide Full Plan Breakdown
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </>
          ) : (
            <>
              View Full Plan Breakdown
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </>
          )}
        </span>
      </button>

      {showDetailedBreakdown && (
        <div
          id="detailed-breakdown-content"
          className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-top-4 duration-300 mt-6"
        >
          {/* Basic Plan Explanations */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Basic Plan Features
              </h3>
              <p className="text-muted-foreground">
                Everything you need to get started online
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Pre-Made Template Selection",
                  description:
                    "Choose from our curated collection of professional templates designed for different industries. Each template is optimized for conversion and mobile responsiveness.",
                },
                {
                  title: "Brand Integration",
                  description:
                    "We'll integrate your logo, brand colors, fonts, and messaging throughout the site to create a cohesive brand experience that matches your business identity.",
                },
                {
                  title: "Custom Domain Setup",
                  description:
                    "Connect your existing domain or we'll help you purchase and configure a new one. Includes SSL certificate and proper DNS configuration for security.",
                },
                {
                  title: "Mobile Optimization",
                  description:
                    "Your site will look and function perfectly on all devices - phones, tablets, and desktops. Fast loading times and intuitive navigation on every screen size.",
                },
                {
                  title: "Content Revisions",
                  description:
                    "Want to tweak text, photos, or layout after the first version? You get one full round of edits to make the site feel just right.",
                },
                {
                  title: "Fast Delivery",
                  description:
                    "Get your completed site live in just 5 business days (after receiving your content and domain access).",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-5"
                >
                  <h5 className="text-base font-semibold text-foreground mb-2 text-left">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Plan Explanations */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Premium Plan Features
              </h3>
              <p className="text-muted-foreground">
                Advanced features for maximum business impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Basic SEO Setup",
                  description:
                    "Optimized page titles, meta descriptions, and image alt tags to help search engines understand and rank your site. Better visibility in Google search results.",
                },
                {
                  title: "Appointment or Booking Integration",
                  description:
                    "Already using tools like Calendly, GlossGenius, or Square? We'll embed your booking link into your site. If you don't have one, we'll guide you in setting one up to streamline your appointments.",
                },
                {
                  title: "Post-Launch Support",
                  description:
                    "5 days of post-launch support to fix any issues, make small adjustments, or answer questions about your new website.",
                },
                {
                  title: "Mobile Preview Optimization",
                  description:
                    "We go beyond basic responsiveness by manually adjusting layouts and spacing to ensure your site looks flawless on all popular mobile screen sizes.",
                },
                {
                  title: "Google Business Profile",
                  description:
                    "Setup or review your Google Business Profile to improve local search visibility and help customers find your business on Google Maps.",
                },
                {
                  title: "Analytics & Reporting",
                  description:
                    "Google Analytics setup with 3 months of monthly reports showing visitor behavior, traffic sources, and insights to help grow your business.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-5"
                >
                  <h5 className="text-base font-semibold text-foreground mb-2 text-left">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
