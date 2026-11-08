import { Dumbbell } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-primary" />
          <span className="font-display text-sm font-bold tracking-wider">
            FITLOG
          </span>
        </Link>

        <p className="text-center text-xs text-base-content/60">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
