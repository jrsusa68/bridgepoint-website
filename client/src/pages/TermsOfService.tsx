/* ============================================================
   TERMS OF SERVICE PAGE — Bridgepoint Business Collective
   Design: Executive Gravitas | Dark Blue #0d0e85 | Yellow #dcb92b
   Effective Date: February 18, 2026
   ============================================================ */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const BLUE   = "#0d0e85";
const YELLOW = "#dcb92b";
const BG     = "#F4F6F9";

export default function TermsOfService() {
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
            Terms of Service
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
            Important Notice Regarding These Terms
          </h3>
          <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#5a4a00", fontWeight: 500, margin: 0 }}>
            By accessing or using any services provided by Bridgepoint Business Collective LLC, you agree to be bound by these Terms of Service. Please read them carefully before proceeding. If you do not agree to these terms, please do not use our services.
          </p>
        </div>

        <Section title="1) Acceptance of Terms">
          <p>This website and the services described here (the "Services") are provided by <strong>Bridgepoint Business Collective LLC</strong> ("Bridgepoint," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of:</p>
          <SubLabel>Sites &amp; Applications</SubLabel>
          <ul>
            <li>bridgepointbusinesscollective.com and all related subdomains</li>
            <li>bpbcollective.com and all related subdomains</li>
            <li>Any additional domains, subdomains, microsites, or landing pages operated by Bridgepoint Business Collective LLC</li>
          </ul>
          <SubLabel>Client Tools &amp; Platforms</SubLabel>
          <ul>
            <li>Assessment and survey tools hosted on any of the above domains</li>
            <li>Calendar scheduling and booking systems</li>
            <li>CRM and client communication platforms</li>
            <li>Any content, resources, educational materials, events, or features we make available</li>
          </ul>
          <p>By accessing or using any portion of the Services, you agree to these Terms, our Privacy Policy, and any service-specific terms or order forms. If you do not agree, do not use the Services.</p>
          <p><strong>Age Requirement:</strong> The Services are intended for users 18 years of age or older in the United States.</p>
        </Section>

        <Section title="2) Changes to Terms">
          <p>We may update these Terms at any time. The "Effective Date" above will reflect the latest version. Your continued use after changes become effective constitutes acceptance of the updated Terms.</p>
        </Section>

        <Section title="3) Relationship; Consulting Services Only">
          <p>We provide business consulting services focused on operational efficiency, business systems readiness, and strategic planning. We are not licensed financial advisors, attorneys, or accountants. Our services are educational and advisory in nature.</p>
          <p>Any business decisions you make based on our consulting are your sole responsibility. You should consult licensed professionals for specific legal, tax, or financial advice.</p>
          <p>We may, from time to time, provide referrals or introductions to third-party service providers as part of our consulting engagement. These introductions are informational only. We do not control, endorse, or guarantee the services, terms, or outcomes offered by any third-party provider. Any agreement you enter into with a third-party provider is solely between you and that provider.</p>
        </Section>

        <Section title="4) Accounts; Security">
          <ul>
            <li>You must provide accurate registration information and keep it current.</li>
            <li>You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.</li>
            <li>We may require multi-factor authentication (e.g., SMS OTP) and periodic password resets.</li>
            <li>We may suspend or terminate accounts for suspected abuse, fraud, or violations of these Terms.</li>
          </ul>
        </Section>

        <Section title="5) Services Description">
          <p>Bridgepoint Business Collective LLC offers the following consulting services:</p>
          <ul>
            <li>AI Tool Selection &amp; Implementation</li>
            <li>Workflow Automation Setup</li>
            <li>Business Systems Consulting</li>
            <li>CRM &amp; Software Integration</li>
            <li>Business Readiness Assessment &amp; Growth Strategy</li>
            <li>Operational Efficiency &amp; Strategic Planning</li>
          </ul>
          <p>We may update or modify service offerings from time to time. We do not guarantee uninterrupted availability, specific outcomes, or compatibility with any particular third-party service. Results vary based on individual circumstances, business readiness, and implementation effort.</p>
        </Section>

        <Section title="6) Payment Terms &amp; Refund Policy">
          <p>Fees for consulting services are outlined in your individual consulting agreement or order form. All fees are due as specified and are non-refundable except as described below.</p>
          <p><strong>Exception:</strong> If services are not delivered as described in your consulting agreement, we will work with you to resolve the issue or provide a partial refund at our discretion. Refund requests must be submitted within 30 days of service delivery.</p>
        </Section>

        <Section title="7) SMS/Text Messaging Terms">
          <p>Bridgepoint Business Collective LLC may send you SMS/text messages related to our consulting services, including appointment reminders, service updates, assessment results, educational content, and promotional offers (with your separate consent).</p>
          <SubSection title="7.1 Consent">
            <p>By providing your phone number and checking the appropriate consent box(es) on our forms, you agree to receive text messages from Bridgepoint Business Collective LLC. Consent is not a condition of purchasing any goods or services. You may receive messages related to:</p>
            <ul>
              <li><strong>Transactional Messages:</strong> Appointment reminders, assessment confirmations, service updates, and account notifications.</li>
              <li><strong>Marketing Messages</strong> (with separate opt-in): Promotional offers, educational content, event invitations, and business insights.</li>
            </ul>
          </SubSection>
          <SubSection title="7.2 Opt-Out">
            <p>You can cancel the SMS service at any time. Just text "STOP" to the number from which you received the message. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.</p>
          </SubSection>
          <SubSection title="7.3 Help">
            <p>If you are experiencing issues with the messaging program, you can reply with the keyword HELP for more assistance, or you can get help directly at <a href="mailto:support@bridgepointbusinesscollective.com" style={{ color: BLUE, fontWeight: 600 }}>support@bridgepointbusinesscollective.com</a>.</p>
          </SubSection>
          <SubSection title="7.4 Message Frequency &amp; Rates">
            <p>Message and data rates may apply for any messages sent to you from us and to us from you. Message frequency varies based on your engagement with our services. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</p>
          </SubSection>
          <SubSection title="7.5 Carrier Liability">
            <p>Carriers are not liable for delayed or undelivered messages.</p>
          </SubSection>
          <SubSection title="7.6 Mobile Information Privacy">
            <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
          </SubSection>
        </Section>

        <Section title="8) Intellectual Property">
          <p>All content, trademarks, logos, and intellectual property displayed on our Sites and Applications are the property of Bridgepoint Business Collective LLC or our licensors. You may not reproduce, distribute, modify, or create derivative works from our content without prior written permission.</p>
        </Section>

        <Section title="9) User Content &amp; Conduct">
          <p>You retain ownership of any content you submit through our Services (e.g., assessment responses, uploaded documents). By submitting content, you grant us a limited, non-exclusive license to use it solely for the purpose of delivering our consulting services to you.</p>
          <p>You agree not to use the Services for any unlawful purpose, to transmit harmful content, to impersonate others, or to interfere with the operation of the Services.</p>
        </Section>

        <Section title="10) Third-Party Services &amp; Links">
          <p>Our Sites may contain links to third-party websites, tools, or services. These links are provided for convenience only. We do not control or endorse third-party content and are not responsible for the accuracy, availability, or practices of any third-party service. Your use of third-party services is at your own risk and subject to that party's terms and policies.</p>
        </Section>

        <Section title="11) Disclaimer of Warranties">
          <LegalCaps>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. WE DO NOT GUARANTEE ANY SPECIFIC BUSINESS OUTCOMES OR RESULTS FROM THE USE OF OUR CONSULTING SERVICES.
          </LegalCaps>
        </Section>

        <Section title="12) Limitation of Liability">
          <LegalCaps>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, BRIDGEPOINT BUSINESS COLLECTIVE LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </LegalCaps>
        </Section>

        <Section title="13) Indemnification">
          <p>You agree to indemnify and hold harmless Bridgepoint Business Collective LLC, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney's fees) arising from your use of the Services, your violation of these Terms, or your violation of any third-party rights.</p>
        </Section>

        <Section title="14) Governing Law &amp; Dispute Resolution">
          <p>These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved through binding arbitration in Montgomery County, Texas, or as otherwise required by applicable law. You agree to waive any right to participate in a class-action lawsuit or class-wide arbitration.</p>
        </Section>

        <Section title="15) Privacy">
          <p>Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at <a href="/privacy-policy" style={{ color: BLUE, fontWeight: 600 }}>bridgepointbusinesscollective.com/privacy-policy</a> to understand how we collect, use, and protect your information.</p>
        </Section>

        <Section title="16) General Provisions">
          <ul>
            <li><strong>Entire Agreement.</strong> These Terms, together with the Privacy Policy and any applicable order forms, constitute the entire agreement between you and Bridgepoint Business Collective LLC.</li>
            <li><strong>Assignment.</strong> We may assign our rights under these Terms in connection with a merger, acquisition, or sale.</li>
            <li><strong>Severability.</strong> If any provision is unlawful or unenforceable, the remaining provisions remain in full force.</li>
            <li><strong>No Waiver.</strong> Failure to enforce any provision is not a waiver of future enforcement.</li>
            <li><strong>Notices.</strong> We may provide notices via email, in-product messages, or posting on our Sites. You may contact us at <a href="mailto:info@bridgepointbusinesscollective.com" style={{ color: BLUE, fontWeight: 600 }}>info@bridgepointbusinesscollective.com</a>.</li>
          </ul>
        </Section>

        <Section title="17) Contact">
          <p>If you have any questions or concerns about these Terms of Service, please contact us:</p>
          <ContactBlock />
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

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "13px", fontWeight: 700, color: BLUE, marginTop: "16px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
      {children}
    </p>
  );
}

function LegalCaps({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "rgba(13,14,133,0.04)",
      border: `1px solid rgba(13,14,133,0.12)`,
      borderLeft: `3px solid ${YELLOW}`,
      borderRadius: "4px",
      padding: "16px 20px",
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: 1.75,
      color: "#2d3748",
    }}>
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
