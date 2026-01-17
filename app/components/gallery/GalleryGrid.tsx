"use client";

import Image from "next/image";
import { useState } from "react";
import GalleryLightbox from "./GalleryLightbox";
import { galleryImages } from "./galleryImages";

const categories = [
  "All",
  "Rooms",
  "Kitchen",
  "Facade",
  "Gym",
  "Living Room",
] as const;

type Category = typeof categories[number];

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [category, setCategory] = useState<Category>("All");

  const filteredImages =
    category === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === category);

  return (
    <section className="pb-28 bg-[#fbfbf9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setActiveIndex(null);
              }}
              className={`text-sm uppercase tracking-widest transition border-b pb-1
                ${
                  category === cat
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 cursor-pointer"
              onClick={() => setActiveIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CLOUD LINK */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-2">
            Looking for the complete professional photo archive?
          </p>
          <a
            href="https://drive.google.com/drive/folders/1zZfIHse7MmuEz9SavjPv0whMXOqUH6Tc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm uppercase tracking-widest border-b border-gray-400 hover:border-black transition"
          >
            Access full cloud gallery
          </a>
        </div>

      </div>

      {activeIndex !== null && (
        <GalleryLightbox
          images={filteredImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
        />
      )}
    </section>
  );
}
