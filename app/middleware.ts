import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pool } from "@/app/lib/db";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Autoriser login
  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/api/admin/login")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const adminId = req.cookies.get("admin_token")?.value;
    if (!adminId) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    // 🔐 Vérifie que l’admin existe
    const res = await pool.query(
      "SELECT id FROM admin_user WHERE id = $1 LIMIT 1",
      [adminId]
    );

    if (res.rows.length === 0) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
