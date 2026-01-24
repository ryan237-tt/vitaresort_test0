"use client";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-[#0B0B0B] text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="reveal-up h2-section mb-8">
          Need help with your reservation?
        </h2>

        <p className="reveal-up body-lg text-gray-400 mb-8">
          Reservations are made without immediate payment.  
          Our team will assist you personally after your request.
        </p>

        <div className="reveal-up flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/237694425910"
            target="_blank"
            className="px-10 py-4 bg-green-500 text-white rounded-lg font-accent font-semibold"
          >
            Contact via WhatsApp
          </a>

          <a
            href="/book"
            className="px-10 py-4 bg-[#857416] text-black rounded-lg font-accent font-semibold"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
