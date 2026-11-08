"use client";

import Loader from "@/components/shared/Loader";
import PlanCard from "@/components/shared/PlanCard";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workouts.type";
import Link from "next/link";
import { useContext, useState } from "react";

type TabOption = "plan" | "saved";
type SortOption = "duration" | "calories" | "rating";

const MyPlan = () => {
  const { planWorkouts, savedWorkouts, isLoaded } = useContext(WorkoutsContext);
  const [activeTab, setActiveTab] = useState<TabOption>("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const totalMinutes = planWorkouts.reduce(
    (sum, item) => sum + item.duration,
    0,
  );
  const totalCalories = planWorkouts.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const metrics = [
    { label: "Exercises", value: planWorkouts.length },
    { label: "Minutes", value: totalMinutes },
    { label: "Calories", value: totalCalories },
  ];

  const sortWorkouts = (workouts: IWorkout[]) => {
    const sortedWorkouts = [...workouts];

    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
  };

  const currentList = sortWorkouts(
    activeTab === "plan" ? planWorkouts : savedWorkouts,
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl uppercase">My Plan</h1>
        <p className="text-sm text-base-content/60">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 rounded-2xl border border-base-300 bg-base-200 p-5 sm:p-6">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-xs text-base-content/60">{metric.label}</p>
            <p className="font-display text-3xl font-bold text-primary">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" className="tabs tabs-box">
          <button
            role="tab"
            onClick={() => setActiveTab("plan")}
            className={`tab ${activeTab === "plan" ? "tab-active" : ""}`}
          >
            Today&apos;s Plan
          </button>

          <button
            role="tab"
            onClick={() => setActiveTab("saved")}
            className={`tab ${activeTab === "saved" ? "tab-active" : ""}`}
          >
            Saved
          </button>
        </div>

        <label className="flex items-center gap-2 text-xs text-base-content/60">
          Sort By
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="select select-sm w-32"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {!isLoaded ? (
        <Loader text="Loading workouts…" />
      ) : currentList.length > 0 ? (
        <div className="space-y-3">
          {currentList.map((workout: IWorkout) => {
            return (
              <PlanCard
                key={workout.id}
                workout={workout}
                variant={activeTab}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-base-300 bg-base-200 px-4 py-16 text-center">
          <h3 className="font-display text-xl uppercase">Nothing here yet</h3>
          <p className="text-sm text-base-content/70">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href="/" className="btn btn-primary btn-sm rounded-full">
            Go to workouts
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyPlan;
