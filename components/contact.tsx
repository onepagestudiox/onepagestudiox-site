"use client";

import { useState } from "react";
import { FaCheckSquare, FaLock } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

const templates = [
  "Modern Business",
  "Creative Portfolio",
  "Restaurant & Food",
  "Fitness & Wellness",
  "Professional Services",
  "E-commerce",
  "No preference",
];

const plans = ["Basic Plan ($800)", "Premium Plan ($1,200)"];

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    selectedTemplate: "",
    selectedPlan: "",
    businessDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! We&apos;ll be in touch soon.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          businessName: "",
          selectedTemplate: "",
          selectedPlan: "",
          businessDescription: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="lg:sticky lg:top-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Let&apos;s Build Your Website
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                No tech headaches. Just your business online — fast.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form and we&apos;ll reach out to kick off your
                website. Choose a template, share your content, and we&apos;ll
                handle the rest.
              </p>

              {/* Trust Elements */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">
                      <FaCheckSquare />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      5-day delivery guarantee
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get your site live in just 5 business days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">
                      <FaLock />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Your info is 100% secure
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We protect your data with industry-standard security
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">
                      <IoChatbubbleEllipsesSharp />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Friendly onboarding
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      No pressure, just helpful guidance throughout
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Business Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                {/* Template and Plan Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="selectedTemplate"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Template Type
                    </label>
                    <select
                      id="selectedTemplate"
                      name="selectedTemplate"
                      value={formData.selectedTemplate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a template</option>
                      {templates.map((template) => (
                        <option key={template} value={template}>
                          {template}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="selectedPlan"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Plan of Choice *
                    </label>
                    <select
                      id="selectedPlan"
                      name="selectedPlan"
                      value={formData.selectedPlan}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a plan</option>
                      {plans.map((plan) => (
                        <option key={plan} value={plan}>
                          {plan}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Business Description */}
                <div>
                  <label
                    htmlFor="businessDescription"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tell us a bit about your business or what you need *
                  </label>
                  <textarea
                    id="businessDescription"
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe your business, services, target audience, and any specific requirements for your website..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl h-14 px-8 py-4 text-base font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Get Started"
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div
                      className={`mt-4 p-4 rounded-lg text-center ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Once you submit, we&apos;ll get in touch within 24 hours to
                    start your site.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
