import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const LoaderRef = useRef(null);
  const CounterRef = useRef(null);
  const StatusRef = useRef(null);
  const BrandRef = useRef(null);

  const [realProgress, setRealProgress] = useState(0);

  const statusPhrases = [
    "RAW INDIGO",
    "SHUTTLE LOOMS",
    "HERITAGE CONSTRUCTION",
    "MAISON NOIRÉ",
  ];

  const imagesToPreload = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
    "/images/8.webp",
    "/images/9.webp",
    "/images/10.webp",
    "/images/Firefly.png",
    "/images/BG-PNG-CROP.png",
    "/images/storefront.png"
  ];

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    if (totalImages === 0) {
      setRealProgress(100);
      return;
    }

    imagesToPreload.forEach((url) => {
      const img = new Image();
      img.src = url;
      
      const handleImageLoad = () => {
        loadedCount++;
        const calculatedProgress = Math.floor((loadedCount / totalImages) * 100);
        setRealProgress(calculatedProgress);
      };

      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; 
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      [BrandRef.current, CounterRef.current, StatusRef.current],
      { opacity: 0, filter: "blur(10px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.15, ease: "power2.out" }
    );
  }, { scope: LoaderRef });

  useEffect(() => {
    const counterObj = { value: parseInt(CounterRef.current?.textContent || "0", 10) };

    gsap.to(counterObj, {
      value: realProgress,
      duration: 0.4,
      ease: "power1.out",
      onUpdate: () => {
        if (CounterRef.current) {
          const formatted = Math.floor(counterObj.value).toString().padStart(2, "0");
          CounterRef.current.textContent = formatted;
        }

        if (StatusRef.current) {
          const currentPhraseIndex = Math.min(
            Math.floor((counterObj.value / 100) * statusPhrases.length),
            statusPhrases.length - 1
          );
          if (StatusRef.current.textContent !== statusPhrases[currentPhraseIndex]) {
            StatusRef.current.textContent = statusPhrases[currentPhraseIndex];
          }
        }
      },
      onComplete: () => {
        if (realProgress === 100) {
          const exitTl = gsap.timeline({
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });

          exitTl.to([BrandRef.current, CounterRef.current, StatusRef.current], {
            opacity: 0,
            y: -40,
            filter: "blur(10px)",
            duration: 0.6,
            ease: "power3.in",
            stagger: 0.05
          });

          exitTl.to(LoaderRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut"
          });
        }
      }
    });
  }, [realProgress, onComplete]);

  return (
    <div
      ref={LoaderRef}
      className="fixed inset-0 w-full h-screen bg-[#242424] z-[9999] flex flex-col justify-between p-8 md:p-16 text-[#D9D2CE] overflow-hidden select-none"
    >
      <div className="w-full flex justify-between items-center font-[Geist-Thin] text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">
        <h2 ref={BrandRef}>Maison Noiré × Studio</h2>
        <h2>Est. 1898</h2>
      </div>

      <div className="w-full flex flex-col items-center justify-center my-auto">
        <div className="h-[15vw] md:h-[12vw] flex items-center justify-center px-8">
          <h1
            ref={CounterRef}
            className="font-[Geist-Bold] text-[15vw] md:text-[12vw] leading-none tracking-normal tabular-nums text-center"
          >
            00
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-between items-end border-t border-[#D9D2CE]/10 pt-6">
        <div className="flex flex-col gap-1">
          <span className="font-[Geist-Thin] text-[9px] uppercase tracking-widest opacity-40">Process Status</span>
          <h3
            ref={StatusRef}
            className="font-[Geist-MediumItalic] text-xs md:text-sm tracking-wider uppercase min-w-[200px]"
          >
            RAW INDIGO
          </h3>
        </div>
        <div className="font-[Geist-Thin] text-[10px] uppercase tracking-widest opacity-40 hidden md:block">
          All rights reserved / 2026
        </div>
      </div>
    </div>
  );
};

export default Loader;