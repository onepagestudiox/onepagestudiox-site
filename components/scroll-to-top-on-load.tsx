"use client";

import { useEffect } from "react";

/**
 * Prevents the browser from restoring scroll position on refresh when there's no hash.
 * When the URL has a hash (e.g. /#process), we scroll to that section instead of forcing top.
 */
export function ScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent browser from restoring previous scroll position on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const hash = window.location.hash?.slice(1); // e.g. "process" from "#process"
    if (hash) {
      // Scroll to the section with this id (after a tick so DOM is ready)
      const scrollToHash = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      };
      // Allow layout/paint so the target section exists
      requestAnimationFrame(() => requestAnimationFrame(scrollToHash));
    } else {
      // No hash: start at top (avoids scroll-restoration jump on refresh)
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
