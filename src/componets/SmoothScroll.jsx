import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // 1. Initialize Lenis with custom settings
    const lenis = new Lenis({
      duration: 1.2,       // How long the scroll animation lasts (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium cubic easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,  // Increase this if you want it to scroll faster per wheel notch
      infinite: false,
    });

    // 2. Connect Lenis to GSAP's ScrollTrigger
    // This is the "magic link" so GSAP animations don't get misaligned
    lenis.on("scroll", ScrollTrigger.update);

    // 3. Tell GSAP to use Lenis's requestAnimationFrame clock
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time to milliseconds
    });

    // 4. Disable GSAP ticker lag smoothing for tighter synchronization
    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;