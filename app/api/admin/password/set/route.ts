import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Missing data" },
      { status: 400 }
    );
  }

  const hash = await bcrypt.hash(password, 10);

  const res = await pool.query(
    `
    UPDATE admin_user
    SET password_hash = $1
    WHERE email = $2
      AND password_hash IS NULL
    RETURNING id
    `,
    [hash, email]
  );

  if (res.rowCount === 0) {
    return NextResponse.json(
      { error: "Password already set or admin not found" },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
