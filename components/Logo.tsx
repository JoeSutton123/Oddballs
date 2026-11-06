import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Oddballs homepage"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-hover font-bold text-sm tracking-tighter">
        O
      </div>
      <span className="font-bold text-xl tracking-tight text-foreground">
        ODDBALLS
      </span>
    </Link>
  );
}