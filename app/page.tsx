"use client";

export default function Home() {
  async function testAPI() {
    const res = await fetch("/api");
    const data = await res.json();
    alert(data.message);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Frontend Next.js</h1>
      <button
        onClick={testAPI}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Test Backend
      </button>
    </main>
  );
}
