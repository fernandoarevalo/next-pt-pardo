import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-xs font-semibold tracking-[0.5em] text-zinc-400">
          PT PARDO
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Circuit Mode
        </h1>
        <p className="mt-3 max-w-md text-base leading-7 text-zinc-300">
          Feature migrada a Next.js (App Router). Entra al circuito para probar
          la rutina, preview y temporizador.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/circuit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Abrir circuito
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Docs Next.js
          </a>
        </div>
      </main>
    </div>
  );
}
