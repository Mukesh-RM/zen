import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dojo-black">
      <div className="text-center px-4">
        <span className="font-kanji text-8xl text-crimson/30 block select-none">404</span>
        <h1 className="font-display text-4xl text-parchment mt-4 mb-3">Page Not Found</h1>
        <p className="text-slate-400 mb-8">The path you seek does not exist, grasshopper.</p>
        <Link href="/" className="crimson-btn inline-block">
          Return to Dojo
        </Link>
      </div>
    </main>
  );
}
