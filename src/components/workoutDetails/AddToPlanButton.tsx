"use client";

import { MAX_PLAN, WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { CalendarPlus, Check } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { planWorkouts, setPlanWorkouts } = useContext(WorkoutsContext);

  const isInPlan = planWorkouts.some((item) => item.id === workout.id);
  const isPlanFull = planWorkouts.length >= MAX_PLAN;

  // The button is disabled when the workout is already added or the plan is full,
  // so this function only runs when adding is allowed.
  const handleAddToPlan = () => {
    setPlanWorkouts([...planWorkouts, workout]);
    toast.success(`"${workout.name}" added to today's plan`);
  };

  let label = "Add to today's plan";
  if (isInPlan) label = "Added to today's plan";
  else if (isPlanFull) label = `Plan is full (${MAX_PLAN}/${MAX_PLAN})`;

  return (
    <button
      className="btn btn-primary btn-sm gap-2"
      onClick={handleAddToPlan}
      disabled={isInPlan || isPlanFull}
    >
      {isInPlan ? (
        <Check className="h-4 w-4" />
      ) : (
        <CalendarPlus className="h-4 w-4" />
      )}
      {label}
    </button>
  );
};

export default AddToPlanButton;
