"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function submit() {
    await fetch("/api/admin/password/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setSent(true);
  }

  return (
    <div className="max-w-md mx-auto mt-32 text-center">
      <h1 className="text-2xl font-semibold mb-4">
        Forgot your password?
      </h1>

      {sent ? (
        <p className="text-green-600">
          If the email exists, a reset link has been sent.
        </p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Admin email"
            className="w-full border p-3 rounded mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={submit}
            className="w-full bg-black text-white py-3 rounded"
          >
            Send reset link
          </button>
        </>
      )}
    </div>
  );
}
