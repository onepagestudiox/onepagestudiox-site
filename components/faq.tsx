const faqItems = [
  {
    question: "How long does it take to launch my website?",
    answer:
      "We deliver your completed one-page website in 5 business days. You can also choose priority 48-hour delivery as an add-on.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just your business details, branding (logo/colors), content (text + images), and your domain name (if you have one). We'll guide you through it all step-by-step.",
  },
  {
    question: "I don't have a logo or photos—can you help?",
    answer:
      "Yes! We can suggest free tools or add stock images and simple placeholder branding to get you started. Custom branding services can be recommended if needed.",
  },
  {
    question: "What platform is the site built on?",
    answer:
      "Your site is built using modern, fast, mobile-optimized code (no page builders). We host it with a reliable provider and connect your custom domain.",
  },
  {
    question: "Can I make changes to the site later?",
    answer:
      "Each plan comes with at least one revision round. If you need more updates later, we offer additional revisions as a flat-fee add-on.",
  },
  {
    question: "What if I don't like the final result?",
    answer:
      "We work closely with you during the process. If something's not right, we include a revision round to fine-tune it.",
  },
  {
    question: "Is this a monthly subscription?",
    answer:
      "Nope — you pay a one-time flat fee. No hidden charges, no recurring costs.",
  },
  {
    question: "Can you help with setting up my domain?",
    answer: "Absolutely. We'll guide you through connecting your domain.",
  },
  {
    question: "What if I'm not tech-savvy at all?",
    answer:
      "That's exactly who we built this for. We handle the technical side so you don't have to — no jargon, no complicated dashboards.",
  },
  {
    question: "Can I see the templates before choosing?",
    answer:
      "Yes! You'll be able to browse our available templates and pick the one that fits your style. We then customize it with your business content and branding.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              ❓ FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our service and process.
            </p>
          </div>

          {/* FAQ Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 group"
              >
                {/* Question */}
                <h3 className="text-base font-semibold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
                  {item.question}
                </h3>

                {/* Answer */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
              <div className="w-8 h-px bg-border" />
              <span>Still have questions?</span>
              <a
                href="mailto:onepagestudiox@outlook.com"
                className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                Email us!
              </a>
              <div className="w-8 h-px bg-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
