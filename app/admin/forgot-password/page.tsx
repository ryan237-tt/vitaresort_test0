"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function submit() {
    await fetch("/api/admin/password/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setDone(true);
  }

  return (
    <div className="max-w-md mx-auto mt-32 p-6 border rounded-xl">
      <h1 className="text-2xl font-semibold mb-4">
        Reset admin password
      </h1>

      {done ? (
        <p className="text-green-600">
          If the email exists, a reset link was generated.
        </p>
      ) : (
        <>
          <input
            className="w-full border p-3 rounded mb-4"
            placeholder="Admin email"
            value={email}
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
