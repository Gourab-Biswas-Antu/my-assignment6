"use client";

const GlobalError = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="font-display text-2xl uppercase">Something went wrong</h2>
      <p className="text-sm text-base-content/70">
        We could not load the page. Please try again.
      </p>
      <button onClick={() => reset()} className="btn btn-primary btn-sm">
        Try again
      </button>
    </div>
  );
};

export default GlobalError;
