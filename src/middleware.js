import { NextResponse, NextRequest } from "next/server";

export default async function middleware(request) {
  // XSRF-TOKENとlaravel_sessionがセットされてなければログイン画面にリダイレクトさせる
  const token = request.cookies.get('XSRF-TOKEN');
  const laravel_session = request.cookies.get('laravel_session');
  if (!token || !laravel_session) {
    // ログイン画面にリダイレクト
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}