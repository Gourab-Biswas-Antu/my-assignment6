"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const links = [
  { label: "Workout", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { planWorkouts, savedWorkouts } = useContext(WorkoutsContext);

  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-primary" />
          <span className="font-display hidden text-sm font-bold tracking-wider min-[420px]:inline">
            FITLOG
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-base-content/70 hover:text-base-content"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="badge badge-primary h-7 gap-1 px-3 text-xs font-semibold"
          >
            Plan <span>{planWorkouts.length}</span>
          </Link>
          <Link
            href="/my-plan"
            className="badge badge-outline h-7 gap-1 px-3 text-xs font-semibold"
          >
            Saved <span>{savedWorkouts.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
