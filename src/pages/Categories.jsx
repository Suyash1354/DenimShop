import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Categories = () => {
  const DenimList = [
    {
      name: "Type III Trucker",
      description:
        "The Type III Trucker is the definitive denim jacket silhouette, recognized for its clean proportions and iconic chest pockets. Originally designed in the 1960s, it remains one of the most enduring garments in menswear. Crafted from premium indigo denim, it offers a structured fit that molds naturally to the wearer over time. Every detail is purposeful, from the metal hardware to the reinforced seams. A timeless essential built to transcend trends and generations.",
      variety: "Raw Selvedge",
    },
    {
      name: "Raw Selvedge",
      description:
        "Crafted from unwashed selvedge denim woven on traditional shuttle looms, Raw Selvedge represents the purest form of denim craftsmanship. Its deep indigo surface gradually develops unique fades and creases based on the wearer's lifestyle. The fabric begins structured and rigid before evolving into a personalized expression of character. Every mark tells a story, making no two jackets exactly alike. Designed for those who appreciate patience, authenticity, and heritage construction.",
      variety: "Vintage Washed",
    },
    {
      name: "Vintage Washed",
      description:
        "Inspired by decades of natural wear, the Vintage Washed jacket offers immediate comfort and character. The denim is softened through specialized washing techniques that reveal subtle highs and lows throughout the fabric. Faded indigo tones and worn-in texture evoke the feeling of a treasured archival piece. Relaxed and effortless, it bridges heritage style with modern versatility. A jacket that feels familiar from the very first wear.",
      variety: "Oversized",
    },
    {
      name: "Oversized",
      description:
        "The Oversized Denim Jacket reinterprets classic workwear through a contemporary lens. Featuring dropped shoulders, generous proportions, and a relaxed silhouette, it delivers effortless confidence without sacrificing refinement. The loose structure creates fluid movement while maintaining the durability expected from premium denim. Designed for modern styling, it layers comfortably across seasons. A statement piece rooted in comfort and individuality.",
      variety: "Chore Jacket",
    },
    {
      name: "Chore Jacket",
      description:
        "Originally developed for craftsmen and laborers, the Chore Jacket is celebrated for its practicality and understated elegance. Distinguished by its utility pockets and relaxed construction, it balances functionality with timeless design. Premium indigo denim elevates the workwear heritage into a sophisticated wardrobe staple. Its versatile nature allows it to move effortlessly between casual and refined settings. Built with purpose, designed with restraint.",
      variety: "Western Jacket",
    },
    {
      name: "Western Jacket",
      description:
        "Drawing inspiration from classic ranch wear, the Western Jacket is defined by distinctive yoke detailing and snap-button closures. Its rugged origins are refined through premium materials and careful tailoring. Rich indigo denim and contrast stitching create a bold visual identity while preserving timeless appeal. Every detail celebrates heritage craftsmanship and enduring style. A confident silhouette with unmistakable character.",
      variety: "Cropped Jacket",
    },
    {
      name: "Cropped Jacket",
      description:
        "The Cropped Denim Jacket features a shorter body length and refined proportions that create a sharp, contemporary profile. Designed to sit perfectly at the waist, it highlights the natural silhouette while maintaining classic denim authenticity. Clean lines and minimal detailing allow the craftsmanship to take center stage. The result is a versatile garment equally suited to modern and timeless wardrobes. A sophisticated evolution of a denim icon.",
      variety: "Safari Jacket",
    },
    {
      name: "Safari Jacket",
      description:
        "Inspired by exploration and travel, the Safari Jacket combines utility-driven design with elevated tailoring. Multiple front pockets provide functional detailing while maintaining a balanced, structured appearance. Lightweight premium denim ensures comfort across changing environments and seasons. Its heritage influence is complemented by a refined silhouette suited to contemporary lifestyles. Created for those who value both adventure and sophistication.",
      variety: "Type III Trucker",
    },
  ];

  const Images = [
    { name: "4", imageUrl: "/images/4.webp" },
    { name: "5", imageUrl: "/images/5.webp" },
    { name: "6", imageUrl: "/images/6.webp" },
    { name: "7", imageUrl: "/images/7.webp" },
    { name: "8", imageUrl: "/images/8.webp" },
    { name: "9", imageUrl: "/images/9.webp" },
    { name: "10", imageUrl: "/images/10.webp" },
  ];

  const ContainerRef = useRef(null);
  const ImageRef = useRef(null);
  const Heading = useRef(null);
  const ExtraImage = useRef(null);
  const HeadingTextRef = useRef(null);
  const DescRef = useRef(null);
  const VarietyRef = useRef(null);

  const killTextTweens = () => {
    gsap.killTweensOf([HeadingTextRef.current, DescRef.current, VarietyRef.current]);
  };

  const animateTextChange = (index) => {
    const item = DenimList[index];
    if(!item) return;
    killTextTweens();

    gsap.to(HeadingTextRef.current, {
      y: "100%",
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        if (HeadingTextRef.current) {
          HeadingTextRef.current.textContent = item.name;
          gsap.fromTo(
            HeadingTextRef.current,
            { y: "100%" },
            { y: "0%", duration: 0.45, ease: "power3.out" }
          );
        }
      },
    });

    const fadeTargets = [DescRef.current, VarietyRef.current];
    gsap.to(fadeTargets, {
      opacity: 0,
      y: -10,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        if (DescRef.current) DescRef.current.textContent = item.description;
        if (VarietyRef.current) VarietyRef.current.textContent = item.variety;
        gsap.to(fadeTargets, {
          opacity: 1,
          y: 0,
          duration: 0.32,
          ease: "power2.out",
        });
      },
    });
  };

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // --- DESKTOP ANIMATIONS (>= 1024px) ---
      mm.add("(min-width: 1024px)", () => {
        const Target = ImageRef.current.children;
        const restImage = ExtraImage.current.children;

        gsap.set(Target, { y: "100%", x: 0 });
        gsap.set(Heading.current, { y: 200 });
        gsap.set(restImage, { y: "100%" });
        gsap.set([HeadingTextRef.current, DescRef.current, VarietyRef.current], {
          opacity: 1,
          y: 0,
        });

        gsap.set("#desktop-container", { backgroundColor: "#242424" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ContainerRef.current,
            start: "top top",
            end: "+=4000",
            scrub: 1,
            pin: true,
            markers: false,
          },
        });

        // 1. Slide up initial 3 images
        tl.to(Target, {
          y: 0,
          duration: 2.5,       
          stagger: 0.25,       
          ease: "power1.out"
        })

        .to(Target, {
          x: (index) => {
            const containerWidth = window.innerWidth;
            const imageWidth = containerWidth / 3;
            const targetX = containerWidth - imageWidth;
            return targetX - index * imageWidth;
          },
          duration: 2.5,     
          stagger: 0.75,     
          ease: "power2.inOut"
        }, "startSpreading")
      
        .to("#desktop-container", { backgroundColor: "#D9D2CE", duration: 0 }, "startSpreading")
        .to(Heading.current, { y: 0, duration: 1 }, "startSpreading+=1")
        .from(
          ".fade-content",
          { opacity: 0, duration: 1, ease: "power3.inOut" },
          "startSpreading+=1"
        )

        .addLabel("slideRightEnd");

        // 3. Extra images loop
        Array.from(restImage).forEach((img, index) => {
          tl.to(
            img,
            {
              y: 0,
              duration: 1,
              ease: "sine.out",
              onStart: () => {
                animateTextChange(index + 1);
              },
              onReverseComplete: () => {
                animateTextChange(index);
              },
            },
         
            index === 0 ? "slideRightEnd" : `>1`
          );
        });
      });


      mm.add("(max-width: 1023px)", () => {
        const mobileElements = gsap.utils.toArray(".mobile-reveal");
        
        mobileElements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none reverse", 
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: ContainerRef }
  );

  return (
    <section ref={ContainerRef} className="w-full relative overflow-x-hidden">
      
     
      {/* DESKTOP LAYOUT (>= 1024px)                                               */}

      <div id="desktop-container" className="hidden lg:flex CONTAINER w-full h-screen items-center relative overflow-hidden">
        
        <div className="CONTENT relative w-2/3 flex-none h-screen flex flex-col justify-center p-12 text-[#242424]">
          <div className="MAIN-TEXT overflow-hidden">
            <h1 ref={Heading} className="font-[Geist-Bold] text-[7vw] h-60">
              <span ref={HeadingTextRef}>The Beaumont</span>
            </h1>
          </div>

          <div className="DESC w-full flex justify-between mt-10">
            <h2
              ref={DescRef}
              className="fade-content font-[Geist-MediumItalic] text-[1vw] pr-12 w-1/2 pt-10"
            >
              Inspired by classic European tailoring and heritage workwear, The
              Beaumont is crafted from premium selvedge denim with a timeless
              silhouette. Every stitch reflects a commitment to craftsmanship
              and durability. Designed to age gracefully, the fabric develops a
              unique character over time. Refined details and a structured fit
              make it suitable for both casual and elevated occasions. A jacket
              built not for seasons, but for generations.
            </h2>

            <div className="fade-content w-1/4">
              <h2 className="font-[Geist-Medium]">VARIETY</h2>
              <h2 ref={VarietyRef} className="font-[Geist-Thin]">
                The Rivière
              </h2>
            </div>
          </div>

          <div className="fade-content flex justify-between font-[Geist-Thin] mt-auto pt-8 pb-8 border-t border-[#242424]/30">
            <h1>Maison Noiré × Heritage Denim</h1>
            <h1>2026</h1>
          </div>
        </div>

        <div className="IMAGESDummy w-1/3 flex-none h-screen"></div>

        {/* 3 absolute images */}
        <div ref={ImageRef} className="THREE-IMAGES flex h-screen absolute w-full top-0 left-0 pointer-events-none">
          <img className="w-1/3 object-cover" src="/images/1.webp" alt="" />
          <img className="w-1/3 object-cover" src="/images/2.webp" alt="" />
          <img className="w-1/3 object-cover" src="/images/3.webp" alt="" />
        </div>

        {/* Extra images stacked on right side */}
        <div ref={ExtraImage} className="absolute w-1/3 z-30 top-0 right-0 h-screen overflow-hidden">
          {Images.map((item, index) => (
            <img
              className="absolute inset-0 w-full h-full object-cover"
              key={index}
              src={item.imageUrl}
              alt=""
            />
          ))}
        </div>
      </div>

      
      {/* MOBILE & TABLET LAYOUT (< 1024px)                                        */}
      
      <div className="block lg:hidden w-full  pt-16 pb-32 bg-[#D9D2CE] text-[#242424]">
        <div className="w-full  mx-auto">
          
          {/* First 3 images one after another */}
          <div className="flex flex-col mb-20">
            <img className="mobile-reveal w-full aspect-[3/4] object-cover rounded shadow-md" src="/images/1.webp" alt="" />
            <img className="mobile-reveal w-full aspect-[3/4] object-cover rounded shadow-md" src="/images/2.webp" alt="" />
            <img className="mobile-reveal w-full aspect-[3/4] object-cover rounded shadow-md" src="/images/3.webp" alt="" />
          </div>

          {/* List: Heading then Image */}
          <div className="flex flex-col gap-20 p-6">
            {Images.map((item, index) => {
              const denimItem = DenimList[index + 1] || DenimList[0]; 
              return (
                <div key={index} className="mobile-reveal flex flex-col gap-4">
                  <h1 className="font-[Geist-Bold] text-2xl md:text-3xl uppercase tracking-wider text-[#242424]">
                    {denimItem.name}
                  </h1>
                  <img
                    className="w-full aspect-[3/4] object-cover rounded shadow-md"
                    src={item.imageUrl}
                    alt={denimItem.name}
                  />
                </div>
              );
            })}
          </div>

          {/* Footer content */}
          <div className="mobile-reveal flex justify-between font-[Geist-Thin]  p-4 text-[11px] md:text-xs uppercase tracking-widest mt-32 pt-8 border-t border-[#242424]/30 text-[#242424]">
            <h1>Maison Noiré × Heritage Denim</h1>
            <h1>2026</h1>
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Categories;