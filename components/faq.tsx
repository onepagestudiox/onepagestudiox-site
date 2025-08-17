"use client";
import { useState } from "react";

const faqItems = [
  // Timeline & Delivery
  {
    category: "Timeline & Delivery",
    question: "How long does it take to launch my website?",
    answer:
      "We deliver your completed one-page website in 5 business days. You can also choose priority 48-hour delivery as an add-on.",
  },
  {
    category: "Timeline & Delivery",
    question: "Can I make changes to the site later?",
    answer:
      "Each plan comes with at least one revision round. If you need more updates later, we offer additional revisions as a flat-fee add-on.",
  },
  {
    category: "Timeline & Delivery",
    question: "What if I don't like the final result?",
    answer:
      "We work closely with you during the process. If something's not right, we include a revision round to fine-tune it.",
  },

  // Content & Requirements
  {
    category: "Content & Requirements",
    question: "What do I need to provide?",
    answer:
      "Just your business details, branding (logo/colors), content (text + images), and your domain name (if you have one). We'll guide you through it all step-by-step.",
  },
  {
    category: "Content & Requirements",
    question: "I don't have a logo or photos—can you help?",
    answer:
      "Yes! We can suggest free tools or add stock images and simple placeholder branding to get you started. Custom branding services can be recommended if needed.",
  },
  {
    category: "Content & Requirements",
    question: "Can I see the templates before choosing?",
    answer:
      "Yes! You'll be able to browse our available templates and pick the one that fits your style. We then customize it with your business content and branding.",
  },

  // Technical & Platform
  {
    category: "Technical & Platform",
    question: "What platform is the site built on?",
    answer:
      "Your site is built using modern, fast, mobile-optimized code (no page builders). We host it with a reliable provider and connect your custom domain.",
  },
  {
    category: "Technical & Platform",
    question: "Can you help with setting up my domain?",
    answer: "Absolutely. We'll guide you through connecting your domain.",
  },
  {
    category: "Technical & Platform",
    question: "What if I'm not tech-savvy at all?",
    answer:
      "That's exactly who we built this for. We handle the technical side so you don't have to — no jargon, no complicated dashboards.",
  },

  // Pricing & Plans
  {
    category: "Pricing & Plans",
    question: "Is this a monthly subscription?",
    answer:
      "Nope — you pay a one-time flat fee. No hidden charges, no recurring costs.",
  },
];

const categories = [
  "Timeline & Delivery",
  "Content & Requirements",
  "Technical & Platform",
  "Pricing & Plans",
];

export function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Timeline & Delivery"
  );

  const filteredItems = faqItems.filter(
    (item) => item.category === selectedCategory
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    // Scroll to the top of the FAQ cards with smooth animation
    setTimeout(() => {
      const faqCards = document.getElementById("faq-cards");
      if (faqCards) {
        faqCards.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }, 100); // Small delay to ensure content is rendered
  };

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
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our service and process.
            </p>
          </div>

          {/* FAQ Sidebar + Content Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Sidebar - Categories */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Categories
                </h3>

                {/* Category Tabs with Vertical Line */}
                <div className="relative">
                  {/* Vertical Line - Only between dots */}
                  {/* <div className="absolute left-[22px] top-8 bottom-7 w-px bg-border" /> */}

                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`relative w-full text-left pl-8 pr-4 py-3 rounded-lg transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-primary/10 text-primary border border-primary/30 shadow-lg hover:shadow-xl"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {/* Active Indicator Dot */}
                        <div
                          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-200 ${
                            selectedCategory === category
                              ? "bg-primary"
                              : "bg-border"
                          }`}
                        />

                        <span className="text-sm font-medium">{category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Area - Q&As */}
            <div className="flex-1">
              <div id="faq-cards" className="space-y-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 group"
                  >
                    <h4 className="text-lg font-semibold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
                      {item.question}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-6">
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
