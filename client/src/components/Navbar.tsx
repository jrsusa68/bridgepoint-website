/* ============================================================
   NAVBAR COMPONENT — Bridgepoint Business Collective
   Design: Executive Gravitas | Light #F4F6F9 bg | Yellow #dcb92b accent

   ── HOW TO UPDATE ──────────────────────────────────────────
   All editable content lives in the NAV_DATA object below.
   To add, remove, or rename nav links — edit NAV_DATA.links.
   To add dropdown items — add a `dropdown` array to any link.
   To swap the logo — update NAV_DATA.logo.src.
   ============================================================ */

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// ─── BRAND TOKENS ────────────────────────────────────────────
const BLUE          = "#0d0e85";
const NAV_BG        = "#F4F6F9";
const NAV_BG_SCROLL = "rgba(244,246,249,0.98)";
const YELLOW        = "#dcb92b";
const YELLOW_BG     = "rgba(220,185,43,0.12)";
const LINK_COLOR    = "rgba(13,14,133,0.75)";
const BORDER_COLOR  = "rgba(13,14,133,0.12)";
const MOBILE_DIV    = "rgba(13,14,133,0.08)";
const MOBILE_BREAKPOINT = 991;

// ─── DATA SECTION — EDIT HERE TO UPDATE NAVBAR CONTENT ───────
const NAV_DATA = {
  logo: {
    src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/6996d94a4bc44b5aa2d061d9_Bridgepoint%20560%20x%20120%20px.png",
    alt: "Bridgepoint Business Collective",
    heightDesktop: 44,
    heightMobile: 36,
  },

  links: [
    { label: "Home",       href: "/" },
    { label: "Services",   href: "/services" },
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "About Bridgepoint", href: "/about" },
        { label: "Meet the Founder",  href: "/about#founder" },
      ],
    },
    { label: "Contact Us", href: "/#contact" },
  ],

  ctaButtons: [
    { label: "Get Started", href: "/#contact", variant: "primary" as const },
  ],
};
// ─── END DATA SECTION ─────────────────────────────────────────

