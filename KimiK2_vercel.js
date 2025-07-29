// Vercel API (Node.js)
export default async function handler(req) {
  const { query } = req.body;
  const res = await fetch('https://api.kimi-k2.com/chat', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer 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' },
    body: JSON.stringify({ query })
  });
  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
