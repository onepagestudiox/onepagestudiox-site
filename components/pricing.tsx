import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic Plan",
    price: "$800",
    description: "Perfect for small businesses getting started online",
    features: [
      "Choose from a pre-made template",
      "We plug in your branding, content, and images",
      "Connect your custom domain",
      "Mobile-optimized design",
      "One round of content and design revisions",
      "Delivered in 5 business days",
    ],
    popular: false,
  },
  {
    name: "Premium Plan",
    price: "$1,200",
    description: "Everything you need for a professional online presence",
    features: [
      "Everything in Basic, plus:",
      "Basic SEO setup (page titles, descriptions, image alt tags)",
      "Appointment or booking integration (Calendly, etc.)",
      "5-Day post launch touch up",
      "Manually optimized mobile preivew",
      "Google business profile setup/review",
      "Analytic setup with reporting (Up to 3 months)",
    ],
    popular: true,
  },
];

const addOns = [
  {
    name: "Extra Section",
    price: "$100",
    description: "Add testimonials, FAQs, pricing, or any additional section",
  },
  {
    name: "Priority Delivery",
    price: "$175",
    description: "Get your site delivered in 48 hours instead of 5 days",
  },
  {
    name: "Additional Revision",
    price: "$75",
    description: "One extra round of content revisions after delivery",
  },
  {
    name: "Extended Vistor Reports",
    price: "$50/month",
    description:
      "Keep receiving monthly visitor summaries after your included 3 months.",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              💰 Simple Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              One-Time Fees, No Hidden Costs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. All plans include everything
              you need to go live.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
                  plan.popular &&
                    "border-primary/30 bg-card/80 ring-2 ring-primary/20"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      One-Time Fee
                    </span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-foreground/80 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl h-12 px-6 py-3 cursor-pointer"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Feature Explanations */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Basic Plan Explanations */}
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Basic Plan Features
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Everything you need to get started online
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">📋</span>
                      Pre-Made Template Selection
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Choose from our curated collection of professional
                      templates designed for different industries. Each template
                      is optimized for conversion and mobile responsiveness.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">🎨</span>
                      Brand Integration
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      We&apos;ll integrate your logo, brand colors, fonts, and
                      messaging throughout the site to create a cohesive brand
                      experience that matches your business identity.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">🌐</span>
                      Custom Domain Setup
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Connect your existing domain or we&apos;ll help you
                      purchase and configure a new one. Includes SSL certificate
                      and proper DNS configuration for security.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">📱</span>
                      Mobile Optimization
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Your site will look and function perfectly on all devices
                      - phones, tablets, and desktops. Fast loading times and
                      intuitive navigation on every screen size.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">✏️</span>
                      Content Revisions
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Want to tweak text, photos, or layout after the first
                      version? You get one full round of edits to make the site
                      feel just right.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">⚡</span>
                      Fast Delivery
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Get your completed site live in just 5 business days
                      (after receiving your content and domain access).
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium Plan Explanations */}
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Premium Plan Features
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Advanced features for maximum business impact
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">🔍</span>
                      Basic SEO Setup
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Optimized page titles, meta descriptions, and image alt
                      tags to help search engines understand and rank your site.
                      Better visibility in Google search results.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">📅</span>
                      Appointment or Booking Integration
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Already using tools like Calendly, GlossGenius, or Square?
                      We&apos;ll embed your booking link into your site. If you
                      don&apos;t have one, we&apos;ll guide you in setting one
                      up to streamline your appointments.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">🔧</span>
                      Post-Launch Support
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      5 days of post-launch support to fix any issues, make
                      small adjustments, or answer questions about your new
                      website.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">📱</span>
                      Mobile Preview Optimization
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      We go beyond basic responsiveness by manually adjusting
                      layouts and spacing to ensure your site looks flawless on
                      all popular mobile screen sizes.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">🏢</span>
                      Google Business Profile
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Setup or review your Google Business Profile to improve
                      local search visibility and help customers find your
                      business on Google Maps.
                    </p>
                  </div>

                  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="text-primary">📊</span>
                      Analytics & Reporting
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Google Analytics setup with 3 months of monthly reports
                      showing visitor behavior, traffic sources, and insights to
                      help grow your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add-Ons Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need Something Extra?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Add these services to any plan for a custom solution that fits
              your needs.
            </p>
          </div>

          {/* Add-Ons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={addon.name}
                className="group relative bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-border/40 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:border-primary/40 hover:scale-105 hover:bg-gradient-to-br hover:from-card/80 hover:to-card/50"
              >
                {/* Decorative Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">
                    {["📄", "⚡", "✏️", "📊"][index]}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {addon.name}
                </h4>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
                  {addon.price}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
