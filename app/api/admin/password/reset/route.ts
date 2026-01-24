import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { token, password } = await req.json();

  const res = await pool.query(
    `
    SELECT id
    FROM admin_user
    WHERE reset_token = $1
      AND reset_token_expires > NOW()
    `,
    [token]
  );

  if (res.rows.length === 0) {
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }

  const hash = await bcrypt.hash(password, 10);

  await pool.query(
    `
    UPDATE admin_user
    SET password_hash = $1,
        reset_token = NULL,
        reset_token_expires = NULL
    WHERE id = $2
    `,
    [hash, res.rows[0].id]
  );

  return NextResponse.json({ ok: true });
}
