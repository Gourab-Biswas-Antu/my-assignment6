"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import { Bookmark, Check } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ workout }: { workout: IWorkout }) => {
  const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutsContext);

  const isSaved = savedWorkouts.some((item) => item.id === workout.id);

  // The button is disabled once the workout is saved
  const handleSaveForLater = () => {
    setSavedWorkouts([...savedWorkouts, workout]);
    toast.success(`"${workout.name}" saved for later`);
  };

  return (
    <button
      className="btn btn-outline btn-sm gap-2"
      onClick={handleSaveForLater}
      disabled={isSaved}
    >
      {isSaved ? (
        <Check className="h-4 w-4" />
      ) : (
        <Bookmark className="h-4 w-4" />
      )}
      {isSaved ? "Saved" : "Save for later"}
    </button>
  );
};

export default SaveForLaterButton;
