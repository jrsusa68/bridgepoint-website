/**
 * About Page — Bridgepoint Business Collective
 * Design: Executive Gravitas — Corporate Modernism
 * Colors: #0D0E85 (navy), #DCB92B (gold), #F4F6F9 (light), #0B081B (dark)
 * Fonts: Playfair Display (headings), DM Sans (body), DM Mono (labels)
 *
 * Sections:
 * 1. Hero Bar
 * 2. The Firm — Overview + Core Values
 * 3. Meet the Founder — Richard L. Smith Jr.
 * 4. The Journey — Timeline milestones
 * 5. Core Beliefs
 * 6. What We Stand For — Three Pillars
 * 7. CTA
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/useMobile";

// ── Brand tokens ──────────────────────────────────────────────────────────────
const BLUE       = "#0D0E85";
const YELLOW     = "#DCB92B";
const LIGHT      = "#F4F6F9";
const DARK       = "#0B081B";
const OFFWHITE   = "#E8EDF5";
const OFFWHITE_70 = "rgba(232,237,245,0.70)";

// ── Intersection observer hook ────────────────────────────────────────────────
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

// ── Data ──────────────────────────────────────────────────────────────────────
const CORE_VALUES = [
  { title: "Clarity", desc: "We explain complex topics in plain language so every client understands exactly where they stand and where they are going." },
  { title: "Integrity", desc: "We recommend only what genuinely serves your interests. Our reputation is built on honest counsel, not easy answers." },
  { title: "Practicality", desc: "We focus on actions that create real, measurable results — not theory, not hype, not borrowed credibility." },
  { title: "Partnership", desc: "We are invested in your success, not just our fees. When you scale, we have done our job." },
];

const BELIEFS = [
  "Systems exist to protect people, not impress them",
  "Strategic growth without discipline is dangerous",
  "Compliance is leverage, not bureaucracy",
  "Labor deserves respect backed by structure",
  "Ownership is responsibility before it is freedom",
];

const PILLARS = [
  {
    num: "01",
    title: "Business Foundation",
    desc: "Starting, structuring, and building core business systems. We help new entrepreneurs launch with a solid financial infrastructure and operational foundation from day one.",
    items: ["Entity structure & legitimacy", "Banking infrastructure setup", "Operational systems design", "Business narrative development"],
  },
  {
    num: "02",
    title: "Financial Readiness",
    desc: "Building strong banking relationships, optimizing business credit profiles, and establishing the financial foundation needed for long-term stability and strategic growth.",
    items: ["Business credit profile building", "Trade line strategy & history", "Financial documentation review", "Growth positioning roadmap"],
  },
  {
    num: "03",
    title: "Operational Excellence",
    desc: "Streamlining workflows, reducing operational friction, and implementing AI-powered systems that support sustainable growth and competitive advantage.",
    items: ["Workflow automation", "AI-assisted communication systems", "Lead management & scheduling", "Performance reporting dashboards"],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function About() {
  const isMobile   = useIsMobile();
  const firmRef    = useInView();
  const founderRef = useInView();
  const beliefsRef = useInView();
  const pillarsRef = useInView();
  const ctaRef     = useInView();

  // Scroll to hash anchor after page renders (e.g. /about#founder from Navbar)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    // Retry up to 10 times over 1s to wait for DOM + images to settle
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    setTimeout(tryScroll, 150);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: DARK }}>
      <Navbar />

      {/* ── 1. Hero Bar ─────────────────────────────────────────────────── */}
      <section style={{ background: BLUE, padding: isMobile ? "100px 0 40px" : "80px 0 56px", position: "relative", overflow: "hidden" }}>
        {/* Dot grid texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.12) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
            <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
              Our Story
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 700, color: OFFWHITE, lineHeight: 1.1, marginBottom: "1.25rem", maxWidth: "700px" }}>
            About Bridgepoint<br />
            <em style={{ color: YELLOW, fontStyle: "italic" }}>Business Collective</em>
          </h1>
          <p style={{ color: OFFWHITE_70, fontSize: "1.1rem", lineHeight: 1.75, fontWeight: 400, maxWidth: "560px" }}>
            A premium advisory firm supporting new and established small and midsize businesses — founded on the belief that every business owner deserves a clear path forward and a partner committed to delivering one.
          </p>
        </div>
      </section>

      {/* ── 2. The Firm ─────────────────────────────────────────────────── */}
      <section style={{ background: LIGHT, padding: isMobile ? "56px 0" : "96px 0" }}>
        <div
          ref={firmRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
        >
          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
            <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
              Who We Are
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "2rem" : "4rem", alignItems: "start" }}>
            {/* Left — overview */}
            <div className={`transition-all duration-700 ${firmRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 700, color: BLUE, lineHeight: 1.2, marginBottom: "1.5rem" }}>
                The Advisory Partner That Combines Strategy With
                <em style={{ color: YELLOW, fontStyle: "italic" }}> Real Connections.</em>
              </h2>
              <p style={{ color: "#4A5568", fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 400, marginBottom: "1.25rem" }}>
                Most advisory firms hand you a framework and walk away. Bridgepoint stays. We work alongside small and midsize business owners — not above them — to build the operational systems, financial infrastructure, and strategic positioning that serious growth demands. Our clients do not just receive advice; they receive a structured path and a partner committed to seeing it through.
              </p>
              <p style={{ color: "#4A5568", fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 400, marginBottom: "2rem" }}>
                We built Bridgepoint because too many capable entrepreneurs were being underserved — given generic guidance that ignored the real mechanics of scaling a business. Our practice is grounded in the disciplines that actually move the needle: disciplined financial infrastructure, operational efficiency, and the kind of preparation that opens doors with strategic partners and growth networks.
              </p>
              {/* Founding quote */}
              <blockquote style={{
                borderLeft: `3px solid ${YELLOW}`,
                paddingLeft: "1.5rem",
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: BLUE,
                lineHeight: 1.7,
              }}>
                "We exist to remove complexity from business growth and give owners a clear roadmap to success. When the time is right for strategic growth, our clients are positioned, prepared, and confident."
              </blockquote>
            </div>

            {/* Right — core values */}
            <div className={`transition-all duration-700 delay-200 ${firmRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: BLUE, marginBottom: "1.75rem" }}>
                Our Core Values
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.5rem" }}>
                {CORE_VALUES.map((v) => (
                  <div key={v.title} className="bp-card" style={{
                    background: "#fff",
                    border: `1px solid rgba(13,14,133,0.1)`,
                    borderTop: `3px solid ${YELLOW}`,
                    borderRadius: "6px",
                  }}>
                    {/* ── Default body ── */}
                    <div className="bp-card-body" style={{ padding: "1.5rem" }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: BLUE, marginBottom: "0.6rem" }}>
                        {v.title}
                      </div>
                      <p style={{ fontSize: "1rem", color: "#4A5568", lineHeight: 1.7, fontWeight: 600, margin: 0 }}>
                        {v.desc}
                      </p>
                    </div>
                    {/* ── Navy slide-up overlay ── */}
                    <div className="bp-card-overlay" style={{ borderRadius: "6px", padding: "1.5rem" }}>
                      <div className="bp-card-overlay-label">Core Value</div>
                      <div className="bp-card-overlay-rule" />
                      <div className="bp-card-overlay-title">{v.title}</div>
                      <div className="bp-card-overlay-body" style={{ marginBottom: 0 }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Meet the Founder ─────────────────────────────────────────── */}
      <section id="founder" style={{ background: BLUE, padding: isMobile ? "56px 0" : "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.08) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }} />
        <div
          ref={founderRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
            <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
              Meet the Founder
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", gap: isMobile ? "2rem" : "4rem", alignItems: "start" }}>
            {/* Left — founder card */}
            <div className={`transition-all duration-700 ${founderRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {/* Avatar placeholder */}
              <div style={{
                width: "100%",
                aspectRatio: "3/4",
                background: `linear-gradient(135deg, rgba(220,185,43,0.15) 0%, rgba(13,14,133,0.6) 100%)`,
                border: `1px solid rgba(220,185,43,0.3)`,
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "1.5rem",
                marginBottom: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Initials monogram */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -60%)",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "5rem", fontWeight: 700,
                  color: `rgba(220,185,43,0.25)`,
                  lineHeight: 1, userSelect: "none",
                }}>
                  RLS
                </div>
                <div style={{ position: "relative", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: OFFWHITE }}>
                    Richard L. Smith Jr.
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: YELLOW, marginTop: "4px" }}>
                    CEO / Managing Member
                  </div>
                </div>
              </div>

              {/* Archetype tag */}
              <div style={{
                background: "rgba(220,185,43,0.1)",
                border: `1px solid rgba(220,185,43,0.3)`,
                borderRadius: "4px",
                padding: "0.75rem 1rem",
                marginBottom: "1rem",
              }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: YELLOW, marginBottom: "4px" }}>
                  Archetype
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: OFFWHITE }}>
                  The Global Systems Builder
                </div>
                <div style={{ fontSize: "0.78rem", color: OFFWHITE_70, marginTop: "4px", fontStyle: "italic" }}>
                  Operator · Trade Negotiator · Risk & Compliance Veteran · Educator
                </div>
              </div>


            </div>

            {/* Right — story */}
            <div className={`transition-all duration-700 delay-200 ${founderRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 700, color: OFFWHITE, lineHeight: 1.2, marginBottom: "2rem" }}>
                From Mississippi to Global Trade —<br />
                <em style={{ color: YELLOW, fontStyle: "italic" }}>A Career Built on Every Layer.</em>
              </h2>

              <p style={{ color: OFFWHITE_70, fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 400, marginBottom: "1.5rem" }}>
                Richard L. Smith Jr. was born in Jackson, Mississippi in 1968 into a family where work came early and ownership was expected. By age 14, he was already a wage earner. His mother built <em>Dee's Hair Design</em> into a 40-year community institution. His father, a master builder, left permanent structures across Mississippi, Chicago, and St. Louis. Entrepreneurship, faith, land ownership, and civic responsibility were not ideas in his household — they were obligations.
              </p>

              <p style={{ color: OFFWHITE_70, fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 400, marginBottom: "1.5rem" }}>
                At Morehouse College, where he earned a BBA in Accounting, Richard worked continuously — corporate sales with AT&T and MCI Communications, fine-dining restaurants across Atlanta, and banquet services with Marriott International and Hilton. He learned how money moves across every class layer, from kitchen to boardroom.
              </p>

              <p style={{ color: OFFWHITE_70, fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 400, marginBottom: "1.5rem" }}>
                After graduation, Richard traveled to Nigeria to establish import/export operations — and witnessed history: the swearing-in of President Olusegun Obasanjo in Abuja. He later traveled to Dubai to validate international trade partners. He then joined Freddie Mac in Washington, DC, spending over a decade inside the most regulated financial systems in the country — and experienced the 2008 financial crisis from the inside as Freddie Mac entered conservatorship.
              </p>

              <p style={{ color: OFFWHITE_70, fontSize: "1.05rem", lineHeight: 1.85, fontWeight: 400, marginBottom: "2rem" }}>
                He became a partner in <em>Savile</em>, a nationally distributed beverage brand, traveling to China to establish manufacturing and negotiate international trade agreements. He later earned a Class A CDL and hauled hazardous materials, crude oil, and chemicals across multiple states. Few professionals can speak credibly about global trade, federal financial compliance, and blue-collar operational risk. Richard can — because he has lived all three.
              </p>

              {/* LinkedIn bio callout */}
              <div style={{
                borderLeft: `3px solid ${YELLOW}`,
                paddingLeft: "1.5rem",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
                fontStyle: "italic",
                color: OFFWHITE,
                lineHeight: 1.7,
              }}>
                "Global systems builder | Morehouse-trained accountant | Former Freddie Mac leader | International trade & operations — I help businesses replace chaos with structure."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Core Beliefs ─────────────────────────────────────────────── */}
      <section style={{ background: BLUE, padding: isMobile ? "56px 0" : "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.07) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />
        <div
          ref={beliefsRef.ref}
          style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", position: "relative", textAlign: "center" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "1.25rem" }}>
            <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
              What We Believe
            </span>
            <div style={{ width: "40px", height: "1px", background: YELLOW }} />
          </div>
          <h2
            className={`transition-all duration-700 ${beliefsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 700, color: OFFWHITE, lineHeight: 1.2, marginBottom: "3rem" }}
          >
            The Five Principles That Guide Every Engagement
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {BELIEFS.map((b, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${beliefsRef.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(220,185,43,0.2)",
                  borderRadius: "6px",
                  padding: "1.25rem 1.75rem",
                  textAlign: "left",
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: "36px", height: "36px",
                  borderRadius: "50%",
                  background: YELLOW,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem", fontWeight: 700,
                  color: BLUE,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontStyle: "italic", color: OFFWHITE, lineHeight: 1.5, margin: 0 }}>
                  "{b}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What We Stand For — Three Pillars ────────────────────────── */}
      <section style={{ background: LIGHT, padding: isMobile ? "56px 0" : "96px 0" }}>
        <div
          ref={pillarsRef.ref}
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "1.25rem" }}>
              <div style={{ width: "40px", height: "1px", background: YELLOW }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: YELLOW }}>
                What We Stand For
              </span>
              <div style={{ width: "40px", height: "1px", background: YELLOW }} />
            </div>
            <h2
              className={`transition-all duration-700 ${pillarsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 700, color: BLUE, lineHeight: 1.2 }}
            >
              Three Pillars. One Clear Path Forward.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "2rem" }}>
            {PILLARS.map((p, i) => (
              <div
                key={p.num}
                className={`bp-card transition-all duration-700 ${pillarsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  background: "#fff",
                  border: `1px solid rgba(13,14,133,0.08)`,
                  borderRadius: "8px",
                }}
              >
                {/* ── Default body ── */}
                <div className="bp-card-body" style={{ padding: "2.5rem", position: "relative" }}>
                  {/* Number watermark */}
                  <div style={{
                    position: "absolute", top: "1rem", right: "1.5rem",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "4rem", fontWeight: 700,
                    color: `rgba(220,185,43,0.12)`,
                    lineHeight: 1, userSelect: "none",
                  }}>
                    {p.num}
                  </div>
                  <div style={{ width: "32px", height: "3px", background: YELLOW, marginBottom: "1.5rem", borderRadius: "2px" }} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: BLUE, marginBottom: "1rem", lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <p style={{ color: "#4A5568", fontSize: "1rem", lineHeight: 1.75, fontWeight: 600, marginBottom: "1.5rem" }}>
                    {p.desc}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {p.items.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.92rem", color: "#4A5568", marginBottom: "0.5rem", fontWeight: 600 }}>
                        <span style={{ color: YELLOW, fontSize: "0.7rem" }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Navy slide-up overlay ── */}
                <div className="bp-card-overlay" style={{ borderRadius: "8px" }}>
                  <div className="bp-card-overlay-label">Pillar {p.num}</div>
                  <div className="bp-card-overlay-rule" />
                  <div className="bp-card-overlay-title">{p.title}</div>
                  <div className="bp-card-overlay-body">{p.desc}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {p.items.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.92rem", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                        <span style={{ color: YELLOW, fontSize: "0.65rem", flexShrink: 0 }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────────────────────── */}
      <section style={{ background: DARK, padding: isMobile ? "56px 0" : "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(220,185,43,0.06) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }} />
        <div
          ref={ctaRef.ref}
          style={{ maxWidth: "720px", margin: "0 auto", padding: "0 2rem", position: "relative", textAlign: "center" }}
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
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 700, color: OFFWHITE, lineHeight: 1.2, marginBottom: "1.25rem" }}
          >
            Ready to Build Your<br />
            <em style={{ color: YELLOW, fontStyle: "italic" }}>Clear Path Forward?</em>
          </h2>
          <p
            className={`transition-all duration-700 delay-100 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: OFFWHITE_70, fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 400, marginBottom: "2.5rem" }}
          >
            Schedule your readiness assessment today. Our advisors will evaluate your current position and deliver a precise, actionable strategy to build, grow, and scale your business.
          </p>
          <div
            className={`transition-all duration-700 delay-200 ${ctaRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/#contact">
              <button style={{
                background: YELLOW,
                color: BLUE,
                border: "none",
                padding: "1rem 2.5rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#e8c84a"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.background = YELLOW; (e.target as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Get Started
              </button>
            </Link>
            <Link href="/">
              <button style={{
                background: "transparent",
                color: OFFWHITE,
                border: `1px solid rgba(232,237,245,0.3)`,
                padding: "1rem 2.5rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = YELLOW; (e.target as HTMLElement).style.color = YELLOW; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(232,237,245,0.3)"; (e.target as HTMLElement).style.color = OFFWHITE; }}
              >
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
