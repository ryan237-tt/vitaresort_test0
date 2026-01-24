import Image from "next/image";

export default function AboutImage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-up relative aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/images/gallery/design-suite.JPG"
            alt="Vita Resort interior atmosphere"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
