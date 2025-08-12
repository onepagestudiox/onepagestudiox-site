import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - OnePageStudioX",
  description:
    "Privacy Policy for OnePageStudioX. Learn how we collect, use, and protect your personal information when using our website development services.",
  keywords:
    "privacy policy, data protection, OnePageStudioX privacy, website development privacy",
  openGraph: {
    title: "Privacy Policy - OnePageStudioX",
    description:
      "Privacy Policy for OnePageStudioX. Learn how we collect, use, and protect your personal information.",
  },
  twitter: {
    title: "Privacy Policy - OnePageStudioX",
    description:
      "Privacy Policy for OnePageStudioX. Learn how we protect your personal information.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: August 11, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8 text-center">
              At OnePageStudioX, your privacy is important to us.
            </p>

            <div className="space-y-8">
              {/* What we collect */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. What we collect
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Only the personal information you provide when you contact us
                  (like your name, email, phone).
                </p>
              </div>

              {/* How we use it */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. How we use it
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To respond to your inquiries and provide our services.
                </p>
              </div>

              {/* Information sharing */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Information sharing
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We don&apos;t share your info with anyone else except trusted
                  service providers who help us run our business.
                </p>
              </div>

              {/* Cookies & Tracking */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Cookies & Tracking
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We do not use cookies or tracking tools on our website.
                </p>
              </div>

              {/* Your rights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Your rights
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You can ask us to update or delete your personal information
                  anytime.
                </p>
              </div>

              {/* Questions */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Questions?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Email us at{" "}
                  <a
                    href="mailto:onepagestudiox@outlook.com"
                    className="text-primary hover:text-primary/80 underline font-medium"
                  >
                    onepagestudiox@outlook.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
