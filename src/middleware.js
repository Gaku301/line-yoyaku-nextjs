import { NextResponse, NextRequest } from "next/server";

export default async function middleware(request) {
  // XSRF-TOKENとlaravel_sessionがセットされてなければログイン画面にリダイレクトさせる
  if (!request.nextUrl.pathname.startsWith('/admin/login') && 
      !request.nextUrl.pathname.startsWith('/admin/regist'))
  {
    const token = request.cookies.get('XSRF-TOKEN');
    const laravel_session = request.cookies.get('laravel_session');
    const user = request.cookies.get('user');
    if (!token || !laravel_session || !user) {
      // ログイン画面にリダイレクト
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/admin/:path*'],
}