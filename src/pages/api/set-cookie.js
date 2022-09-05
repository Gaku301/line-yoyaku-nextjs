import { serialize } from "cookie";

export default function handler(req, res) {
  // リロード対策でuser_idをCookieに保存しておく
  try {
    console.log(req);
    res.setHeader('Set-Cookie', [
      serialize('user', req.body.user, {
        path: '/'
      }),
    ]);
    res.status(200).send('ok');
  } catch (e) {
    res.status(500).send(e);
  }
}