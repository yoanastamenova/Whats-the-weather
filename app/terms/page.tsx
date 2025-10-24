export default function TermsPage() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-semibold lg:text-6xl">
            Terms of Service
          </h1>

          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-3xl font-semibold">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using What&apos;s the Weather, you agree to be bound by these Terms of Service and all applicable
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing
                this site.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access the materials (information or software) on What&apos;s the Weather&apos;s
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                of title, and under this license you may not:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">3. Weather Information Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The weather information and forecasts provided on this website are for informational purposes only. While we
                strive to provide accurate and up-to-date information, we make no warranties or representations about the
                accuracy, reliability, completeness, or timeliness of the weather data. Weather conditions can change rapidly,
                and you should not rely solely on our forecasts for making critical decisions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">4. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at
                all times. Failure to do so constitutes a breach of the Terms. You are responsible for:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Safeguarding the password that you use to access the service</li>
                <li>Any activities or actions under your password</li>
                <li>Notifying us immediately upon becoming aware of any breach of security or unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">5. Prohibited Uses</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the service</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive property
                of What&apos;s the Weather and its licensors. The service is protected by copyright, trademark, and other laws of
                both the country and foreign countries. Our trademarks and trade dress may not be used in connection with any
                product or service without the prior written consent of What&apos;s the Weather.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">7. Links to Other Websites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service may contain links to third-party websites or services that are not owned or controlled by What&apos;s
                the Weather. We have no control over, and assume no responsibility for, the content, privacy policies, or
                practices of any third-party websites or services. You further acknowledge and agree that we shall not be
                responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or
                in connection with the use of any such content, goods, or services available on or through any such websites.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall What&apos;s the Weather, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation,
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or
                inability to access or use the service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">9. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the service is at your sole risk. The service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
                The service is provided without warranties of any kind, whether express or implied, including, but not limited
                to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of
                performance.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or
                liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
                limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using
                the service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of Spain, without regard to its
                conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered
                a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
                material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a
                material change will be determined at our sole discretion. By continuing to access or use our service after
                any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:email@example.com" className="underline underline-offset-4 hover:text-foreground transition-colors">
                  email@example.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
