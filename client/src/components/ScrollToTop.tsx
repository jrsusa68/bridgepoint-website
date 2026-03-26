import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop — mounts once inside the Router and scrolls the window
 * to the top whenever the pathname changes (i.e. on every page navigation).
 * Hash navigations (e.g. /#contact) are intentionally excluded so the
 * browser can scroll to the anchor target instead.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Only scroll to top for plain page navigations, not hash links.
    // Hash links are handled by window.location.href in Navbar/Footer.
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location]);

  return null;
}
