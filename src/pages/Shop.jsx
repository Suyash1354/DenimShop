import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register ScrollTrigger along with SplitText
gsap.registerPlugin(ScrollTrigger, SplitText);

const Shop = () => {
  const SectionRef = useRef(null);
  const ContentContainerRef = useRef(null);
  const StoreImageContainerRef = useRef(null);
  const LeftPanelRef = useRef(null);
  const HeaderBarRef = useRef(null);
  const MainHeadingRef = useRef(null);
  const DetailsContentRef = useRef(null);

  useGSAP(() => {
    // Split text into individual characters for the premium reveal
    const splitHeading = new SplitText(MainHeadingRef.current, { type: "chars, words" });
    
    // Create timeline that triggers EXACTLY when the content area rolls into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ContentContainerRef.current,
        start: "top 80%", // Automatically plays when the content area enters the viewport
        toggleActions: "play none none reverse", // Smoothly replays if scrolling back up
      }
    });

    // 1. Slide-up reveal for the flagship storefront image facade
    tl.from(StoreImageContainerRef.current, {
      y: "100%",
      duration: 1.4,
      ease: "power4.out",
    });

    // 2. Letter-by-letter blur reveal for the main heading
    tl.fromTo(
      splitHeading.chars,
      { opacity: 0, filter: "blur(20px)", y: 10 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.04,
      },
      "-=0.4"
    );

    // 3. Blur-fade activation for the top metadata header bar
    tl.fromTo(
      HeaderBarRef.current,
      { opacity: 0, filter: "blur(15px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "sine.out" },
      "-=0.8"
    );

    // 4. Blur-fade activation for the storytelling text blocks
    tl.fromTo(
      DetailsContentRef.current,
      { opacity: 0, filter: "blur(15px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, ease: "power2.out" },
      "<"
    );
  }, { scope: SectionRef });

  return (
    <section 
      ref={SectionRef} 
      className="w-full bg-[#D9D2CE] relative overflow-x-hidden"
    >
      
      {/* ======================================================================== */}
      {/* EDITORIAL LAYOUT SPACER                                                  */}
      {/* Pushes the storefront down to completely separate the joined images      */}
      {/* ======================================================================== */}
      <div className="w-full h-24 lg:h-40 bg-[#D9D2CE]" />

      {/* Main Content Layout Container */}
      <div 
        ref={ContentContainerRef}
        className="w-full min-h-screen flex flex-col lg:flex-row"
      >
        
        {/* ======================================================================== */}
        {/* LEFT CONTENT PANEL (Editorial Details & Brand Narrative)                  */}
        {/* ======================================================================== */}
        <div 
          ref={LeftPanelRef} 
          className="w-full lg:w-[45%] xl:w-[42%] flex flex-col justify-between p-6 md:p-12 lg:p-16 text-[#242424] bg-[#D9D2CE] z-10 flex-none min-h-screen lg:h-screen overflow-y-auto"
        >
          {/* Top Header Row metadata strip */}
          <div ref={HeaderBarRef} className="w-full">
            <div className="flex justify-between items-center font-[WeissenhofGrotesk-Regular] text-[11px] md:text-xs uppercase tracking-[0.2em] pb-3 border-b border-[#242424]/20">
              <h1>Maison Noiré</h1>
              <h1>Since 1898</h1>
            </div>
          </div>

          {/* Center Informational Content Wrapper */}
          <div className="flex flex-col items-center text-center my-auto py-12 max-w-md mx-auto w-full">
            
            {/* Editorial Display Main Header */}
            <h1 
              ref={MainHeadingRef} 
              className="font-[Geist-Bold] text-4xl md:text-5xl lg:text-5xl xl:text-6xl uppercase tracking-[0.08em] leading-[1.1] mb-8 select-none text-center text-[#242424]"
            >
              Visit The<br />Maison
            </h1>

            {/* Minimalist Visual Accent Bar */}
            <div className="w-12 h-[1px] bg-[#242424]/40 mb-10"></div>

            {/* Secondary Content Elements */}
            <div ref={DetailsContentRef} className="w-full flex flex-col items-center">
              
              {/* Immersive Storefront Narrative Text block */}
              <p className="font-[Geist-MediumItalic] text-sm md:text-[15px] leading-relaxed text-[#242424]/90 tracking-wide space-y-2 mb-10">
                <span className="block">Some things cannot be understood through a screen.</span>
                <span className="block">The weight of the denim. The texture of every stitch.</span>
                <span className="block">The character developed through years of craftsmanship.</span>
                <span className="block mt-6 font-[Geist-Medium] not-italic text-xs tracking-[0.15em] uppercase">
                  Maison Noiré is experienced in person.
                </span>
              </p>

              {/* Architectural Line-Art Building Graphic Ornament */}
              <div className="w-20 h-auto opacity-80 mb-8 text-[#242424]">
                <svg viewBox="0 0 100 70" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="15" y="35" width="70" height="30" />
                  <path d="M15 35 L50 15 L85 35 Z" />
                  <rect x="42" y="47" width="16" height="18" />
                  <rect x="23" y="43" width="10" height="10" />
                  <rect x="67" y="43" width="10" height="10" />
                  <line x1="10" y1="65" x2="90" y2="65" />
                </svg>
              </div>

              {/* Store Location Coordinates Block */}
              <div className="mb-10 font-[Geist-Thin] text-sm tracking-wide text-center">
                <h3 className="font-[Geist-Medium] text-xs uppercase tracking-[0.2em] mb-3">Maison Noiré</h3>
                <p className="opacity-90">18 Rue Beaumont</p>
                <p className="opacity-90">Le Marais, Paris</p>
                <p className="opacity-90">France 75004</p>
              </div>

              {/* Operational Hours Grid */}
              <div className="font-[Geist-Thin] text-xs tracking-[0.2em] uppercase text-center border-t border-[#242424]/10 pt-6 w-3/4">
                <p className="font-[Geist-Medium] text-[10px] mb-1 opacity-70">Mon – Sat</p>
                <p className="text-sm font-[Geist-Regular] tracking-normal lowercase">10:00 – 19:00</p>
              </div>

            </div>
          </div>

          <div className="hidden lg:block h-4 w-full"></div>
        </div>

        {/* ======================================================================== */}
        {/* RIGHT FULL-BLEED WINDOW (Flagship Store Facade Container)                */}
        {/* ======================================================================== */}
        <div 
          ref={StoreImageContainerRef} 
          className="w-full lg:w-[55%] xl:w-[58%] h-[65vh] lg:h-screen relative overflow-hidden flex-none z-20 shadow-2xl lg:shadow-none"
        >
          <img
            className="w-full h-full object-cover select-none pointer-events-none"
            src="/images/storefront.png" 
            alt="Maison Noiré Flagship Exterior Boutique Storefront Asset"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 mix-blend-multiply pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default Shop;