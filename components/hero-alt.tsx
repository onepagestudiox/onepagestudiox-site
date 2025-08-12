export function HeroAlt() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main headline with custom layout */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="block text-left">We make effective</span>
              <span className="block text-left ml-20 sm:ml-24 lg:ml-32">
                websites to help
              </span>
              <span className="block text-left ml-40 sm:ml-48 lg:ml-64">
                your business.
              </span>
            </h1>
          </div>

          {/* CTA and Text Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-16">
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl h-14 px-8 py-4">
                Browse Templates
              </button>
            </div>

            {/* Text */}
            <div className="flex-shrink-0 lg:ml-auto">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We are a Toronto based company, helping small businesses by
                making beautiful and high performing websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
