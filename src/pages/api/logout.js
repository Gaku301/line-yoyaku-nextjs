import { serialize } from "cookie";

export default function handler(req, res) {
  // Logoutの際にCookieを削除しておく(ブラウザバックなども無効にできるため)
  try {
    res.setHeader('Set-Cookie', [
      serialize('laravel_session', "", {
        maxAge: -1,
        path: '/'
      }),
      serialize('XSRF-TOKEN', "", {
        maxAge: -1,
        path: '/'
      }),
    ]);
    res.status(200).send('ok');
  } catch (e) {
    res.status(500).send(e);
  }
}