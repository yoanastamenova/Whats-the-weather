export default function PrivacyPolicy() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-semibold lg:text-6xl">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-3xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to What's the Weather. We respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you visit our website
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Identity Data includes first name, last name, username or similar identifier</li>
                <li>Contact Data includes email address and telephone numbers</li>
                <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location</li>
                <li>Usage Data includes information about how you use our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>To provide and maintain our weather services</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
                used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those
                employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for,
                including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">6. Your Legal Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">7. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website may include links to third-party websites, plug-ins and applications. Clicking on those links
                or enabling those connections may allow third parties to collect or share data about you. We do not control
                these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track the activity on our service and hold certain information.
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-semibold">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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
