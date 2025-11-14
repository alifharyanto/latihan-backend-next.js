global.__MESSAGES ||= [
  { id: 1, user: "System", text: "Selamat datang di MiniChat!", time: new Date().toLocaleTimeString() }
];

export async function POST(req) {
  const body = await req.json();
  const msg = {
    id: Date.now(),
    user: (body.user || "Guest"),
    text: (body.text || ""),
    time: new Date().toLocaleTimeString()
  };
  global.__MESSAGES.push(msg);

  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
