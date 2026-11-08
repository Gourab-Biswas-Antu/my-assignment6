import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="font-display text-8xl font-bold text-primary">404</h1>
      <h2 className="font-display text-2xl uppercase">Page not found</h2>
      <p className="text-sm text-base-content/70">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="btn btn-primary btn-sm">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
