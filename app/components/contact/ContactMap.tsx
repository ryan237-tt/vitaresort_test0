"use client";
import Image from "next/image";
import Link from "next/link";

const MAPS_URL = "https://maps.app.goo.gl/7SvMHT5hW5H1L7ASA?g_st=aw";

export default function ContactMap() {
  return (
    <section className="py-20 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="reveal-up h2-section text-center mb-10">
          Map & Directions
        </h2>

        {/* Map container */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-6 group">
          {/* Utilisation de l'image locale */}
          <img
            src="/images/only_residence.png"
            alt="Only Residence Location"
            className="w-full h-[450px] object-cover"
            loading="lazy"
          />

          {/* Click overlay */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open in Google Maps"
            className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition"
          >
            <span className="opacity-0 group-hover:opacity-100 transition bg-white px-6 py-3 rounded-lg font-accent text-sm">
              Open in Google Maps
            </span>
          </a>
        </div>

        <p className="body text-center text-gray-600 italic">
          If you hesitate at any turn, call us — we guide you live.
        </p>

        <div className="text-center mt-6">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#857416] text-black font-semibold rounded-lg hover:opacity-90 transition"
          >
            Open Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
