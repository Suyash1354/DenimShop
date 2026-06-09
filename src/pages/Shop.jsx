import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

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
    const splitHeading = new SplitText(MainHeadingRef.current, { type: "chars, words" });
    const detailItems = gsap.utils.toArray(DetailsContentRef.current.children);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ContentContainerRef.current,
        start: "top 75%", 
        toggleActions: "play none none reverse", 
      }
    });

    tl.from(StoreImageContainerRef.current, {
      y: "100%",
      duration: 1.2,
      ease: "power4.out",
    });

    tl.fromTo(
      splitHeading.chars,
      { opacity: 0, filter: "blur(15px)", y: 15 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.03,
      },
      "-=0.3"
    );

    tl.fromTo(
      HeaderBarRef.current,
      { opacity: 0, filter: "blur(10px)", y: -10 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.6, ease: "power2.out" },
      ">"
    );

    tl.fromTo(
      detailItems,
      { opacity: 0, filter: "blur(10px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.25,
      },
      "-=0.2"
    );
  }, { scope: SectionRef });

  return (
    <section 
      ref={SectionRef} 
      className="w-full bg-[#D9D2CE] relative overflow-x-hidden"
    >
      <div className="w-full h-24 lg:h-40 bg-[#D9D2CE]" />

      <div 
        ref={ContentContainerRef}
        className="w-full min-h-screen flex flex-col lg:flex-row"
      >
        <div 
          ref={LeftPanelRef} 
          className="w-full lg:w-[45%] xl:w-[42%] flex flex-col justify-between p-6 md:p-12 lg:p-16 text-[#242424] bg-[#D9D2CE] z-10 flex-none min-h-screen lg:h-screen overflow-y-auto"
        >
          <div ref={HeaderBarRef} className="w-full">
            <div className="flex justify-between items-center font-[WeissenhofGrotesk-Regular] text-[11px] md:text-xs uppercase tracking-[0.2em] pb-3 border-b border-[#242424]/20">
              <h1>Maison Noiré</h1>
              <h1>Since 1898</h1>
            </div>
          </div>

          <div className="flex flex-col items-center text-center my-auto py-12 max-w-md mx-auto w-full">
            <h1 
              ref={MainHeadingRef} 
              className="font-[Geist-Bold] text-4xl md:text-5xl lg:text-5xl xl:text-6xl uppercase tracking-[0.08em] leading-[1.1] mb-8 select-none text-center text-[#242424]"
            >
              Visit The<br />Maison
            </h1>

            <div className="w-12 h-[1px] bg-[#242424]/40 mb-10"></div>

            <div ref={DetailsContentRef} className="w-full flex flex-col items-center">
              <p className="font-[Geist-MediumItalic] text-sm md:text-[15px] leading-relaxed text-[#242424]/90 tracking-wide space-y-2 mb-10">
                <span className="block">Some things cannot be understood through a screen.</span>
                <span className="block">The weight of the denim. The texture of every stitch.</span>
                <span className="block">The character developed through years of craftsmanship.</span>
                <span className="block mt-6 font-[Geist-Medium] not-italic text-xs tracking-[0.15em] uppercase">
                  Maison Noiré is experienced in person.
                </span>
              </p>

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

              <div className="mb-10 font-[Geist-Thin] text-sm tracking-wide text-center">
                <h3 className="font-[Geist-Medium] text-xs uppercase tracking-[0.2em] mb-3">Maison Noiré</h3>
                <p className="opacity-90">18 Rue Beaumont</p>
                <p className="opacity-90">Le Marais, Paris</p>
                <p className="opacity-90">France 75004</p>
              </div>

              <div className="font-[Geist-Thin] text-xs tracking-[0.2em] uppercase text-center border-t border-[#242424]/10 pt-6 w-3/4">
                <p className="font-[Geist-Medium] text-[10px] mb-1 opacity-70">Mon – Sat</p>
                <p className="text-sm font-[Geist-Regular] tracking-normal lowercase">10:00 – 19:00</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-4 w-full"></div>
        </div>

        <div 
          ref={StoreImageContainerRef} 
          className="w-full lg:w-[55%] xl:w-[58%] h-[65vh] lg:h-screen relative overflow-hidden flex-none z-20 shadow-2xl lg:shadow-none"
        >
          <img
            className="w-full h-full object-cover select-none pointer-events-none"
            src="/images/storefront.webp" 
            alt="Maison Noiré Flagship Exterior Boutique Storefront Asset"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 mix-blend-multiply pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Shop;