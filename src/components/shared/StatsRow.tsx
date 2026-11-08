import { Clock, Flame, Star } from "lucide-react";

interface IStatsRowProps {
  duration: number;
  calories: number;
  rating: number;
}

const StatsRow = ({ duration, calories, rating }: IStatsRowProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-base-content/70">
      <span className="flex items-center gap-1">
        <Clock className="h-3.5 w-3.5 text-primary" /> {duration} min
      </span>

      <span className="flex items-center gap-1">
        <Flame className="h-3.5 w-3.5 text-primary" /> {calories} kcal
      </span>

      <span className="flex items-center gap-1">
        <Star className="h-3.5 w-3.5 text-primary" /> {rating}
      </span>
    </div>
  );
};

export default StatsRow;
