import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";
import crypto from "crypto";

export async function POST(req: Request) {
  const { email } = await req.json();

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

  // 👉 ici plus tard tu peux envoyer un email
  return NextResponse.json({
    resetLink: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/set-password?token=${token}`,
  });
}
