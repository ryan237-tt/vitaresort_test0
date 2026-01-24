"use client";

import { useState } from "react";

export default function ChangePasswordPage() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    setError(null);

    const res = await fetch("/api/admin/password/change", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentPassword: current,
        newPassword: next,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Error");
      return;
    }

    setDone(true);
    setCurrent("");
    setNext("");
  }

  return (
    <div className="max-w-md mx-auto mt-32">
      <h1 className="text-2xl font-semibold mb-6">
        Change password
      </h1>

      {done && (
        <div className="mb-4 text-green-600">
          Password updated successfully.
        </div>
      )}

      {error && (
        <div className="mb-4 text-red-600">
          {error}
        </div>
      )}

      <input
        type="password"
        placeholder="Current password"
        className="w-full border p-3 rounded mb-4"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />

      <input
        type="password"
        placeholder="New password"
        className="w-full border p-3 rounded mb-6"
        value={next}
        onChange={(e) => setNext(e.target.value)}
      />

      <button
        onClick={submit}
        className="w-full bg-black text-white py-3 rounded"
      >
        Update password
      </button>
    </div>
  );
}
