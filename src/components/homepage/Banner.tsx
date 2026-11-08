import { ArrowDown } from "lucide-react";
import Image from "next/image";

// The Figma image was not available, so this is a placeholder.
// To use your own image: put it in src/assets (e.g. hero_img.jpg),
// then replace this with:  import bannerImg from "@/assets/hero_img.jpg";
// and use  src={bannerImg}  below (you can remove "unoptimized" and width/height then).
const HERO_IMAGE =
  "https://img.magnific.com/free-photo/3d-cartoon-fitness-man_23-2151691400.jpg?w=740";

const Banner = () => {
  return (
    <section className="grid items-center gap-8 rounded-2xl border border-base-300 bg-base-200 p-6 sm:p-10 md:grid-cols-2">
      {/* Content */}
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

        {/* Scrolls down to the section with id="library" */}
        <a href="#library" className="btn btn-primary btn-sm gap-2">
          <ArrowDown className="h-4 w-4" />
          BROWSE WORKOUTS
        </a>
      </div>

      {/* Image */}
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
