import { IWorkout } from "@/types/workouts.type";
import Image from "next/image";
import Link from "next/link";
import StatsRow from "./StatsRow";

interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-base-300 bg-base-200 transition hover:-translate-y-1 hover:border-primary/60"
    >
      {/* Image */}
      <Image
        src={workout.image}
        alt={workout.name}
        width={800}
        height={600}
        className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      {/* Content */}
      <div className="space-y-2 p-4">
        {/* Muscle groups */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="badge badge-primary badge-sm font-semibold uppercase"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="font-display text-lg uppercase">{workout.name}</h3>

        {/* Equipment */}
        <p className="text-xs text-base-content/60">{workout.equipment}</p>

        {/* Duration, calories, rating */}
        <StatsRow
          duration={workout.duration}
          calories={workout.caloriesBurned}
          rating={workout.rating}
        />
      </div>
    </Link>
  );
};

export default WorkoutCard;
