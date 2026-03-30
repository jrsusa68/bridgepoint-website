/* ============================================================
   SERVICES PAGE — Bridgepoint Business Collective
   Design: Executive Gravitas | Navy #0d0e85 | Yellow #dcb92b
   Source: Bridgepoint_Webflow_Copy_Blocks.md (A2P Compliant)
   ============================================================ */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useMobile";

// ─── BRAND TOKENS ─────────────────────────────────────────────
const BLUE    = "#0d0e85";
const YELLOW  = "#dcb92b";
const LIGHT   = "#F4F6F9";
const WHITE   = "#ffffff";

// ─── SERVICES DATA (A2P Compliant) ────────────────────────────
const SERVICES = [
  {
    num: "01",
    title: "Strategic Growth Consulting",
    subtitle: "Build the Foundation. Prepare for Scale.",
    description:
      "Every business that scales has one thing in common: it was built on a foundation that strategic partners and growth networks require. We prepare your business with the documentation, financial narratives, and investor-ready materials that position you for long-term growth.",
    details: [
      "Business entity structure & legitimacy review",
      "Financial narrative development",
      "Growth-readiness documentation",
      "Strategic partner preparation materials",
      "Business credit profile assessment",
      "Readiness assessment & action plan",
    ],
    cta: "Get Started",
    highlight: "The businesses that scale are the ones that prepared before they needed to.",
  },
  {
    num: "02",
    title: "Financial Infrastructure",
    subtitle: "Build Robust Systems. Sustain Strategic Access.",
    description:
      "Sustainable growth requires more than revenue — it requires the financial infrastructure to support it. We help you build bookkeeping systems, financial reporting processes, and compliance frameworks that support sustainable growth and strategic access.",
    details: [
      "Bookkeeping systems setup & optimization",
      "Financial reporting process design",
      "Compliance framework development",
      "Business banking relationship strategy",
      "Trade line establishment & management",
      "Financial documentation review",
    ],
    cta: "Get Started",
    highlight: "Financial infrastructure is not a back-office function — it is a growth engine.",
  },
  {
    num: "03",
    title: "Operational Strategy & AI",
    subtitle: "Streamline Workflows. Build Scalable Systems.",
    description:
      "Operational efficiency is the difference between a business that grows and one that stalls. We help you streamline workflows, implement AI-enhanced processes, and build scalable systems that increase efficiency and reduce operational overhead.",
    details: [
      "Workflow audit & optimization",
      "AI-enhanced communication systems",
      "Lead management & scheduling automation",
      "Performance reporting dashboards",
      "Standard operating procedure development",
      "Technology stack assessment & integration",
    ],
    cta: "Get Started",
    highlight: "The right systems do not just save time — they create the capacity to grow.",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Readiness Assessment", desc: "We begin with a comprehensive assessment of your current business position, financial infrastructure, and operational systems." },
  { num: "02", title: "Strategic Consultation", desc: "We review your assessment together and develop a clear, prioritized action plan tailored to your specific growth objectives." },
  { num: "03", title: "Implementation Support", desc: "We stay with you through the process — providing guidance, resources, and accountability at every stage of execution." },
  { num: "04", title: "Growth Positioning", desc: "We ensure your business is positioned for the next stage of growth — with the systems, documentation, and relationships that scale requires." },
];

// ─── Intersection Observer Hook ───────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Services() {
  const isMobile = useIsMobile();
  const heroRef    = useInView(0.1);
  const cardsRef   = useInView(0.1);
  const processRef = useInView(0.1);
  const ctaRef     = useInView(0.1);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: WHITE }}>
      <Navbar />

      {/* ── Hero Bar ──────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${BLUE} 0%, #0a0c6b 100%)`,
          paddingTop: isMobile ? "100px" : "120px",
          paddingBottom: isMobile ? "48px" : "72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot grid texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.08) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }} />
        {/* Gold rule accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: YELLOW }} />

        <div
          ref={heroRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ width: "48px", height: "1px", background: YELLOW }} />
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.7rem",
              letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW,
            }}>
              What We Do
            </span>
          </div>
          <h1
            className={`transition-all duration-700 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              fontWeight: 800,
              color: WHITE,
              lineHeight: 1.1,
              maxWidth: "700px",
              marginBottom: "1.5rem",
            }}
          >
            Business Systems &{" "}
            <span style={{ color: YELLOW, fontStyle: "italic" }}>Growth Strategy</span>
          </h1>
          <p
            className={`transition-all duration-700 delay-100 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "600px",
              lineHeight: 1.75,
            }}
          >
            Bridgepoint Business Collective supports new and established small and midsize businesses across the United States through three core advisory services — each designed to build, grow, and scale your business with clarity and confidence.
          </p>
        </div>
      </section>

      {/* ── Three Service Pillars ─────────────────────────────── */}
      <section style={{ background: LIGHT, padding: isMobile ? "56px 0" : "96px 0" }}>
        <div
          ref={cardsRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "1.25rem" }}>
              <div style={{ width: "40px", height: "1px", background: YELLOW }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
                Our Services
              </span>
              <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            </div>
            <h2
              className={`transition-all duration-700 ${cardsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3vw, 3rem)",
                fontWeight: 700,
                color: BLUE,
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Three Pillars. One Clear Path Forward.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              fontWeight: 400,
              color: "#4B5563",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}>
              Every service we offer is built around the insights that separate businesses that scale from those that stall.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {SERVICES.map((service, i) => (
              <div
                key={service.num}
                className={`bp-card transition-all duration-700 ${cardsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  background: WHITE,
                  border: `1px solid rgba(13,14,133,0.08)`,
                  borderLeft: `4px solid ${YELLOW}`,
                  borderRadius: "8px",
                }}
              >
                {/* ── Default card body ── */}
                <div className="bp-card-body" style={{
                  padding: "2.5rem",
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: isMobile ? "1.5rem" : "2.5rem",
                  alignItems: "start",
                }}>
                  {/* Left: Title + Description + Highlight */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                      <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: YELLOW,
                        background: "rgba(220,185,43,0.1)",
                        padding: "4px 10px",
                        borderRadius: "2px",
                      }}>
                        {service.num}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.5rem, 2vw, 1.9rem)",
                      fontWeight: 700,
                      color: BLUE,
                      marginBottom: "0.5rem",
                      lineHeight: 1.2,
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: YELLOW,
                      marginBottom: "1.25rem",
                    }}>
                      {service.subtitle}
                    </p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#374151",
                      lineHeight: 1.8,
                      marginBottom: "1.5rem",
                    }}>
                      {service.description}
                    </p>
                    {/* Insight callout */}
                    <div style={{
                      borderLeft: `3px solid ${YELLOW}`,
                      paddingLeft: "1rem",
                      marginTop: "1rem",
                    }}>
                      <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "0.95rem",
                        fontStyle: "italic",
                        color: BLUE,
                        lineHeight: 1.6,
                        margin: 0,
                      }}>
                        "{service.highlight}"
                      </p>
                    </div>
                  </div>

                  {/* Right: Details list + CTA */}
                  <div>
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(13,14,133,0.45)",
                      marginBottom: "1rem",
                    }}>
                      What's Included
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {service.details.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <span style={{
                            flexShrink: 0,
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: YELLOW,
                            marginTop: "7px",
                          }} />
                          <span style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#1F2937",
                            lineHeight: 1.6,
                          }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/#contact"
                      style={{
                        display: "inline-block",
                        fontFamily: "'Outfit', 'DM Sans', sans-serif",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "12px 28px",
                        background: BLUE,
                        color: WHITE,
                        textDecoration: "none",
                        borderRadius: "2px",
                        transition: "background 0.2s, color 0.2s",
                        border: `1px solid ${BLUE}`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = YELLOW;
                        (e.currentTarget as HTMLAnchorElement).style.color = BLUE;
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = YELLOW;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = BLUE;
                        (e.currentTarget as HTMLAnchorElement).style.color = WHITE;
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = BLUE;
                      }}
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>

                {/* ── Navy slide-up overlay ── */}
                <div className="bp-card-overlay" style={{ borderRadius: "8px", borderLeft: `4px solid ${YELLOW}` }}>
                  <div className="bp-card-overlay-label">{service.subtitle}</div>
                  <div className="bp-card-overlay-rule" />
                  <div className="bp-card-overlay-title">{service.title}</div>
                  <div className="bp-card-overlay-body">{service.description}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {service.details.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ color: YELLOW, fontSize: "0.65rem", marginTop: "0.35rem", flexShrink: 0 }}>◆</span>
                        <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "rgba(255,255,255,0.92)", lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    style={{
                      display: "inline-block",
                      marginTop: "1.5rem",
                      fontFamily: "'Outfit', 'DM Sans', sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "10px 24px",
                      background: YELLOW,
                      color: BLUE,
                      textDecoration: "none",
                      borderRadius: "2px",
                    }}
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — Process Steps ─────────────────────── */}
      <section style={{ background: BLUE, padding: "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.07) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />
        <div
          ref={processRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "1.25rem" }}>
              <div style={{ width: "40px", height: "1px", background: YELLOW }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
                How It Works
              </span>
              <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            </div>
            <h2
              className={`transition-all duration-700 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3vw, 3rem)",
                fontWeight: 700,
                color: WHITE,
                lineHeight: 1.2,
              }}
            >
              Getting Started Is Simple
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}>
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`bp-card transition-all duration-700 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(220,185,43,0.2)",
                  borderTop: `3px solid ${YELLOW}`,
                  borderRadius: "6px",
                }}
              >
                {/* ── Default body ── */}
                <div className="bp-card-body" style={{ padding: "2rem" }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "rgba(220,185,43,0.25)",
                    marginBottom: "1rem",
                    lineHeight: 1,
                  }}>
                    {step.num}
                  </div>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: WHITE,
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    {step.desc}
                  </p>
                </div>

                {/* ── Navy slide-up overlay (lighter navy to contrast dark bg) ── */}
                <div className="bp-card-overlay" style={{ borderRadius: "6px", background: "#1112a0" }}>
                  <div className="bp-card-overlay-label">Step {step.num}</div>
                  <div className="bp-card-overlay-rule" />
                  <div className="bp-card-overlay-title">{step.title}</div>
                  <div className="bp-card-overlay-body" style={{ marginBottom: 0 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────── */}
      <section style={{ background: LIGHT, padding: isMobile ? "56px 0" : "96px 0" }}>
        <div
          ref={ctaRef.ref}
          style={{ maxWidth: "700px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "1.25rem" }}>
            <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
              Ready to Begin
            </span>
            <div style={{ width: "40px", height: "1px", background: YELLOW }} />
          </div>
          <h2
            className={`transition-all duration-700 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: BLUE,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Ready to Build Your Clear Path Forward?
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 400,
            color: "#4B5563",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}>
            Every business owner deserves a clear path forward. Bridgepoint was built to be the advisory partner that delivers one. Schedule your readiness assessment today.
          </p>
          <a
            href="/#contact"
            style={{
              display: "inline-block",
              fontFamily: "'Outfit', 'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: BLUE,
              color: WHITE,
              textDecoration: "none",
              borderRadius: "2px",
              border: `1px solid ${BLUE}`,
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = YELLOW;
              (e.currentTarget as HTMLAnchorElement).style.color = BLUE;
              (e.currentTarget as HTMLAnchorElement).style.borderColor = YELLOW;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = BLUE;
              (e.currentTarget as HTMLAnchorElement).style.color = WHITE;
              (e.currentTarget as HTMLAnchorElement).style.borderColor = BLUE;
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />

      {/* Responsive grid fix for service cards */}
      <style>{`
        @media (max-width: 768px) {
          .service-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
