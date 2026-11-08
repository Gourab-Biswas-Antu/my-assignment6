import Banner from "@/components/homepage/Banner";
import Workouts from "@/components/homepage/Workouts";

const page = () => {
  return (
    <div className="space-y-12">
      <Banner />
      <Workouts />
    </div>
  );
};

export default page;
