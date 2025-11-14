// simple in-memory store (only for demo/testing)
global.__MESSAGES ||= [
  { id: 1, user: "System", text: "Selamat datang di MiniChat!", time: new Date().toLocaleTimeString() }
];

export async function GET() {
  return new Response(JSON.stringify(global.__MESSAGES), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
