/* ============================================================
   FOOTER COMPONENT — Bridgepoint Business Collective
   Design: Executive Gravitas | Dark Blue #0d0e85 | Yellow #dcb92b
   Source: Webflow Component e69f57ef-66f4-d046-153c-db167cf3df38
   
   ── HOW TO UPDATE ──────────────────────────────────────────
   All editable content lives in the DATA SECTION below.
   To update links, addresses, emails, or social URLs:
   → Edit the FOOTER_DATA object — no JSX changes needed.
   ============================================================ */

import { Mail, MapPin, ExternalLink } from "lucide-react";

// ─── BRAND TOKENS ────────────────────────────────────────────
const BLUE          = "#0d0e85";
const FOOTER_BG     = "#F4F6F9";   /* matches Navbar background */
const YELLOW        = "#dcb92b";
const YELLOW_BORDER = "rgba(220,185,43,0.5)";
const TEXT_PRIMARY  = "#0d0e85";   /* dark blue for headings */
const TEXT_BODY     = "#3a3f5c";   /* muted navy for body text */
const TEXT_MUTED    = "rgba(13,14,133,0.45)"; /* light labels */
const DIVIDER       = "rgba(13,14,133,0.1)";  /* subtle dividers */

// ─── DATA SECTION — EDIT HERE TO UPDATE FOOTER CONTENT ───────
const FOOTER_DATA = {
  company: {
    name: "Bridgepoint Business Collective",
    tagline: "Premium Business Advisory",
    description:
      "A premium advisory firm supporting new and established small and midsize businesses across the United States. We help entrepreneurs build, grow, and scale.",
  },

  quickLinks: [
    { label: "Home",       href: "/" },
    { label: "Services",   href: "/services" },
    { label: "About Us",   href: "/about" },
    { label: "Contact Us", href: "/#contact" },
  ],

  legal: [
    { label: "Privacy Policy",    href: "/privacy-policy" },
    { label: "Terms of Service",  href: "/terms-of-service" },
  ],

  contact: {
    entity:  "Bridgepoint Business Collective LLC",
    address: "25700 Interstate 45 North 4321",
    city:    "The Woodlands, TX 77386",
    emails: [
      { label: "General Inquiries", address: "info@bridgepointbusinesscollective.com" },
      { label: "Support",           address: "support@bridgepointbusinesscollective.com" },
    ],
  },

  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/rsmithcollective",
      icon: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69976f1931fd61e46f62e232_icon-instagram.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/BridgepointBusinessCollective",
      icon: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69976f191d748eea451c9807_icon-facebook.svg",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@rsmithcollective",
      icon: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69976f2e9e41b9c091258a7f_icon-tiktok.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bridgepoint-business-collective-76b9b43b7",
      icon: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69976f19203e8c1875eb5c92_icon-linkedin.svg",
    },
    {
      name: "Twitter / X",
      href: "https://x.com/rsmithconsults",
      icon: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69976f19187c5258281fcf7b_icon-twitter.svg",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@BridgepointBC",
      icon: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69976f19028531815b87fae1_icon-youtube.svg",
    },
  ],

  legalDisclosures: [
    "Consulting Services Only",
    "Text STOP to cancel · Text HELP for assistance",
    "Message and data rates may apply · Message frequency varies",
    "Carriers are not liable for delayed or undelivered messages",
    "No mobile information will be shared with third parties for marketing",
  ],

  copyright: `© ${new Date().getFullYear()} Bridgepoint Business Collective LLC. All rights reserved.`,
};
// ─── END DATA SECTION ─────────────────────────────────────────

// ─── Sub-components ───────────────────────────────────────────

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h4
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          color: TEXT_PRIMARY,
          letterSpacing: "0.02em",
          marginBottom: "0.5rem",
        }}
      >
        {children}
      </h4>
      <div style={{ width: "28px", height: "2px", background: YELLOW, opacity: 0.7 }} />
    </div>
  );
}

function FooterLink({
  href,
  children,
  external = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
}) {
  const style: React.CSSProperties = {
    color: TEXT_BODY,
    fontSize: "0.88rem",
    fontWeight: 500,
    lineHeight: 1.6,
    textDecoration: "none",
    transition: "color 0.2s",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
  };

  const handleHover = (e: React.MouseEvent, enter: boolean) => {
    (e.currentTarget as HTMLElement).style.color = enter ? BLUE : TEXT_BODY;
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        style={style}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={style}
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
    >
      {children}
      {external && <ExternalLink size={11} style={{ opacity: 0.5, flexShrink: 0 }} />}
    </a>
  );
}

