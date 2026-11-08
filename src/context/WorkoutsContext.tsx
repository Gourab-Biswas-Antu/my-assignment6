"use client";

import { IWorkout } from "@/types/workouts.type";
import React, { createContext, ReactNode, useEffect, useState } from "react";

// Today's plan can hold at most 5 workouts
export const MAX_PLAN = 5;

const STORAGE_KEY = "fitlog-data";

interface IWorkoutsContext {
  planWorkouts: IWorkout[];
  setPlanWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedWorkouts: IWorkout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  doneIds: number[];
  setDoneIds: React.Dispatch<React.SetStateAction<number[]>>;
  isLoaded: boolean;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  planWorkouts: [],
  setPlanWorkouts: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
  doneIds: [],
  setDoneIds: () => {},
  isLoaded: false,
});

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [planWorkouts, setPlanWorkouts] = useState<IWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. When the app starts, read the saved data from localStorage.
  // localStorage only exists in the browser, so we can't read it while the
  // server renders. That's why we load it here, once, after the first render.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw) {
      try {
        const data = JSON.parse(raw);
        setPlanWorkouts(data.planWorkouts ?? []);
        setSavedWorkouts(data.savedWorkouts ?? []);
        setDoneIds(data.doneIds ?? []);
      } catch (error) {
        console.error("Could not read saved data:", error);
      }
    }

    setIsLoaded(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // 2. Every time something changes, write it back to localStorage
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ planWorkouts, savedWorkouts, doneIds }),
    );
  }, [planWorkouts, savedWorkouts, doneIds, isLoaded]);

  const sharedData = {
    planWorkouts,
    setPlanWorkouts,
    savedWorkouts,
    setSavedWorkouts,
    doneIds,
    setDoneIds,
    isLoaded,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
