interface ILoaderProps {
  text?: string;
}

const Loader = ({ text = "Loading workouts…" }: ILoaderProps) => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-sm text-base-content/70">{text}</p>
    </div>
  );
};

export default Loader;
