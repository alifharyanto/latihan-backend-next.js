export async function GET() {
  return new Response(
    JSON.stringify({ message: "Halo aku dari backend next js" }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://superlative-pony-43d0be.netlify.app/",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    }
  );
}
