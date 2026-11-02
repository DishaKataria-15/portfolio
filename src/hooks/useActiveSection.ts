import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently nearest the top of the viewport.
 * Uses a scroll listener with rAF throttling, which stays accurate for both
 * short and very tall sections.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const probe = window.innerHeight * 0.35;
      // The section whose top most recently passed the probe line wins.
      // Ties (side-by-side sections) keep the first in nav order.
      let current = ids[0];
      let bestTop = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - probe <= 0 && top > bestTop + 1) {
          current = id;
          bestTop = top;
        }
      }
      // At the very bottom, highlight the last section even if it is short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
