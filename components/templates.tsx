"use client";
import { useState } from "react";

export function Templates() {
  const templateCategories = [
    {
      name: "Service Business",
      description:
        "Perfect for consultants, freelancers, and service providers",
      templates: [
        {
          name: "Professional Service",
          industry: "Consulting",
          features: ["Clean layout", "Service showcase", "Contact forms"],
          color: "from-blue-500 to-purple-600",
        },
        {
          name: "Creative Agency",
          industry: "Marketing",
          features: ["Portfolio gallery", "Team section", "Project showcase"],
          color: "from-purple-500 to-pink-600",
        },
      ],
    },
    {
      name: "Local Business",
      description: "Ideal for restaurants, retail, and local services",
      templates: [
        {
          name: "Local Restaurant",
          industry: "Food & Dining",
          features: ["Menu showcase", "Location map", "Reservation system"],
          color: "from-orange-500 to-red-600",
        },
        {
          name: "Retail Store",
          industry: "Shopping",
          features: ["Product highlights", "Store hours", "Customer reviews"],
          color: "from-green-500 to-teal-600",
        },
      ],
    },
    {
      name: "Professional Services",
      description: "Designed for lawyers, accountants, and healthcare",
      templates: [
        {
          name: "Legal Practice",
          industry: "Law",
          features: ["Practice areas", "Attorney profiles", "Case results"],
          color: "from-indigo-500 to-blue-600",
        },
        {
          name: "Healthcare Clinic",
          industry: "Medical",
          features: ["Services list", "Staff profiles", "Appointment booking"],
          color: "from-emerald-500 to-green-600",
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Service Business");

  const selectedCategoryData = templateCategories.find(
    (category) => category.name === selectedCategory
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    // Scroll to the top of the templates with smooth animation
    setTimeout(() => {
      const templatesContent = document.getElementById("templates-content");
      if (templatesContent) {
        templatesContent.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }, 100);
  };

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
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Templates
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Choose Your Perfect Template
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Browse our curated collection of professional, conversion-focused
              templates designed specifically for small businesses. Each
              template is mobile-optimized and ready to showcase your brand.
            </p>
          </div>

          {/* Templates Sidebar + Content Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Sidebar - Categories */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Template Categories
                </h3>

                {/* Category Tabs */}
                <div className="space-y-2">
                  {templateCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`relative w-full text-left pl-6 pr-4 py-3 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.name
                          ? "bg-primary/10 text-primary border border-primary/30 shadow-lg hover:shadow-xl"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <span className="text-sm font-medium">
                        {category.name}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">
                        {category.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Area - Templates */}
            <div className="flex-1">
              <div id="templates-content" className="space-y-8">
                {/* Templates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedCategoryData?.templates.map(
                    (template, templateIndex) => (
                      <div
                        key={templateIndex}
                        className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:scale-105"
                      >
                        {/* Template Preview Mockup */}
                        <div
                          className={`w-full h-32 bg-gradient-to-br ${template.color} rounded-lg mb-4 flex items-center justify-center shadow-inner`}
                        >
                          <div className="text-white text-center">
                            <div className="text-2xl mb-2">📱</div>
                            <div className="text-xs font-medium opacity-90">
                              Template Preview
                            </div>
                          </div>
                        </div>

                        {/* Template Info */}
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-foreground text-lg mb-1">
                              {template.name}
                            </h4>
                            <p className="text-sm text-primary font-medium">
                              {template.industry}
                            </p>
                          </div>

                          {/* Features List */}
                          <div className="space-y-2">
                            <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              Key Features
                            </h5>
                            <ul className="space-y-1">
                              {template.features.map(
                                (feature, featureIndex) => (
                                  <li
                                    key={featureIndex}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                  >
                                    <div className="w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0" />
                                    {feature}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* CTA Button */}
                          <button className="w-full mt-4 px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors duration-200 text-sm">
                            View Template
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Can&apos;t Find the Perfect Template?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We can create a custom template tailored specifically to your
                industry and brand. Let&apos;s discuss your unique needs and
                create something perfect for your business.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl h-12 px-8 py-3 cursor-pointer"
              >
                Get Custom Template
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
