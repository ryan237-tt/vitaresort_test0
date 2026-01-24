"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the nightly rate?",
    answer:
      "The nightly rate is 150,000 XAF.",
  },
  {
    question: "Do I need to pay online to make a reservation?",
    answer:
      "No. Reservations are made without online payment. Once you submit your booking request, our team will contact you directly to assist you with the next steps.",
  },
  {
    question: "Is there a security deposit?",
    answer:
      "Yes. A refundable security deposit starting from 100,000 XAF is required for all stays. The amount may vary depending on the number of guests and the type of stay (birthday, private event, etc.).",
  },
  {
    question: "Can I organize a birthday or private event?",
    answer:
      "Yes, private events are possible. Specific conditions and deposit amounts may apply depending on the nature of the event.",
  },
  {
    question: "What happens after I submit a booking request?",
    answer:
      "After submitting your request, our team will contact you via phone or WhatsApp to confirm availability, explain the conditions, and finalize your reservation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#F7F7F5]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="reveal-up h2-section text-center mb-14">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i;

            return (
              <div
                key={faq.question}
                className="reveal-up bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display text-lg">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-[#857416]">
                    {open ? "−" : "+"}
                  </span>
                </button>

                {open && (
                  <div className="px-6 pb-6 body text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
