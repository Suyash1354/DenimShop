import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Home = ({ isLoading }) => {
  const BgRef = useRef(null);
  const PngRef = useRef(null);
  const NavRef = useRef(null);
  const HeadingRef = useRef(null);
  const SubTextRef = useRef(null);
  
  
  const introTimeline = useRef(null);

  
  useGSAP(() => {
    const Heading = new SplitText(HeadingRef.current, { type: "chars" });
    
    // Create the timeline in a paused state right away
    introTimeline.current = gsap.timeline({ paused: true });

    introTimeline.current.from(PngRef.current, {
      y: 800,
      duration: 1.2,
      ease: "power3.out",
    });

    introTimeline.current.fromTo(
      Heading.chars,
      { opacity: 0, filter: "blur(30px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "sine.out",
        stagger: 0.1,
      },
      ">",
    );

    introTimeline.current.fromTo(
      NavRef.current,
      { opacity: 0, filter: "blur(30px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "sine.out" },
      "-=1",
    );

    introTimeline.current.fromTo(
      SubTextRef.current,
      { opacity: 0, filter: "blur(30px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "sine.out" },
      "<",
    );
  }, []); 

  useGSAP(() => {
    if (!isLoading && introTimeline.current) {
      introTimeline.current.play();
    }
  }, [isLoading]); 

  return (
    <section className="w-full h-screen relative overflow-hidden">
      <div className="CONTAINER w-full h-screen">
        <div ref={BgRef} className="BG-IMAGE w-full h-screen z-0 ">
          <img
            className="lg:w-full lg:h-screen w-full h-screen object-cover "
            src="/images/Firefly.webp"
            alt=""
          />
        </div>
        <div ref={PngRef} className="w-full h-screen absolute inset-0 z-40  ">
          <img
            className="lg:w-full lg:h-screen w-full h-screen  object-cover pointer-events-none"
            src="/images/BG-PNG-CROP.png"
            alt=""
          />
        </div>

        <div className="TEXT w-full h-screen absolute inset-0 z-10">
          <div
            ref={NavRef}
            className="NAV-TEXT w-full text-[3vw] md:text-[2vw] lg:text-[0.9vw] flex justify-between py-4 px-6 z-50 font-[WeissenhofGrotesk-Regular] text-[#242424] "
          >
            <h1>FLAGSHIP STORE FRANCE</h1>
            <h1>Maison Noiré 1998</h1>
          </div>
          <div className="HEADINF w-full h-screen absolute inset-0 flex justify-center items-center z-10 overflow-hidden ">
            <h1
              ref={HeadingRef}
              className="lg:text-[40vw] md:text-[80vw] text-[90vw] -translate-y-20 md:-translate-y-0 font-[Galgo] text-[#242424]"
            >
              NOIRÉ
            </h1>

            <div
              ref={SubTextRef}
              className="SUB-TEXT w-full h-screen absolute lg:top-50 md:top-60 top-30 flex justify-center"
            >
              <h1 className="text-[3vw] lg:w-40 lg:h-8 flex justify-center md:text-[3vw] lg:text-[1vw] font-[WeissenhofGrotesk-Regular] text-[#242424] ">
                TIMELESS DENIM
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;