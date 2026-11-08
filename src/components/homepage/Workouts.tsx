import WorkoutCard from "@/components/shared/WorkoutCard";
import { IWorkout } from "@/types/workouts.type";

// Set NEXT_PUBLIC_SERVER_BASE_URL in .env.local to use a different API
const BASE_URL =
  process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? "https://api.abcz.workers.dev";

// If the request fails, the error is thrown and src/app/error.tsx is shown
const getWorkouts = async (): Promise<IWorkout[]> => {
  const response = await fetch(`${BASE_URL}/api/fitlog`);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data = await response.json();
  return data;
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <section id="library" className="scroll-mt-20">
      {/* Section Heading */}
      <h2 className="font-display text-2xl uppercase">The Library</h2>
      <p className="mb-6 text-sm text-base-content/60">
        Twelve lifts covering every major muscle group.
      </p>

      {/* Workouts Grid */}
      {workoutsData.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workoutsData.map((workout: IWorkout) => {
            return <WorkoutCard key={workout.id} workout={workout} />;
          })}
        </div>
      ) : (
        <p className="py-10 text-center text-base-content/70">
          No workouts found.
        </p>
      )}
    </section>
  );
};

export default Workouts;
