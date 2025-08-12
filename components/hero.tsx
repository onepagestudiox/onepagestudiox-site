export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-muted/20 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            ✨ Professional websites in 5 days
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight">
            Professional Websites
            <span className="relative inline-block">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 280 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full -z-10"
                preserveAspectRatio="none"
              >
                <path
                  d="M9.94883e-05 8.58808L277.478 -0.00015745L279.543 66.7152L2.06501 75.3035L9.94883e-05 8.58808Z"
                  fill="black"
                />
              </svg>
              <span className="relative z-10 text-white px-2 py-1">
                Without the Hassle
              </span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Choose a template, send your content, and go live with a clean,
            professional site.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#templates"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl h-14 px-8 py-4"
            >
              Browse Templates
            </a>
          </div>

          {/* Static Benefits Banner */}
          <div className="rounded-lg py-3 px-6 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-xs font-medium text-foreground">
                  Fast Turnaround
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-xs font-medium text-foreground">
                  Your Branding
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-xs font-medium text-foreground">
                  Mobile Responsive
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
