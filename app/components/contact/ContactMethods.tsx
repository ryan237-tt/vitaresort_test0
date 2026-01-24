"use client";

const methods = [
  {
    label: "Call",
    value: "+237 6 94 42 59 10",
    href: "tel:+237694425910",
    icon: "📞",
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/237694425910",
    icon: "💬",
  },
  {
    label: "Email",
    value: "contact@onlyresidency.com",
    href: "mailto:contact@onlyresidency.com",
    icon: "✉️",
  },
  {
    label: "Address",
    value: "Derriere École Russe, Makepé, Douala,",
    href: "https://maps.app.goo.gl/7SvMHT5hW5H1L7ASA?g_st=aw",
    icon: "📍",
  },
];

export default function ContactMethods() {
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {methods.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            className="reveal-up bg-[#F6F6F6] p-8 rounded-xl text-center hover:bg-[#857416]/10 transition"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="h3-card mb-2">{item.label}</h3>
            <p className="body text-gray-600">{item.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
