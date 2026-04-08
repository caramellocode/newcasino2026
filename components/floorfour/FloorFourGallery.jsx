"use client";

import Image from "next/image";

const images = [
  "/images/home-1/f1.jpg",
    "/images/home-1/f2.jpg",
    "/images/home-1/f3.jpg",
    "/images/home-1/f4.jpg",
    "/images/home-1/f5.jpg",
    "/images/home-1/f6.jpg",
];

export default function FloorFourGallery() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-[#C9A84E]/60 shadow-lg transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src={src}
                alt="Floor Four Impression"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />

              {/* leichter Gold-Glow */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-[#FFF2B0]/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}