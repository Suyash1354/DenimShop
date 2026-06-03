import React from "react";

const Categories = () => {
  const DenimList = [
    {
      name: "The Beaumont",
      description:
        "Heritage selvedge denim with timeless character. Crafted to be worn, faded, and remembered.",
    },
    {
      name: "The Rivière",
      description:
        "Elegant tailoring inspired by old-world craftsmanship. Refined details define every stitch.",
    },
    {
      name: "The Montclair",
      description:
        "Deep indigo hues meet vintage authenticity. Built for a lifetime of wear.",
    },
    {
      name: "The Laurent",
      description:
        "Lightweight construction for effortless sophistication. Designed for long summers and quiet moments.",
    },
    {
      name: "The Valois",
      description:
        "Structured, confident, and unmistakably premium. An icon of modern heritage style.",
    },
    {
      name: "The Noiré",
      description:
        "The definitive expression of Maison Noiré. Where craftsmanship and timeless design converge.",
    },
  ];

  return (
    <section className="w-full h-screen bg-[#D9D2CE]">
      <div className="CONTAINER lg:w-full lg:h-screen flex items-center ">
        <div className="CONTENT relative lg:w-[70%] lg:h-screen lg:flex lg:flex-col justify-center p-8 text-[#242424]">
          <div className="MAIN-TEXT">
            <h1 className="font-[Geist-Bold] lg:text-[7vw]">The Beaumont</h1>
          </div>
          <div className="DESC lg:w-full lg:h-screen lg:flex justify-between ">
            <h2 className="font-[Geist-MediumItalic] lg:text-[1vw] lg:px-6 lg:w-1/2">
              Inspired by classic European tailoring and heritage workwear, The
              Beaumont is crafted from premium selvedge denim with a timeless
              silhouette. Every stitch reflects a commitment to craftsmanship
              and durability. Designed to age gracefully, the fabric develops a
              unique character over time. Refined details and a structured fit
              make it suitable for both casual and elevated occasions. A jacket
              built not for seasons, but for generations.
            </h2>
            <div className="">
              <h2 className="font-[Geist-Medium]">VARIETY</h2>
              <h2 className="font-[Geist-Thin]">The Rivière</h2>
            </div>
          </div>
          

          <div className=" flex justify-between font-[Geist-Thin] px-4">
            <h1>Maison Noiré × Heritage Denim</h1>
            <h1>2026</h1>
          </div>
        </div>

        <div className="IMAGES lg:w-[30%] lg:h-screen bg-amber-800 ">
            <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
