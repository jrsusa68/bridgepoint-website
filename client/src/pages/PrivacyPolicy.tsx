/* ============================================================
   PRIVACY POLICY PAGE — Bridgepoint Business Collective
   Design: Executive Gravitas | Dark Blue #0d0e85 | Yellow #dcb92b
   Effective Date: February 18, 2026
   ============================================================ */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const BLUE   = "#0d0e85";
const YELLOW = "#dcb92b";
const BG     = "#F4F6F9";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: BG, fontFamily: "'Outfit', 'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ── Page Hero Bar ─────────────────────────────── */}
      <div style={{ backgroundColor: BLUE, paddingTop: "72px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 32px 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: YELLOW }} />
            <span style={{ color: YELLOW, fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>
              Legal
            </span>
          </div>
          <h1 style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "8px", lineHeight: 1.2 }}>
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", fontStyle: "italic" }}>
            Effective Date: February 18, 2026 &nbsp;·&nbsp; Bridgepoint Business Collective LLC
          </p>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────── */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 32px 80px" }}>

        {/* Notice Banner */}
        <div style={{ background: "#fff8e6", border: `1.5px solid #b8972a`, borderRadius: "6px", padding: "20px 24px", marginBottom: "48px" }}>
          <h3 style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#5a4a00", marginBottom: "10px" }}>
            Important Notice Regarding Text Messaging Data
          </h3>
          <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#5a4a00", fontWeight: 500, margin: 0 }}>
            Bridgepoint Business Collective LLC ("we," "us," or "our") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
          </p>
        </div>

        <Section title="1) Introduction">
          <p>Bridgepoint Business Collective LLC ("Bridgepoint," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use any of our websites, platforms, or services.</p>
          <SubSection title="1.1 Scope — Covered Sites &amp; Services">
            <p>This Privacy Policy applies to all information collected through the following properties operated by Bridgepoint Business Collective LLC:</p>
            <ul>
              <li>bridgepointbusinesscollective.com and all related subdomains</li>
              <li>bpbcollective.com and all related subdomains</li>
              <li>Any additional domains, subdomains, microsites, or landing pages operated by Bridgepoint Business Collective LLC</li>
              <li>Assessment and survey tools, calendar scheduling systems, and CRM platforms</li>
              <li>Any content, resources, educational materials, events, or features we make available</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="2) Information We Collect">
          <SubSection title="2.1 Information You Provide">
            <p>We may collect the following information when you interact with our Services:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
              <li><strong>Business Information:</strong> Business name, industry, years in operation, revenue range, and other business profile details provided through our assessment tools.</li>
              <li><strong>Payment Information:</strong> Payment details when you make a purchase or request a quote for our services.</li>
              <li><strong>Communication Records:</strong> Records of your communications with us, including emails, SMS messages, phone calls, and chat interactions.</li>
              <li><strong>Service History:</strong> Records of services provided, feedback, and your interaction history with our business.</li>
              <li><strong>Opt-In Records:</strong> Timestamped records of all opt-in actions for communication channels (SMS, email, etc.).</li>
              <li><strong>Account Information:</strong> Username, password, and account preferences.</li>
            </ul>
          </SubSection>
          <SubSection title="2.2 Information Collected Automatically">
            <p>When you access our Sites, we may automatically collect:</p>
            <ul>
              <li><strong>Device &amp; Browser Information:</strong> IP address, browser type and version, operating system, device identifiers.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, referring URLs, and navigation paths.</li>
              <li><strong>Cookies &amp; Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage, and support advertising. You can control cookie preferences through your browser settings.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="3) Our Business Model">
          <p>Bridgepoint Business Collective LLC provides business consulting services including:</p>
          <ul>
            <li>Operational efficiency consulting</li>
            <li>Business systems readiness assessment</li>
            <li>Strategic business planning</li>
            <li>AI integration and automation guidance</li>
          </ul>
          <p>We use collected information to: assess eligibility for our consulting services, communicate via email, phone, and SMS (with consent), improve website functionality and user experience, comply with legal obligations, prevent fraud, and provide customer support.</p>
        </Section>

        <Section title="4) SMS/Text Messaging Consent &amp; Privacy">
          <SubSection title="4.1 How We Collect SMS Consent">
            <p>We collect your consent to receive SMS/text messages through clearly labeled opt-in checkboxes on our assessment forms, contact forms, and scheduling tools. Consent checkboxes are never pre-selected. Consent to receive marketing messages is always separate from consent to receive transactional messages. Consent is not required as a condition of service. We maintain timestamped records of all opt-in actions and comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws.</p>
          </SubSection>
          <SubSection title="4.2 Types of Messages">
            <ul>
              <li><strong>Transactional:</strong> Appointment reminders, assessment confirmations, service updates, and account notifications.</li>
              <li><strong>Marketing</strong> (with separate opt-in): Promotional offers, educational content, event invitations, and business insights.</li>
            </ul>
          </SubSection>
          <SubSection title="4.3 Opt-Out">
            <p>You can cancel the SMS service at any time. Just text "STOP" to the number from which you received the message. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again. All opt-out requests are processed immediately.</p>
          </SubSection>
          <SubSection title="4.4 Help">
            <p>If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly at <a href="mailto:support@bridgepointbusinesscollective.com" style={{ color: BLUE, fontWeight: 600 }}>support@bridgepointbusinesscollective.com</a>. Customer support is available during regular business hours.</p>
          </SubSection>
          <SubSection title="4.5 Message Frequency &amp; Rates">
            <p>Message frequency varies based on your engagement with our services. Messages will be directly related to the services you have requested. We do not send promotional content without specific consent. Message and data rates may apply. Contact your wireless provider for details about your text plan.</p>
          </SubSection>
          <SubSection title="4.6 Carrier Disclaimer">
            <p>Carriers are not liable for delayed or undelivered messages. Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers.</p>
          </SubSection>
          <SubSection title="4.7 Mobile Information Non-Sharing &amp; SMS Data Protection">
            <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We implement strict data protection measures to safeguard your SMS opt-in information and consent records.</p>
          </SubSection>
        </Section>

        <Section title="5) How We Share Your Information">
          <p>We do not sell, rent, or trade personal information. We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>Third-Party Service Providers:</strong> For delivery of consulting services you have requested, including CRM platforms, scheduling tools, email service providers, SMS aggregators and providers (solely for the purpose of delivering messages you have consented to receive), and analytics providers. These providers are contractually obligated to protect your data and use it only for the services we engage them to perform.</li>
            <li><strong>Legal Compliance:</strong> When required by law, regulation, legal process, or governmental request, or in response to valid law enforcement requests or court orders.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. In such cases, your data remains protected under the terms of this policy.</li>
            <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of Bridgepoint Business Collective LLC, our users, or others.</li>
            <li><strong>With Your Consent:</strong> When you have given us explicit consent to share your information for a specific purpose.</li>
          </ul>
          <p>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</p>
        </Section>

        <Section title="6) Advertising &amp; Tracking">
          <p>We may use third-party advertising platforms (including Meta/Facebook, Instagram, Google, and TikTok) to deliver advertisements to you. These platforms may use cookies, pixel tags, and similar technologies to collect information about your interactions with our Sites and other websites to provide targeted advertising.</p>
          <p>We do not sell your personal information. We may share limited, anonymized or aggregated data with advertising partners to measure ad performance and optimize our marketing efforts. You can opt out of targeted advertising through the privacy settings of the relevant platforms or by using industry opt-out tools such as the Digital Advertising Alliance's opt-out page.</p>
          <p>For more information about how Meta processes data from our advertising, please refer to Meta's Data Policy at <a href="https://facebook.com/policy" target="_blank" rel="noreferrer" style={{ color: BLUE, fontWeight: 600 }}>facebook.com/policy</a>.</p>
          <p>For more information about how TikTok processes data from our advertising, please refer to TikTok's Privacy Policy at <a href="https://tiktok.com/legal/privacy-policy" target="_blank" rel="noreferrer" style={{ color: BLUE, fontWeight: 600 }}>tiktok.com/legal/privacy-policy</a>.</p>
        </Section>

        <Section title="7) Data Security">
          <p>We implement and maintain reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, use, or disclosure, including:</p>
          <ul>
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
            <li>Employee training on data protection</li>
            <li>Breach notification protocols in accordance with applicable laws</li>
            <li>Secure backup systems and disaster recovery procedures</li>
          </ul>
          <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>
        </Section>

        <Section title="8) Data Retention">
          <p>We retain your personal information for as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.</p>
        </Section>

        <Section title="9) Your Rights">
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access the personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to opt out of marketing communications</li>
            <li>The right to withdraw consent for SMS messaging at any time</li>
            <li>The right to request information on how we process your data</li>
            <li>The right to lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:support@bridgepointbusinesscollective.com" style={{ color: BLUE, fontWeight: 600 }}>support@bridgepointbusinesscollective.com</a>.</p>
        </Section>

        <Section title="10) Third-Party Links">
          <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by Bridgepoint Business Collective LLC through our Sites and Services.</p>
        </Section>

        <Section title="11) Children's Privacy">
          <p>Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.</p>
        </Section>

        <Section title="12) Changes to This Privacy Policy">
          <p>We may update this Privacy Policy from time to time. The "Effective Date" at the top of this page will reflect the latest version. For significant changes, we will notify you by email or through a notice on our website. We encourage you to review this Privacy Policy periodically. Your continued use of our Services after changes are posted constitutes acceptance of the updated Privacy Policy.</p>
        </Section>

        <Section title="13) Contact Us">
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
          <ContactBlock />
          <p style={{ marginTop: "16px", color: "#4a5568", fontSize: "15px", lineHeight: 1.8 }}>
            If you have any questions regarding privacy, please read this privacy policy or contact us at the information above.
          </p>
        </Section>

        {/* Footer rule */}
        <div style={{ marginTop: "56px", paddingTop: "20px", borderTop: `1px solid rgba(13,14,133,0.15)`, textAlign: "center", fontSize: "13px", color: "#777", fontWeight: 500 }}>
          Copyright &copy; 2026 Bridgepoint Business Collective LLC. All rights reserved.
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ── Sub-components ──────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <h2 style={{
        fontSize: "15px",
        fontWeight: 700,
        color: BLUE,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        borderBottom: `2px solid ${YELLOW}`,
        paddingBottom: "8px",
        marginBottom: "16px",
        fontFamily: "'Outfit', sans-serif",
      }}>
        {title}
      </h2>
      <div style={{ color: "#2d3748", fontSize: "15px", lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ fontSize: "14px", fontWeight: 700, color: BLUE, marginBottom: "8px", fontFamily: "'Outfit', sans-serif" }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

function ContactBlock() {
  return (
    <div style={{
      background: "#ffffff",
      border: `1px solid rgba(13,14,133,0.15)`,
      borderTop: `3px solid ${YELLOW}`,
      borderRadius: "6px",
      padding: "24px 28px",
      marginTop: "16px",
    }}>
      <p style={{ fontWeight: 700, color: BLUE, marginBottom: "4px", fontSize: "15px" }}>Bridgepoint Business Collective LLC</p>
      <p style={{ color: "#4a5568", marginBottom: "2px", fontSize: "14px" }}>25700 Interstate 45 North 4321</p>
      <p style={{ color: "#4a5568", marginBottom: "16px", fontSize: "14px" }}>The Woodlands, TX 77386</p>
      <p style={{ color: "#4a5568", marginBottom: "4px", fontSize: "14px" }}>
        General Inquiries:{" "}
        <a href="mailto:info@bridgepointbusinesscollective.com" style={{ color: BLUE, fontWeight: 600, textDecoration: "underline" }}>
          info@bridgepointbusinesscollective.com
        </a>
      </p>
      <p style={{ color: "#4a5568", fontSize: "14px" }}>
        Support:{" "}
        <a href="mailto:support@bridgepointbusinesscollective.com" style={{ color: BLUE, fontWeight: 600, textDecoration: "underline" }}>
          support@bridgepointbusinesscollective.com
        </a>
      </p>
    </div>
  );
}
