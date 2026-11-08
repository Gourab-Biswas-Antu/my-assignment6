import WorkoutCard from "@/components/shared/WorkoutCard";
import { IWorkout } from "@/types/workouts.type";

const BASE_URL =
  process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? "https://api.abcz.workers.dev";

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
      <h2 className="font-display text-2xl uppercase">The Library</h2>
      <p className="mb-6 text-sm text-base-content/60">
        Twelve lifts covering every major muscle group.
      </p>

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
