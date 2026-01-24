import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";
import crypto from "crypto";
import { sendMail } from "@/app/lib/mailer";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const token = crypto.randomUUID();
  const expires = new Date(Date.now() + 1000 * 60 * 60); // 1h

  await pool.query(
    `
    UPDATE admin_user
    SET reset_token = $1,
        reset_token_expires = $2
    WHERE email = $3
    `,
    [token, expires, email]
  );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const link = `${siteUrl}/admin/reset-password?token=${token}`;

  // En prod: on envoie l’email (et on ne révèle jamais si l’email existe)
  try {
    await sendMail({
      to: email,
      subject: "Reset your admin password",
      html: `
        <p>Hello,</p>
        <p>Click the link below to reset your admin password (valid 1 hour):</p>
        <p><a href="${link}">${link}</a></p>
        <p>If you didn't request this, ignore this email.</p>
      `,
      text: `Reset your admin password: ${link}`,
    });
  } catch (e) {
    // En DEV tu peux log l’erreur SMTP
    console.error("SMTP send error:", e);
  }

  return NextResponse.json({ ok: true });
}
