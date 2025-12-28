import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full max-w-3xl min-h-screen py-16 px-4 sm:px-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center justify-center w-full flex-1 space-y-12 sm:space-y-16">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center leading-tight">
            Contador simple
          </h1>

          <div className="mt-4 sm:mt-8">
            <Link href="/counter">
              <Button className="w-48 h-24 sm:w-60 sm:h-32 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-300 hover:scale-105 active:scale-95">
                Go !
              </Button>
            </Link>
          </div>
        </div>
        <footer>
          <div className="w-full max-w-3xl px-4 sm:px-8 py-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Desarrollado por{" "}
            <a
              href="https://github.com/Iptonx "
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            >
              Ipton
            </a>{" "}
            • Inspirado en{" "}
            <a
              href="https://simplecounter.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            >
              Simple Counter App
            </a>{" "}
            • {new Date().getFullYear()}
          </div>
        </footer>
      </main>
    </div>
  );
}
