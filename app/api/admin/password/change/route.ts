import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";
import { requireAdmin } from "@/app/lib/admin-auth";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { currentPassword, newPassword } = await req.json();

  // 🔍 Get current hash
  const res = await pool.query(
    `SELECT password_hash FROM admin_user WHERE id = $1`,
    [admin.id]
  );

  const hash = res.rows[0]?.password_hash;
  if (!hash) {
    return NextResponse.json(
      { error: "Account not found" },
      { status: 404 }
    );
  }

  // ❌ Wrong current password
  const valid = await bcrypt.compare(currentPassword, hash);
  if (!valid) {
    return NextResponse.json(
      { error: "Current password is incorrect" },
      { status: 400 }
    );
  }

  // 🔐 Save new password
  const newHash = await bcrypt.hash(newPassword, 10);

  await pool.query(
    `
    UPDATE admin_user
    SET password_hash = $1
    WHERE id = $2
    `,
    [newHash, admin.id]
  );

  return NextResponse.json({ ok: true });
}
