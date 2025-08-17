import { cn } from "@/lib/utils";

const processSteps = [
  {
    number: "1",
    title: "Choose a Template That Fits Your Style",
    description:
      "We offer a curated selection of clean, high-converting website templates tailored for small businesses. You simply pick the design that feels right for your brand — and don't worry, we're here to help if you're not sure what works best for your industry or goals.",
  },
  {
    number: "2",
    title: "Send Us Your Content (We'll Guide You)",
    description:
      "Once you've selected a template, we'll send you a simple content checklist — no jargon, no overwhelm. You just share your logo, text, business info, photos (if any), and social links. We can even help clean up or rewrite your content if needed, to make sure it's sharp and professional.",
  },
  {
    number: "3",
    title: "We Build & Customize Your Site",
    description:
      "Our team gets to work bringing your page to life. We plug in your content, adjust colors and fonts to match your brand, and ensure everything looks perfect across desktop and mobile. You'll get a preview to review — and one round of revision if needed.",
  },
  {
    number: "4",
    title: "Launch in 5 Business Days or Less",
    description:
      "Once you're happy with the result, we connect your domain, test everything, and launch your site. Need it faster? We offer 48-hour delivery as an add-on. From start to finish, we handle the tech so you can focus on running your business.",
  },
];

export function Process() {
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
              Get your professional website up and running in just 5 days.
              Here&apos;s our simple, transparent process.
            </p>
          </div>

          {/* Process Steps Grid - Original Simple Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className={cn(
                  "group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-5 sm:p-6 lg:p-7",
                  "shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]",
                  "hover:border-primary/30 hover:bg-card/80"
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
                            Curated selection of professional templates
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Tailored for small businesses
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Expert guidance in template selection
                          </span>
                        </li>
                      </>
                    )}
                    {step.number === "2" && (
                      <>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Simple content checklist provided
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            No jargon or technical overwhelm
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Content cleanup and rewriting assistance
                          </span>
                        </li>
                      </>
                    )}
                    {step.number === "3" && (
                      <>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Professional team builds your site
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Brand colors and fonts integrated
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Mobile and desktop optimized
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Preview and revision included
                          </span>
                        </li>
                      </>
                    )}
                    {step.number === "4" && (
                      <>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            5 business days or less delivery
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            Domain connection included
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            48-hour delivery available as add-on
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary/60 rounded-full mt-2" />
                          <span className="text-xs text-foreground/80 leading-relaxed">
                            We handle all technical aspects
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
                href="#templates"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl h-12 px-8 py-3 cursor-pointer"
              >
                Browse Templates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
