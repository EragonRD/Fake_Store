"use client";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Bienvenue sur mon projet Next.js !
      </h1>
    </main>
  );
}