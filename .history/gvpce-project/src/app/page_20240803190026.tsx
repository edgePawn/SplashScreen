"use client"
// app/page.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>GVPCE Landing Page</title>
        <meta name="description" content="GVPCE Landing Page" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold">Welcome to GVPCE!</h1>
        <p className="mt-4 text-xl">This is the landing page after the splash screen.</p>
      </main>
    </div>
  );
}
