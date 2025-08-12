export function Templates() {
  return (
    <section
      id="templates"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🎨 Templates
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Browse Our Templates
            </h2>
            <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <span className="text-lg">🚀 Coming Soon</span>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              {/* Coming Soon Text */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                We&apos;re crafting a collection of beautiful,
                conversion-focused templates designed specifically for small
                businesses. Each template will be mobile-optimized and ready to
                showcase your brand.
              </p>

              {/* Features Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">📱</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Mobile First
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Optimized for all devices
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Fast Loading
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Built for speed & performance
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Conversion Ready
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Designed to convert visitors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
