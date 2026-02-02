"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      // 1000ms is usually the "sweet spot" for professional-feeling transitions
      duration: 1000, 
      offset: 100,
      // 'once: true' prevents elements from hiding again when you scroll up,
      // which often feels smoother for portfolio sites.
      once: true, 
      easing: "ease-out-cubic",
    });

    // Optional: Refresh AOS when content changes
    AOS.refresh();
  }, []);

  return <>{children}</>;
}