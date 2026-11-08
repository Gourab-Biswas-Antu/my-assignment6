"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";
import StatsRow from "./StatsRow";

interface IPlanCardProps {
  workout: IWorkout;
  // which tab this card is shown in
  variant: "plan" | "saved";
}

const PlanCard = ({ workout, variant }: IPlanCardProps) => {
  const {
    planWorkouts,
    setPlanWorkouts,
    savedWorkouts,
    setSavedWorkouts,
    doneIds,
    setDoneIds,
  } = useContext(WorkoutsContext);

  const isPlan = variant === "plan";
  const isDone = doneIds.includes(workout.id);

  const handleMarkAsDone = () => {
    setDoneIds([...doneIds, workout.id]);
    toast.success(`"${workout.name}" marked as done`);
  };

  const handleRemove = () => {
    if (isPlan) {
      setPlanWorkouts(planWorkouts.filter((item) => item.id !== workout.id));
      setDoneIds(doneIds.filter((id) => id !== workout.id));
      toast.info("Removed from today's plan");
    } else {
      setSavedWorkouts(savedWorkouts.filter((item) => item.id !== workout.id));
      toast.info("Removed from saved");
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-base-300 bg-base-200 p-3 sm:flex-row sm:items-center ${
        isPlan && isDone ? "opacity-60" : ""
      }`}
    >
      {/* Image + info */}
      <div className="flex flex-1 items-center gap-4">
        <Image
          src={workout.image}
          alt={workout.name}
          width={200}
          height={140}
          className="h-16 w-24 rounded-lg object-cover"
        />

        <div className="space-y-1">
          <h3 className="font-display uppercase">{workout.name}</h3>
          <p className="text-xs text-base-content/60">{workout.equipment}</p>
          <StatsRow
            duration={workout.duration}
            calories={workout.caloriesBurned}
            rating={workout.rating}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="btn btn-outline btn-sm"
        >
          View Details
        </Link>

        {isPlan && (
          <button
            className="btn btn-primary btn-sm gap-1"
            onClick={handleMarkAsDone}
            disabled={isDone}
          >
            <Check className="h-4 w-4" />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          className="btn btn-ghost btn-sm btn-square"
          aria-label="Remove workout"
          onClick={handleRemove}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
