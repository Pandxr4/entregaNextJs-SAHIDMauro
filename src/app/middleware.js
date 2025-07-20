import { NextResponse } from "next/server";

export function middleware(req) {
  const isAdmin = req.cookies.get("admin")?.value === "true";

  if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
