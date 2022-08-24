import { NextResponse, NextRequest } from "next/server";

export default async function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    const token = request.cookies.get('XSRF-TOKEN');
    if (!token) {
      // ログイン画面にリダイレクト
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }
}