// Navigate to a href, handling hash scrolling
function navigateTo(href: string) {
  const hashIdx = href.indexOf("#");
  const path    = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
  const hash    = hashIdx >= 0 ? href.slice(hashIdx + 1) : "";
  const currentPath = window.location.pathname;

  // ── Any link that contains a hash (e.g. /#contact, /about#founder)
  //    is ALWAYS handled via a full browser navigation so the target
  //    page receives the hash in window.location on mount and can
  //    scroll reliably — no flaky same-page element lookups.
  if (hash) {
    window.location.href = href;
    return;
  }

  // ── Cross-page navigation without hash ──
  if (path && path !== currentPath) {
    window.location.href = href;
    return;
  }

  // ── Same page, no hash — scroll to top ──
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile]         = useState(window.innerWidth <= MOBILE_BREAKPOINT);
  const dropdownRef                     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setOpenDropdown(null);
    navigateTo(href);
  };

  const linkStyle = (): React.CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: LINK_COLOR,
    background: "transparent",
    textDecoration: "none",
    fontFamily: "'Outfit', 'DM Sans', sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "8px 14px",
    borderRadius: "4px",
    transition: "color 0.2s, background-color 0.2s",
    whiteSpace: "nowrap",
    cursor: "pointer",
    border: "none",
  });

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? NAV_BG_SCROLL : NAV_BG,
        borderBottom: `1px solid ${scrolled ? "rgba(220,185,43,0.35)" : BORDER_COLOR}`,
        borderTop: `3px solid ${YELLOW}`,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.12)" : "none",
        transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <nav
        role="navigation"
        aria-label="Main Navigation"
        style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}
      >
        {/* ── Top Row: Logo + Desktop Nav OR Logo + Hamburger ── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: isMobile ? "64px" : "72px",
          gap: "24px",
        }}>

          {/* ── Logo ─────────────────────────────────── */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            aria-label="Bridgepoint Business Collective — Home"
            style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
          >
            <img
              src={NAV_DATA.logo.src}
              alt={NAV_DATA.logo.alt}
              loading="eager"
              style={{
                height: `${isMobile ? NAV_DATA.logo.heightMobile : NAV_DATA.logo.heightDesktop}px`,
                width: "auto",
                maxWidth: isMobile ? "180px" : "220px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </a>

          {/* ── Desktop Nav Links (hidden on mobile) ─── */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }} ref={dropdownRef}>
              <ul style={{ display: "flex", alignItems: "center", gap: "4px", listStyle: "none", margin: 0, padding: 0 }}>
                {NAV_DATA.links.map((link) => {
                  const hasDropdown = link.dropdown && link.dropdown.length > 0;
                  const isOpen = openDropdown === link.label;

                  return (
                    <li key={link.label} style={{ position: "relative", display: "flex", alignItems: "center" }}>
                      {hasDropdown ? (
                        <button
                          onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                          style={{
                            ...linkStyle(),
                            color: isOpen ? YELLOW : LINK_COLOR,
                            background: isOpen ? YELLOW_BG : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isOpen) {
                              (e.currentTarget as HTMLButtonElement).style.color = YELLOW;
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor = YELLOW_BG;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isOpen) {
                              (e.currentTarget as HTMLButtonElement).style.color = LINK_COLOR;
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                            }
                          }}
                        >
                          {link.label}
                          <ChevronDown
                            size={13}
                            style={{ transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          style={linkStyle()}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = YELLOW;
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = YELLOW_BG;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = LINK_COLOR;
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                          }}
                        >
                          {link.label}
                        </a>
                      )}

                      {/* ── Dropdown Panel ─────────────────── */}
                      {hasDropdown && isOpen && (
                        <div style={{
                          position: "absolute",
                          top: "calc(100% + 8px)",
                          left: "50%",
                          transform: "translateX(-50%)",
                          minWidth: "220px",
                          background: "#fff",
                          border: `1px solid ${BORDER_COLOR}`,
                          borderTop: `3px solid ${YELLOW}`,
                          borderRadius: "6px",
                          boxShadow: "0 8px 32px rgba(13,14,133,0.12)",
                          overflow: "hidden",
                          zIndex: 200,
                          animation: "fadeSlideDown 0.15s ease",
                        }}>
                          {link.dropdown!.map((item, idx) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={(e) => handleLinkClick(e, item.href)}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "12px 18px",
                                textDecoration: "none",
                                fontFamily: "'Outfit', 'DM Sans', sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                letterSpacing: "0.05em",
                                color: LINK_COLOR,
                                borderBottom: idx < link.dropdown!.length - 1 ? `1px solid ${MOBILE_DIV}` : "none",
                                transition: "background 0.15s, color 0.15s",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background = YELLOW_BG;
                                (e.currentTarget as HTMLAnchorElement).style.color = BLUE;
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                (e.currentTarget as HTMLAnchorElement).style.color = LINK_COLOR;
                              }}
                            >
                              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: YELLOW, flexShrink: 0 }} />
                              {item.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* ── CTA Buttons ──────────────────────── */}
              {NAV_DATA.ctaButtons.length > 0 && (
                <div style={{ display: "flex", gap: "8px", marginLeft: "16px" }}>
                  {NAV_DATA.ctaButtons.map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      onClick={(e) => handleLinkClick(e, btn.href)}
                      style={{
                        display: "inline-block",
                        fontFamily: "'Outfit', 'DM Sans', sans-serif",
                        fontSize: "12px", fontWeight: 600,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        padding: "9px 20px",
                        transition: "background 0.2s, color 0.2s",
                        border: `1px solid ${YELLOW}`,
                        background: "transparent",
                        color: YELLOW,
                        borderRadius: "2px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = YELLOW;
                        (e.currentTarget as HTMLAnchorElement).style.color = BLUE;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                        (e.currentTarget as HTMLAnchorElement).style.color = YELLOW;
                      }}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Hamburger (Mobile only) ───────────────── */}
          {isMobile && (
            <button
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                borderRadius: "4px",
                flexShrink: 0,
              }}
            >
              {mobileOpen ? <X size={24} color={BLUE} /> : <Menu size={24} color={BLUE} />}
            </button>
          )}
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ─────────────────────── */}
      {isMobile && mobileOpen && (
        <div
          id="mobile-nav-menu"
          style={{
            backgroundColor: NAV_BG,
            borderTop: `1px solid ${BORDER_COLOR}`,
            padding: "16px 24px 24px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_DATA.links.map((link) => (
              <li key={link.label} style={{ borderBottom: `1px solid ${MOBILE_DIV}` }}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    display: "block", padding: "14px 8px", textDecoration: "none",
                    fontFamily: "'Outfit', 'DM Sans', sans-serif",
                    fontSize: "15px", fontWeight: 600,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: BLUE, transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </a>
                {/* Mobile sub-items */}
                {link.dropdown && (
                  <ul style={{ listStyle: "none", margin: 0, padding: "0 0 10px 16px" }}>
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                          style={{
                            display: "flex", alignItems: "center", gap: "8px",
                            padding: "10px 8px", textDecoration: "none",
                            fontFamily: "'Outfit', 'DM Sans', sans-serif",
                            fontSize: "13px", fontWeight: 500,
                            letterSpacing: "0.05em", textTransform: "uppercase",
                            color: LINK_COLOR, transition: "color 0.2s",
                          }}
                        >
                          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: YELLOW, flexShrink: 0 }} />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          {NAV_DATA.ctaButtons.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              {NAV_DATA.ctaButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  onClick={(e) => handleLinkClick(e, btn.href)}
                  style={{
                    display: "block", width: "100%", padding: "14px", textAlign: "center",
                    fontFamily: "'Outfit', 'DM Sans', sans-serif",
                    fontSize: "13px", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    background: YELLOW, color: BLUE,
                    border: "none", cursor: "pointer",
                    textDecoration: "none", transition: "background 0.2s",
                    borderRadius: "2px",
                  }}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Dropdown Animation ─────────────────────── */}
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </header>
  );
}
