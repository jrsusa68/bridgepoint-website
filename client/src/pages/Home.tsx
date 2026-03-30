/* ============================================================
   HOME PAGE — Executive Gravitas Design
   Sections: Hero | Services | About | Process | CTA | Footer
   Palette: Dark Blue #0d0e85 | Yellow #dcb92b | Off-white #E8EDF5
   Fonts: Playfair Display (headings) | DM Sans (body) | DM Mono (labels)
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoMarquee from "@/components/LogoMarquee";
import { ChevronDown, ArrowRight, CheckCircle2, TrendingUp, Building2, Cpu, Shield, Users } from "lucide-react";

// ─── Asset URLs ───────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475686945/kbgGFKXYRv8s2rbqJocDmV/bp-hero-bg-jMHTMrKprWRP2nJo5DoQnM.webp";
const STRATEGY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475686945/kbgGFKXYRv8s2rbqJocDmV/bp-strategy-img-6U56u3u6JvvdLQBQEgNmrK.webp";
const ABSTRACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663475686945/kbgGFKXYRv8s2rbqJocDmV/bp-abstract-gold-3M5Bg5t4fPWT6Gf3bLLyU3.webp";

// ─── Brand tokens ─────────────────────────────────────────────
const BLUE = "#0d0e85";
const BLUE_DARK = "#090a6a";
const BLUE_MID = "rgba(13,14,133,0.92)";
const YELLOW = "#dcb92b";
const YELLOW_LIGHT = "#f0d060";
const YELLOW_RGBA_LOW = "rgba(220,185,43,0.12)";
const YELLOW_RGBA_BORDER = "rgba(220,185,43,0.25)";
const OFFWHITE = "#E8EDF5";
const OFFWHITE_70 = "rgba(232,237,245,0.7)";
const OFFWHITE_50 = "rgba(232,237,245,0.5)";
const OFFWHITE_35 = "rgba(232,237,245,0.35)";

// ─── Scroll-reveal hook ───────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Service Card Data ────────────────────────────────────────
const services = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Strategic Growth Consulting",
    tagline: "Growth Preparation & Readiness",
    description:
      "We prepare your business with the documentation, financial narratives, and investor-ready materials that strategic partners and growth networks require.",
    details: [
      { name: "Cash-Flow Based Growth Strategy", desc: "Secure business growth based on your cash flow, not your personal credit score. Strategic partners advance resources based on bank statements." },
      { name: "Asset-Based Growth Strategy", desc: "Leverage inventory, receivables, or equipment to structure growth solutions that offset personal credit challenges." },
      { name: "Unsecured Guarantor Strategy", desc: "Leverage a creditworthy partner to build your business credit profile without impacting their personal credit." },
    ],
  },
  {
    number: "02",
    icon: Building2,
    title: "Financial Infrastructure",
    tagline: "Systems, Reporting & Compliance",
    description:
      "Build robust bookkeeping systems, financial reporting processes, and compliance frameworks that support sustainable growth and strategic access.",
    details: [
      { name: "Entity Legitimacy & Foundation", desc: "Align your EIN, D-U-N-S number, Experian BIN, professional address, and public listings to meet strategic partner compliance standards." },
      { name: "Vendor & Trade Credit Establishment", desc: "Establish initial reporting tradelines through strategic vendor accounts and generate positive payment experiences." },
      { name: "Revolving & Fleet Credit Expansion", desc: "Scale your credit profile with revolving store credit and fleet cards to demonstrate creditworthiness to major strategic partners." },
      { name: "High-Limit Cash Credit Acquisition", desc: "Position your fully developed credit profile to acquire high-limit, universal cash credit cards in the business's name." },
    ],
  },
  {
    number: "03",
    icon: Cpu,
    title: "Operational Strategy & AI",
    tagline: "Efficiency, Systems & Scale",
    description:
      "Streamline workflows, implement AI-enhanced processes, and build scalable systems that increase efficiency and reduce operational overhead.",
    details: [
      { name: "Credit Protection & Monitoring", desc: "Avoid UCC-1 blanket liens, manage personal credit inquiries, and maintain aggressive error dispute and quarterly profile monitoring." },
      { name: "Strategic Growth Consulting", desc: "Actionable, step-by-step consulting with precise action plans tailored to your specific financial situation." },
    ],
  },
];

// ─── Process Steps ────────────────────────────────────────────
const steps = [
  { num: "01", title: "Readiness Assessment", desc: "We evaluate your business's current financial position, credit profile, and growth objectives to identify your optimal path forward." },
  { num: "02", title: "Strategy Development", desc: "Our advisors build a customized, step-by-step action plan aligned with your compensating factors and growth timeline." },
  { num: "03", title: "Execution & Build", desc: "We guide you through every phase — from entity legitimacy to tradeline establishment — with precision and accountability." },
  { num: "04", title: "Scale & Optimize", desc: "Once your foundation is set, we position your business for high-limit solutions and long-term strategic partnerships." },
];

// ─── Stats ────────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Businesses Advised" },
  { value: "90", label: "Day Credit Build Program" },
  { value: "3", label: "Core Advisory Pillars" },
  { value: "100%", label: "U.S.-Based Consulting" },
];

export default function Home() {
  const heroRef = useInView(0.1);
  const servicesRef = useInView(0.05);
  const aboutRef = useInView(0.1);
  const processRef = useInView(0.1);
  const ctaRef = useInView(0.1);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ backgroundColor: BLUE }}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="Executive boardroom"
            className="w-full h-full object-cover"
            style={{ opacity: 0.25 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, rgba(13,14,133,0.97) 0%, rgba(13,14,133,0.75) 50%, rgba(13,14,133,0.9) 100%)`,
            }}
          />
        </div>

        {/* Dot-grid texture */}
        <div className="absolute inset-0 dot-grid" style={{ opacity: 0.4 }} />

        {/* Yellow diagonal accent line */}
        <div
          className="absolute hidden lg:block"
          style={{
            top: "15%",
            right: "8%",
            width: "1px",
            height: "60%",
            background: `linear-gradient(180deg, transparent, ${YELLOW} 30%, ${YELLOW} 70%, transparent)`,
            opacity: 0.45,
          }}
        />

        <div className="container relative z-10 pt-28 md:pt-32 pb-16 md:pb-24 flex-1 flex items-center">
          <div ref={heroRef.ref} className="max-w-3xl">
            {/* Eyebrow label */}
            <div
              className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              <div className="gold-rule w-10" />
              <span
                style={{
                  color: YELLOW,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                }}
              >
                Premium Business Advisory
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`mb-6 transition-all duration-700 delay-100 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 7vw, 5.5rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: OFFWHITE,
              }}
            >
              Every Business Owner
              <br />
              <em style={{ color: YELLOW, fontStyle: "italic" }}>Deserves a Clear</em>
              <br />
              Path Forward.
            </h1>

            {/* Sub-headline */}
            <p
              className={`mb-10 max-w-xl transition-all duration-700 delay-200 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                color: OFFWHITE_70,
                fontSize: "1.1rem",
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              Bridgepoint Business Collective is a premium advisory firm supporting new and established small and midsize businesses across the United States. We help entrepreneurs build, grow, and scale through strategic consulting focused on operational efficiency, financial infrastructure, and strategic growth.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row flex-wrap gap-4 transition-all duration-700 delay-300 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="group flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-200"
                style={{
                  background: YELLOW,
                  color: BLUE,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = YELLOW_LIGHT; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = YELLOW; }}
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-200"
                style={{
                  border: "1px solid rgba(232,237,245,0.3)",
                  color: OFFWHITE,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.1em",
                  background: "transparent",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = YELLOW; (e.currentTarget as HTMLButtonElement).style.color = YELLOW; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(232,237,245,0.3)"; (e.currentTarget as HTMLButtonElement).style.color = OFFWHITE; }}
              >
                Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="relative z-10 mt-auto"
          style={{ borderTop: `1px solid ${YELLOW_RGBA_BORDER}`, background: "rgba(13,14,133,0.88)", backdropFilter: "blur(8px)" }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                width: "100%",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="py-4 px-4 md:py-5 md:px-6 text-center"
                  style={{
                    borderRight: i < stats.length - 1 ? `1px solid ${YELLOW_RGBA_BORDER}` : "none",
                  }}
                >
                  <div
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.1rem, 3.5vw, 1.75rem)", fontWeight: 700, color: YELLOW }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.65rem", color: OFFWHITE_50, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", marginTop: "2px", lineHeight: 1.4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollToSection("services")}
          className="absolute bottom-6 right-8 hidden lg:flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
          style={{ color: OFFWHITE }}
        >
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", writingMode: "vertical-rl" }}>Scroll</span>
          <ChevronDown size={14} />
        </button>
      </section>

      {/* ══════════════════════════════════════════
          LOGO MARQUEE — Tools & Platforms
      ══════════════════════════════════════════ */}
      <LogoMarquee />

      {/* ══════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════ */}
      <section id="services" className="py-16 md:py-28" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="container">
          {/* Section header */}
          <div ref={servicesRef.ref} className="mb-16">
            <div className={`flex items-center gap-3 mb-5 transition-all duration-600 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <div className="gold-rule w-10" />
              <span style={{ color: YELLOW, fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                What We Do
              </span>
            </div>
            <h2
              className={`transition-all duration-600 delay-100 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, color: BLUE, lineHeight: 1.2, maxWidth: "640px" }}
            >
              Business Systems &<br />
              <em style={{ color: YELLOW, fontStyle: "italic" }}>Growth Strategy</em>
            </h2>
            <p
              className={`mt-4 max-w-xl transition-all duration-600 delay-200 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ color: "#4A5568", fontSize: "1.05rem", lineHeight: 1.75, fontWeight: 400 }}
            >
              Our core advisory services are structured around three foundational pillars, designed to prepare your business for sustainable expansion and strategic partnerships.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.number}
                  className={`bp-card transition-all duration-700 ${servicesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{
                    transitionDelay: `${i * 120}ms`,
                    background: "#fff",
                    borderTop: `3px solid ${YELLOW}`,
                    boxShadow: "0 4px 24px rgba(13,14,133,0.08)",
                  }}
                >
                  {/* ── Default card body ── */}
                  <div className="bp-card-body flex flex-col" style={{ padding: "2.5rem" }}>
                    {/* Large background number */}
                    <div
                      className="absolute top-4 right-6 select-none pointer-events-none"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", fontWeight: 700, color: "rgba(220,185,43,0.1)", lineHeight: 1 }}
                    >
                      {svc.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 flex items-center justify-center mb-5"
                      style={{ background: YELLOW_RGBA_LOW, border: `1px solid ${YELLOW_RGBA_BORDER}` }}
                    >
                      <Icon size={22} style={{ color: YELLOW }} />
                    </div>

                    {/* Label */}
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: YELLOW, marginBottom: "0.5rem" }}>
                      {svc.tagline}
                    </div>

                    {/* Title */}
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: BLUE, marginBottom: "1rem", lineHeight: 1.3 }}>
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p style={{ color: "#4A5568", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem", fontWeight: 600 }}>
                      {svc.description}
                    </p>

                    {/* Yellow rule */}
                    <div className="gold-rule mb-5" style={{ opacity: 0.4 }} />

                    {/* Detail items */}
                    <ul className="flex flex-col gap-3 flex-1">
                      {svc.details.map((d) => (
                        <li key={d.name} className="flex gap-3">
                          <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: YELLOW }} />
                          <div>
                            <div style={{ fontSize: "0.88rem", fontWeight: 700, color: BLUE, marginBottom: "2px" }}>{d.name}</div>
                            <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#4A5568", lineHeight: 1.6 }}>{d.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ── Navy slide-up overlay ── */}
                  <div className="bp-card-overlay">
                    <div className="bp-card-overlay-label">{svc.tagline}</div>
                    <div className="bp-card-overlay-rule" />
                    <div className="bp-card-overlay-title">{svc.title}</div>
                    <div className="bp-card-overlay-body">{svc.description}</div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {svc.details.map((d) => (
                        <li key={d.name} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                          <span style={{ color: YELLOW, fontSize: "0.65rem", marginTop: "0.35rem", flexShrink: 0 }}>◆</span>
                          <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>{d.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT / MISSION SECTION
      ══════════════════════════════════════════ */}
      <section id="about" className="py-16 md:py-28 relative overflow-hidden" style={{ backgroundColor: BLUE }}>
        <div className="absolute inset-0 dot-grid" style={{ opacity: 0.3 }} />
        <div className="container relative z-10">
          <div ref={aboutRef.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div
              className={`relative transition-all duration-700 ${aboutRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div
                className="relative overflow-hidden"
                style={{ border: `1px solid ${YELLOW_RGBA_BORDER}` }}
              >
                <img
                  src={STRATEGY_IMG}
                  alt="Strategic advisory session"
                  className="w-full h-80 lg:h-96 object-cover"
                  style={{ opacity: 0.9 }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, rgba(13,14,133,0.6) 0%, transparent 60%)` }}
                />
              </div>
              {/* Yellow accent corner */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24"
                style={{ border: `2px solid ${YELLOW_RGBA_BORDER}`, zIndex: -1 }}
              />
              {/* Floating stat badge */}
              <div
                className="absolute bottom-6 left-6 px-5 py-3"
                style={{ background: YELLOW }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: BLUE }}>90-Day</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BLUE, opacity: 0.75 }}>Credit Build Program</div>
              </div>
            </div>

            {/* Text side */}
            <div className={`transition-all duration-700 delay-150 ${aboutRef.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-rule w-10" />
                <span style={{ color: YELLOW, fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                  Our Mission
                </span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 700, color: OFFWHITE, lineHeight: 1.2, marginBottom: "1.5rem" }}>
                The Advisory Partner That Combines Strategy With
                <em style={{ color: YELLOW, fontStyle: "italic" }}> Real Connections.</em>
              </h2>
              <p style={{ color: OFFWHITE_70, fontSize: "1rem", lineHeight: 1.85, marginBottom: "1.25rem", fontWeight: 400 }}>
                Bridgepoint Business Collective was founded on the belief that every business owner deserves a clear path forward. We've built our consulting practice around insights that separate businesses that scale from those that stall.
              </p>
              <p style={{ color: OFFWHITE_70, fontSize: "1rem", lineHeight: 1.85, marginBottom: "2rem", fontWeight: 400 }}>
                Our core philosophy: revenue and business legitimacy should drive growth preparation. We focus on alternative paths based on your business's revenue and unique compensating factors — not just personal credit scores.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, label: "Growth Readiness" },
                  { icon: Shield, label: "Credit Protection" },
                  { icon: Users, label: "Strategic Network" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 py-3 px-4" style={{ border: `1px solid ${YELLOW_RGBA_BORDER}`, background: "rgba(220,185,43,0.05)" }}>
                    <Icon size={16} style={{ color: YELLOW, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.78rem", color: OFFWHITE, fontWeight: 500, letterSpacing: "0.04em" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS SECTION
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-28" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div ref={processRef.ref} className="text-center mb-16">
            <div className={`flex items-center justify-center gap-3 mb-5 transition-all duration-600 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <div className="gold-rule w-10" />
              <span style={{ color: YELLOW, fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                How It Works
              </span>
              <div className="gold-rule w-10" />
            </div>
            <h2
              className={`transition-all duration-600 delay-100 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 700, color: BLUE, lineHeight: 1.2 }}
            >
              Getting Started Is Simple
            </h2>
            <p
              className={`mt-4 mx-auto max-w-xl transition-all duration-600 delay-200 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ color: "#4A5568", fontSize: "1.05rem", lineHeight: 1.75, fontWeight: 400 }}
            >
              Ready to build, grow, and scale? Schedule your readiness assessment today to discover your optimal growth preparation path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`bp-card transition-all duration-700 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 100}ms`, background: "#F4F6F9", borderLeft: `3px solid ${YELLOW}` }}
              >
                {/* ── Default body ── */}
                <div className="bp-card-body" style={{ padding: "2rem" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 700, color: "rgba(220,185,43,0.2)", lineHeight: 1, marginBottom: "1rem" }}>
                    {step.num}
                  </div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, marginBottom: "0.75rem" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "1rem", color: "#4A5568", lineHeight: 1.7, fontWeight: 600 }}>
                    {step.desc}
                  </p>
                </div>

                {/* ── Navy slide-up overlay ── */}
                <div className="bp-card-overlay" style={{ justifyContent: "flex-start", paddingTop: "2rem" }}>
                  <div className="bp-card-overlay-label">Step {step.num}</div>
                  <div className="bp-card-overlay-rule" />
                  <div className="bp-card-overlay-title">{step.title}</div>
                  <div className="bp-card-overlay-body">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════ */}
      <FAQSection />

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <section
        id="contact"
        className="relative py-16 md:py-28 overflow-hidden"
        style={{ backgroundColor: BLUE }}
      >
        <div className="absolute inset-0">
          <img src={ABSTRACT_BG} alt="" className="w-full h-full object-cover" style={{ opacity: 0.1 }} />
          <div className="absolute inset-0" style={{ background: "rgba(13,14,133,0.88)" }} />
        </div>
        <div className="absolute inset-0 dot-grid" style={{ opacity: 0.2 }} />

        <div className="container relative z-10">
          <div ref={ctaRef.ref} className="max-w-3xl mx-auto text-center">
            <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-600 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <div className="gold-rule w-10" />
              <span style={{ color: YELLOW, fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                Begin Your Journey
              </span>
              <div className="gold-rule w-10" />
            </div>
            <h2
              className={`mb-6 transition-all duration-600 delay-100 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)", fontWeight: 700, color: OFFWHITE, lineHeight: 1.2 }}
            >
              Your Business Deserves a
              <em style={{ color: YELLOW, fontStyle: "italic" }}> Clear Path Forward.</em>
            </h2>
            <p
              className={`mb-10 transition-all duration-600 delay-200 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ color: OFFWHITE_70, fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 400 }}
            >
              Schedule your readiness assessment today. Our advisors will evaluate your current position and deliver a precise, actionable strategy to build, grow, and scale your business.
            </p>

            {/* LeadConnector Embedded Form */}
            <div
              className={`transition-all duration-700 delay-300 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ borderRadius: "4px", overflow: "hidden" }}
            >
              <LeadConnectorForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <Footer />
      {false && <footer style={{ backgroundColor: "#08094f", borderTop: `1px solid ${YELLOW_RGBA_BORDER}` }}>
        <div className="container py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <polygon points="20,2 38,20 20,38 2,20" stroke="#dcb92b" strokeWidth="1.5" fill="none" />
                    <polygon points="20,8 32,20 20,32 8,20" stroke="#dcb92b" strokeWidth="1" fill="rgba(220,185,43,0.1)" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span style={{ color: OFFWHITE, fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Bridgepoint</span>
                  <span style={{ color: YELLOW, fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Business Collective</span>
                </div>
              </div>
              <p style={{ color: OFFWHITE_35, fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "260px", fontWeight: 400 }}>
                A premium business advisory firm supporting new and established small and midsize businesses across the United States.
              </p>
            </div>

            {/* Services links */}
            <div>
              <h5 style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: YELLOW, marginBottom: "1.25rem" }}>
                Services
              </h5>
              <ul className="flex flex-col gap-3">
                {["Strategic Growth Consulting", "Financial Infrastructure", "Operational Strategy & AI"].map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                      style={{ color: OFFWHITE_50, fontSize: "0.82rem", fontWeight: 300, background: "none", border: "none", padding: 0, textAlign: "left", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = YELLOW; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = OFFWHITE_50; }}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: YELLOW, marginBottom: "1.25rem" }}>
                Legal Disclosures
              </h5>
              <ul className="flex flex-col gap-2">
                {[
                  "Consulting Services Only",
                  "Text STOP to cancel",
                  "Text HELP for assistance",
                  "Message and data rates may apply",
                  "Message frequency varies",
                  "Carriers are not liable for delayed or undelivered messages",
                  "No mobile information will be shared with third parties for marketing",
                ].map((d) => (
                  <li key={d} style={{ color: OFFWHITE_35, fontSize: "0.72rem", lineHeight: 1.6, fontFamily: "'DM Mono', monospace" }}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="gold-rule mb-6" style={{ opacity: 0.2 }} />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ color: OFFWHITE_35, fontSize: "0.72rem", fontFamily: "'DM Mono', monospace" }}>
              © {new Date().getFullYear()} Bridgepoint Business Collective. All rights reserved.
            </p>
            <p style={{ color: OFFWHITE_35, fontSize: "0.72rem", fontFamily: "'DM Mono', monospace" }}>
              United States · Premium Business Advisory
            </p>
          </div>
        </div>
      </footer>}
    </div>
  );
}

// ─── FAQ SECTION ─────────────────────────────────────────────
// To add/edit questions: update the FAQ_DATA array below.
const FAQ_DATA = [
  {
    q: "What is Bridgepoint Business Collective?",
    a: "Bridgepoint Business Collective is a premium business advisory firm supporting new and established small and midsize businesses across the United States. We help entrepreneurs build, grow, and scale through strategic consulting focused on three core areas: operational efficiency, financial infrastructure, and strategic growth readiness. We were founded on the belief that every business owner deserves a clear path forward — and we exist to be the advisory partner that delivers one.",
  },
  {
    q: "Who does Bridgepoint serve?",
    a: "We serve small and midsize business owners at every stage of growth — from entrepreneurs laying the foundation of their financial infrastructure to established companies positioning themselves for significant growth. Our clients share one thing in common: they are serious about scaling and recognize that having the right advisory partner makes all the difference.\n\nBridgepoint Insight: If you are building a business that is meant to last, Bridgepoint was built for you.",
  },
  {
    q: "What makes Bridgepoint different from other business consultants?",
    a: "Most consultants offer strategy without the infrastructure to execute it. Bridgepoint combines practical business strategy with real connections to growth resources. We do not just tell you what to do — we show you how, and we stay with you through the process. Our approach is grounded in the insights that separate businesses that scale from those that stall.",
  },
  {
    q: "How does business credit fit into Bridgepoint's advisory model?",
    a: "Business credit is the foundation of financial infrastructure — one of our three core pillars. Without it, your business lacks the strategic readiness needed to grow on its own terms. Every major company in the world, from Walmart to Apple, has established business credit. At Bridgepoint, we help our clients build that same engine.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{ backgroundColor: "#F4F6F9", borderTop: `1px solid rgba(13,14,133,0.08)` }}
      className="py-14 md:py-24"
    >
      <div className="container max-w-3xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="gold-rule w-10" />
            <span
              style={{
                color: YELLOW,
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Common Questions
            </span>
            <div className="gold-rule w-10" />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: BLUE,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              color: "#3a3f5c",
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "540px",
              margin: "0 auto",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Everything you need to know about Bridgepoint and how we work with our clients.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            const isLast = i === FAQ_DATA.length - 1;
            return (
              <div
                key={i}
                style={{
                  borderTop: `1px solid rgba(13,14,133,0.1)`,
                  borderBottom: isLast ? `1px solid rgba(13,14,133,0.1)` : "none",
                  backgroundColor: isOpen ? "rgba(13,14,133,0.03)" : "transparent",
                  transition: "background 0.25s",
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1.4rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                      fontWeight: 600,
                      color: isOpen ? BLUE : "#1a1f4e",
                      lineHeight: 1.4,
                      transition: "color 0.2s",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: `1.5px solid ${isOpen ? YELLOW : "rgba(13,14,133,0.2)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: isOpen ? YELLOW : "transparent",
                      transition: "all 0.25s",
                    }}
                  >
                    <ChevronDown
                      size={15}
                      style={{
                        color: isOpen ? "#fff" : BLUE,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </span>
                </button>

                {/* Answer panel */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "600px" : "0",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <div style={{ paddingBottom: "1.5rem" }}>
                    {item.a.split("\n\n").map((para, pi) => (
                      <p
                        key={pi}
                        style={{
                          color: para.startsWith("Bridgepoint Insight") ? BLUE : "#3a3f5c",
                          fontSize: "0.95rem",
                          lineHeight: 1.85,
                          fontFamily: "'DM Sans', sans-serif",
                          marginBottom: pi < item.a.split("\n\n").length - 1 ? "0.85rem" : 0,
                          fontStyle: para.startsWith("Bridgepoint Insight") ? "italic" : "normal",
                          borderLeft: para.startsWith("Bridgepoint Insight") ? `3px solid ${YELLOW}` : "none",
                          paddingLeft: para.startsWith("Bridgepoint Insight") ? "1rem" : "0",
                        } as React.CSSProperties}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ─── LEADCONNECTOR FORM EMBED ─────────────────────────────────
// To swap the form: update the FORM_ID constant below.
const FORM_ID = "YjlBYJidOtax9UtU8FDq";
const FORM_HEIGHT = 854;

function LeadConnectorForm() {
  useEffect(() => {
    // Load the LeadConnector form embed script once
    const scriptId = "lc-form-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
      style={{ width: "100%", height: `${FORM_HEIGHT}px`, border: "none", borderRadius: "3px", display: "block" }}
      id={`inline-${FORM_ID}`}
      data-layout={`{"id":"INLINE"}`}
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Form Consent"
      data-height={String(FORM_HEIGHT)}
      data-layout-iframe-id={`inline-${FORM_ID}`}
      data-form-id={FORM_ID}
      title="Form Consent"
    />
  );
}
