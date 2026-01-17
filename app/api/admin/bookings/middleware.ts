import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Autoriser la page de login + API login
  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/api/admin/login")
  ) {
    return NextResponse.next();
  }

  // Protéger tout le reste de /admin et /api/admin
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const adminId = req.cookies.get("admin_token")?.value;

    if (!adminId) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
