export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl sm:tracking-tighter">
        Oddballs
      </h1>
      <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
        Sports, games and a few oddballs.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/games/premdle"
          className="px-6 py-3 rounded-full bg-accent text-accent-hover font-medium hover:bg-accent-hover transition-colors"
        >
          Play Premdle
        </a>
      </div>
    </div>
  );
}