// ─── Main Footer Component ────────────────────────────────────
export default function Footer() {
  const scrollTo = (href: string) => {
    // For /#hash links: always navigate via window.location so it works
    // from any page. The Home page will load and the browser will auto-
    // scroll to the anchor (native browser hash behaviour).
    if (href.startsWith("/#") || href.startsWith("#")) {
      const isAbsolute = href.startsWith("/#");
      const id = href.replace("/#", "").replace("#", "");
      if (isAbsolute) {
        // Cross-page: force full navigation
        window.location.href = href;
      } else {
        // Same-page: smooth scroll if element exists, else navigate
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = "/" + href;
        }
      }
      return;
    }
    window.location.href = href;
  };

  return (
    <footer style={{ backgroundColor: FOOTER_BG, borderTop: `3px solid ${YELLOW}` }}>

      {/* ── Upper Footer ─────────────────────────────────── */}
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >

          {/* ── Brand Column ─────────────────────────────── */}
          <div style={{ gridColumn: "span 1" }}>
            {/* Real Bridgepoint logo — same as Navbar */}
            <div className="mb-5">
              <img
                src="https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/6996d94a4bc44b5aa2d061d9_Bridgepoint%20560%20x%20120%20px.png"
                alt="Bridgepoint Business Collective"
                style={{ height: "44px", width: "auto", objectFit: "contain" }}
              />
            </div>
            <p style={{ color: TEXT_BODY, fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "240px", fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>
              {FOOTER_DATA.company.description}
            </p>
          </div>

          {/* ── Quick Links ──────────────────────────────── */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {FOOTER_DATA.quickLinks.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  onClick={(link.href.startsWith("#") || link.href.startsWith("/#")) ? () => scrollTo(link.href) : undefined}
                >
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* ── Legal ────────────────────────────────────── */}
          <div>
            <FooterHeading>Legal</FooterHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {FOOTER_DATA.legal.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* ── Contact ──────────────────────────────────── */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {/* Address */}
              <div className="flex gap-2" style={{ alignItems: "flex-start" }}>
                <MapPin size={14} style={{ color: YELLOW, flexShrink: 0, marginTop: "3px" }} />
                <div>
                  <div style={{ color: TEXT_PRIMARY, fontSize: "0.88rem", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", marginBottom: "2px" }}>
                    {FOOTER_DATA.contact.entity}
                  </div>
                  <div style={{ color: TEXT_BODY, fontSize: "0.88rem", fontWeight: 500, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>
                    {FOOTER_DATA.contact.address}<br />
                    {FOOTER_DATA.contact.city}
                  </div>
                </div>
              </div>

              {/* Emails */}
              {FOOTER_DATA.contact.emails.map((email) => (
                <div key={email.address} className="flex gap-2" style={{ alignItems: "flex-start" }}>
                  <Mail size={14} style={{ color: YELLOW, flexShrink: 0, marginTop: "3px" }} />
                  <div>
                    <div style={{ color: TEXT_MUTED, fontSize: "0.72rem", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>
                      {email.label}
                    </div>
                    <a
                      href={`mailto:${email.address}`}
                      style={{ color: TEXT_BODY, fontSize: "0.85rem", fontWeight: 500, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s", wordBreak: "break-all" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = BLUE; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = TEXT_BODY; }}
                    >
                      {email.address}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Follow Us ────────────────────────────────── */}
          <div>
            <FooterHeading>Follow Us</FooterHeading>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "14px", justifyContent: "start", alignItems: "center" }}>
              {FOOTER_DATA.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                  border: `1px solid ${DIVIDER}`,
                  transition: "border-color 0.2s, background 0.2s",
                  background: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = YELLOW;
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(220,185,43,0.08)";
                    const img = (e.currentTarget as HTMLAnchorElement).querySelector("img");
                    if (img) img.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = DIVIDER;
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.6)";
                    const img = (e.currentTarget as HTMLAnchorElement).querySelector("img");
                    if (img) img.style.opacity = "0.8";
                  }}
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    style={{
                      width: "18px",
                      height: "18px",
                      objectFit: "contain",
                      /* Original brand colors — no filter applied */
                      filter: "none",
                      opacity: 0.8,
                      transition: "opacity 0.2s",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

        </div>



        {/* ── Bottom Bar ───────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: TEXT_BODY, fontSize: "0.82rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
            {FOOTER_DATA.copyright}
          </p>

        </div>

      </div>
    </footer>
  );
}
