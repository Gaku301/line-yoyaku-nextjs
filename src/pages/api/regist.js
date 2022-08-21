
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // localhost:8080だとInternal server errorになる
      const response = await fetch('https://5c3d-61-211-140-13.jp.ngrok.io/api/v1/regist', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(req.body)
      })
      const data = await response.json();
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json('Catch Error: [' + e.meessage + ']');
    }
  } else {
    // Method not allowed
    res.status(405);
  }
}
