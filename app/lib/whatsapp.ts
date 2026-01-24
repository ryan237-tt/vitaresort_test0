type PaymentConfirmedWhatsAppPayload = {
  phone: string;          // ex: "237659099178"
  firstName: string;
  lastName: string;
  bookingId: string;
  checkIn: string;
  checkOut: string;
  total: number;
  adminLink?: string;
};

export function sendPaymentConfirmedWhatsApp(data: PaymentConfirmedWhatsAppPayload) {
  const message = encodeURIComponent(
    [
      `Hello ${data.firstName} 👋`,
      "",
      "✅ Your payment at * Residence Only * has been confirmed.",
      "",
      `Booking ID: ${data.bookingId}`,
      `Guest: ${data.firstName} ${data.lastName}`,
      `Dates: ${data.checkIn} → ${data.checkOut}`,
      `Total: ${data.total.toLocaleString("fr-FR")} XAF`,
      "",
      "We look forward to welcoming you at Residence Only 🌴",
      data.adminLink ? "" : null,
      data.adminLink ? "Admin booking link:" : null,
      data.adminLink ?? null,
    ]
      .filter(Boolean)
      .join("\n")
  );

  return `https://wa.me/${data.phone}?text=${message}`;
}
