import { ArrowDown } from "lucide-react";
import Image from "next/image";

const HERO_IMAGE =
  "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740";

const Banner = () => {
  return (
    <section className="grid items-center gap-8 rounded-2xl border border-base-300 bg-base-200 p-6 sm:p-10 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Workout Library
        </p>

        <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
          Train with intent. Log every set.
        </h1>

        <p className="max-w-md text-sm text-base-content/70">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <a href="#library" className="btn btn-primary btn-sm gap-2">
          <ArrowDown className="h-4 w-4" />
          BROWSE WORKOUTS
        </a>
      </div>

      <Image
        src={HERO_IMAGE}
        alt="Fitness illustration"
        width={740}
        height={500}
        priority
        unoptimized
        className="h-64 w-full rounded-xl object-cover md:h-72"
      />
    </section>
  );
};

export default Banner;
