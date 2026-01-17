import { NextResponse, type NextRequest } from "next/server";
import { pool } from "@/app/lib/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await pool.query("DELETE FROM admin_user WHERE id = $1", [params.id]);
  return NextResponse.json({ ok: true });
}
