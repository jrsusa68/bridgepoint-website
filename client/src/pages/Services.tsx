/* ============================================================
   SERVICES PAGE — Bridgepoint Business Collective
   Design: Executive Gravitas | Navy #0d0e85 | Yellow #dcb92b
   Clean card layout — no overlay system, reliable on all browsers
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
const DARK    = "#07082a";

// ─── SERVICES DATA ────────────────────────────────────────────
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

// ─── CTA Button ───────────────────────────────────────────────
function CtaButton({ label = "Get Started →", dark = false }: { label?: string; dark?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const bg = dark
    ? (hovered ? YELLOW : WHITE)
    : (hovered ? YELLOW : BLUE);
  const color = dark
    ? (hovered ? BLUE : BLUE)
    : (hovered ? BLUE : WHITE);
  const border = dark
    ? (hovered ? YELLOW : WHITE)
    : (hovered ? YELLOW : BLUE);

  return (
    <a
      href="/#contact"
      onClick={(e) => { e.preventDefault(); window.location.href = "/#contact"; }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        width: "fit-content",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        padding: "13px 32px",
        background: bg,
        color: color,
        textDecoration: "none",
        borderRadius: "2px",
        border: `2px solid ${border}`,
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </a>
  );
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
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.08) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: YELLOW }} />

        <div
          ref={heroRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
            <div style={{ width: "48px", height: "1px", background: YELLOW }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
              What We Do
            </span>
          </div>
          <h1
            className={`transition-all duration-700 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 800, color: WHITE, lineHeight: 1.1, maxWidth: "700px", marginBottom: "1.5rem" }}
          >
            Business Systems &{" "}
            <span style={{ color: YELLOW, fontStyle: "italic" }}>Growth Strategy</span>
          </h1>
          <p
            className={`transition-all duration-700 delay-100 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.2rem)", fontWeight: 400, color: "rgba(255,255,255,0.82)", maxWidth: "600px", lineHeight: 1.75 }}
          >
            Bridgepoint Business Collective supports new and established small and midsize businesses across the United States through three core advisory services — each designed to build, grow, and scale your business with clarity and confidence.
          </p>
        </div>
      </section>

      {/* ── Three Service Cards ───────────────────────────────── */}
      <section style={{ background: LIGHT, padding: isMobile ? "56px 0" : "96px 0" }}>
        <div
          ref={cardsRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem" }}
        >
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "1.25rem" }}>
              <div style={{ width: "40px", height: "1px", background: YELLOW }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
                Our Services
              </span>
              <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            </div>
            <h2
              className={`transition-all duration-700 ${cardsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 700, color: BLUE, lineHeight: 1.2, marginBottom: "1rem" }}
            >
              Three Pillars. One Clear Path Forward.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", fontWeight: 400, color: "#4B5563", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75 }}>
              Every service we offer is built around the insights that separate businesses that scale from those that stall.
            </p>
          </div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {SERVICES.map((service, i) => (
              <div
                key={service.num}
                className={`transition-all duration-700 ${cardsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  background: WHITE,
                  border: `1px solid rgba(13,14,133,0.1)`,
                  borderLeft: `5px solid ${YELLOW}`,
                  borderRadius: "8px",
                  boxShadow: "0 2px 20px rgba(13,14,133,0.07)",
                  overflow: "visible",
                }}
              >
                <div
                  style={{
                    padding: isMobile ? "2rem 1.5rem" : "2.5rem 3rem",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: isMobile ? "2rem" : "3rem",
                    alignItems: "start",
                  }}
                >
                  {/* ── Left column: title, description, quote ── */}
                  <div>
                    {/* Service number badge */}
                    <div style={{ marginBottom: "1rem" }}>
                      <span style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.68rem",
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

                    {/* Title */}
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      color: BLUE,
                      marginBottom: "0.5rem",
                      lineHeight: 1.2,
                    }}>
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: YELLOW,
                      marginBottom: "1.25rem",
                    }}>
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#374151",
                      lineHeight: 1.8,
                      marginBottom: "1.5rem",
                    }}>
                      {service.description}
                    </p>

                    {/* Insight quote */}
                    <blockquote style={{
                      borderLeft: `3px solid ${YELLOW}`,
                      paddingLeft: "1rem",
                      margin: 0,
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.95rem",
                      fontStyle: "italic",
                      color: BLUE,
                      lineHeight: 1.65,
                    }}>
                      "{service.highlight}"
                    </blockquote>
                  </div>

                  {/* ── Right column: what's included + CTA ── */}
                  <div>
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(13,14,133,0.4)",
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
                            marginTop: "8px",
                          }} />
                          <span style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "#1F2937",
                            lineHeight: 1.6,
                          }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <CtaButton />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — Process Steps ─────────────────────── */}
      <section style={{ background: BLUE, padding: isMobile ? "56px 0" : "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.07) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />
        <div
          ref={processRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem", position: "relative" }}
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
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 700, color: WHITE, lineHeight: 1.2 }}
            >
              Our Four-Step Advisory Process
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "1.5rem",
          }}>
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`transition-all duration-700 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(220,185,43,0.2)",
                  borderRadius: "6px",
                  padding: isMobile ? "1.5rem" : "2rem 2.5rem",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: YELLOW,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: BLUE,
                }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: WHITE, marginBottom: "0.5rem", lineHeight: 1.3 }}>
                    {step.title}
                  </h4>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────── */}
      <section style={{ background: DARK, padding: isMobile ? "56px 0" : "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.06) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }} />
        <div
          ref={ctaRef.ref}
          style={{ maxWidth: "720px", margin: "0 auto", padding: isMobile ? "0 1.25rem" : "0 2rem", position: "relative", textAlign: "center" }}
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
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 700, color: WHITE, lineHeight: 1.2, marginBottom: "1.5rem" }}
          >
            Your Business Deserves a Clear Path Forward.
          </h2>
          <p
            className={`transition-all duration-700 delay-100 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: "2.5rem" }}
          >
            Schedule a complimentary consultation and let us build your strategic roadmap — from financial infrastructure to growth positioning.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CtaButton label="Schedule a Consultation →" dark={true} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
