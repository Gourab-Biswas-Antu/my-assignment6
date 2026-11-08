import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveForLaterButton from "@/components/workoutDetails/SaveForLaterButton";
import { IWorkout } from "@/components/types/workouts.type";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

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

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkouts();

  const workout = workoutsData.find(
    (item: IWorkout) => String(item.id) === String(id),
  );

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: workout.rating },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Image
        src={workout.image}
        alt={workout.name}
        width={800}
        height={800}
        priority
        className="aspect-square w-full rounded-2xl object-cover"
      />

      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="font-display text-3xl uppercase sm:text-4xl">
            {workout.name}
          </h1>

          <p className="text-sm text-base-content/70">{workout.description}</p>

          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="badge badge-primary badge-sm font-semibold"
              >
                {group}
              </span>
            ))}
          </div>
        </div>

        <div className="divide-y divide-base-300 rounded-xl border border-base-300 bg-base-200">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between px-4 py-3 text-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
                {spec.label}
              </span>
              <span>{spec.value}</span>
            </div>
          ))}
        </div>

        <section>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider">
            Instructions
          </h2>

          <ol className="space-y-2 text-sm text-base-content/80">
            {workout.instructions.map((step, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-base-content/50">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <AddToPlanButton workout={workout} />
          <SaveForLaterButton workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
