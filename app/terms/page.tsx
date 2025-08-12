import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - OnePageStudioX",
  description:
    "Terms of Service for OnePageStudioX. Read our service terms, payment policies, and client responsibilities for website development services.",
  keywords:
    "terms of service, website development terms, OnePageStudioX terms, service agreement",
  openGraph: {
    title: "Terms of Service - OnePageStudioX",
    description:
      "Terms of Service for OnePageStudioX. Read our service terms, payment policies, and client responsibilities.",
  },
  twitter: {
    title: "Terms of Service - OnePageStudioX",
    description:
      "Terms of Service for OnePageStudioX. Read our service terms and policies.",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: August 11, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8 text-center">
              Welcome to OnePageStudioX (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;). By using our services, you agree to the
              following terms. Please read them carefully.
            </p>

            <div className="space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Services
                </h2>
                <p className="text-muted-foreground">
                  We offer pre-designed one-page website templates for you to
                  choose from. Any customization beyond the selected template is
                  subject to additional fees.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Client Responsibilities
                </h2>
                <p className="text-muted-foreground">
                  You agree to provide all necessary information, content, and
                  timely feedback required to complete your selected template or
                  any customization.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Payment
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    A non-refundable deposit of 50% of the total project cost is
                    required before work begins.
                  </li>
                  <li>
                    The remaining 50% is due upon project completion and before
                    delivery or website launch.
                  </li>
                  <li>
                    If you cancel the project after paying the deposit, the
                    deposit will not be refunded.
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Revisions
                </h2>
                <p className="text-muted-foreground">
                  One round of revisions is included per project. Additional
                  revisions or customization requests will incur extra charges.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Delivery and Timeline
                </h2>
                <p className="text-muted-foreground">
                  We aim to deliver your selected template or customized site by
                  the agreed deadline. The 5-day delivery timeline begins after
                  the onboarding process is complete and we have received all
                  necessary content and information from you. Delays caused by
                  late client feedback or content submission may affect
                  timelines.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Intellectual Property
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    All templates, code, and design assets remain the exclusive
                    property of OnePageStudioX.
                  </li>
                  <li>
                    Upon full payment, you receive a non-transferable license to
                    use the final website for your own business purposes only.
                  </li>
                  <li>
                    You may not copy, modify, distribute, resell, or use the
                    templates or code for any other projects or commercial
                    purposes.
                  </li>
                  <li>
                    Unauthorized use or replication is prohibited and may result
                    in legal action.
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Cancellation and Refunds
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Deposits are non-refundable.</li>
                  <li>
                    If you cancel after work begins, you are responsible for
                    fees based on work completed.
                  </li>
                </ul>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  We are not liable for any indirect, incidental, or
                  consequential damages arising from the use of our services or
                  websites.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Governing Law
                </h2>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of Ontario, Canada.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. Changes to Terms
                </h2>
                <p className="text-muted-foreground">
                  We may update these terms from time to time. Updated versions
                  will be posted on our website.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. Contact
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about these terms, contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> onepagestudiox@outlook.com
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (647) 705-2049
                  </p>
                </div>
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
