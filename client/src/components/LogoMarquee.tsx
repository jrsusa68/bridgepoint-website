/* ============================================================
   LOGO MARQUEE — Bridgepoint Business Collective
   Design: Executive Gravitas | Color logos on white/light bg
   Placement: Between Hero stats bar and Services section
   16 color SVG logos from Webflow CDN, infinite seamless loop
   ============================================================ */

const BLUE   = "#0d0e85";
const YELLOW = "#dcb92b";

const LOGOS = [
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d8c688e4e9da18fb552d_51e0ded0b29fcc0ab0486528806ec776_logo-gohighlevel%20200%20x%2045.svg",   alt: "GoHighLevel" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d7f8a13dc729bdf9cc20_logo-zoom%20200%20X%2045.svg",                                           alt: "Zoom" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d8f7c55ce4c3e39905eb_logo-calendly200x48.svg",                                               alt: "Calendly" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d85ed185a646810d87fe_0a4412b193ee6ed9d20c1df3f53b76cd_logo-zapier%20199%20X%2042.svg",        alt: "Zapier" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d89b24b3970447671805_1d6f9710ebb7e23afd5a715c4177b118_Slack_Logo_193%20X%2060.svg",          alt: "Slack" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d8e19a144d4a4d9bd30e_logo-canva%20187%20x%2060.svg",                                         alt: "Canva" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d8d4d95130a88ec306d6_logo-claude%20200%20x%2043.svg",                                        alt: "Claude AI" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d8abf4d49cb08419491c_b0af2cb46a09460721e457e3a581b19e_logo-quickbooks%20200%20X%2038.svg",   alt: "QuickBooks" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d7af4af2d190609ed898_figma-combined-logo%20172%20x%2060.svg",                                 alt: "Figma" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d7d3829707e41b255b20_2156c436a43357abd15c69f9e7dc510d_logo-N8n%20200%20x%2054.svg",           alt: "N8n" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d754837377484ea8c24f_c68a784625bbe6ba7b7b91969ab5e2b0_logo-perplexity%20200%20x%2060.svg",   alt: "Perplexity" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d76251c6ef65bd268e6f_Webflow%20200%20x%2033.svg",                                            alt: "Webflow" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d770ae6df19a896aa398_Asana_idmTfCNPDT%20197%20x%2039.svg",                                   alt: "Asana" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d77f0f067eef04d527f5_Notion_Logo_172%20x%2060.svg",                                          alt: "Notion" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c1d78c4166bee8baf0d652_Gemini_idm%20200%20x%2060.svg",                                         alt: "Gemini" },
  { src: "https://cdn.prod.website-files.com/692ea70ebde9cc8d737dfef3/69c3e00afe25ba35708c11b1_ElevenLabs_Logo_300%20X%2038.svg",                                      alt: "ElevenLabs" },
];

export default function LogoMarquee() {
  return (
    <section
      style={{
        backgroundColor: "#0d0e85",
        borderTop: `3px solid ${YELLOW}`,
        borderBottom: `3px solid ${YELLOW}`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Label row ─────────────────────────────────────────── */}
      <div style={{ textAlign: "center", paddingTop: "28px", paddingBottom: "18px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}>
          <div style={{ width: "28px", height: "1.5px", backgroundColor: YELLOW, opacity: 0.8 }} />
          <span
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
            }}
          >
            Tools &amp; Platforms We Work With
          </span>
          <div style={{ width: "28px", height: "1.5px", backgroundColor: YELLOW, opacity: 0.8 }} />
        </div>
      </div>

      {/* ── Marquee track ─────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          paddingBottom: "28px",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .bp-marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 40s linear infinite;
          }
          .bp-marquee-track:hover {
            animation-play-state: paused;
          }
          .bp-marquee-set {
            display: flex;
            align-items: center;
          }
          .bp-marquee-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 40px;
            border-right: 1px solid rgba(255,255,255,0.08);
            height: 68px;
            flex-shrink: 0;
            transition: opacity 0.25s ease, transform 0.25s ease;
          }
          .bp-marquee-logo:hover {
            opacity: 1 !important;
            transform: scale(1.06);
          }
          .bp-marquee-logo img {
            height: 30px;
            width: auto;
            max-width: 130px;
            object-fit: contain;
            opacity: 0.85;
            filter: brightness(1.15) saturate(0.9);
            transition: opacity 0.25s ease, filter 0.25s ease;
          }
          .bp-marquee-logo:hover img {
            opacity: 1;
            filter: brightness(1.3) saturate(1.1);
          }
        `}</style>

        <div className="bp-marquee-track">
          {/* Set A — visible */}
          <div className="bp-marquee-set">
            {LOGOS.map((logo) => (
              <div className="bp-marquee-logo" key={logo.alt}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
          {/* Set B — aria-hidden duplicate for seamless loop */}
          <div className="bp-marquee-set" aria-hidden="true">
            {LOGOS.map((logo) => (
              <div className="bp-marquee-logo" key={`b-${logo.alt}`}>
                <img src={logo.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
