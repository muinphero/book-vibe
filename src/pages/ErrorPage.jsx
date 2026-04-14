import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "The page could not be loaded right now. Please try again.";
  let status = "Error";
  let isNotFound = false;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    isNotFound = error.status === 404;
    title = isNotFound ? "Page not found" : error.statusText || "Unexpected Error";
    message = isNotFound
      ? "The page you are looking for may have been moved, renamed, or never existed."
      : typeof error.data === "string"
        ? error.data
        : "The requested page is unavailable right now.";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-cyan-50 px-6 py-14">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

      <section className="card w-full max-w-xl border border-slate-200/80 bg-white/90 shadow-2xl backdrop-blur">
        <div className="card-body gap-6 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.72 3h16.92a2 2 0 0 0 1.72-3l-8.47-14.14a2 2 0 0 0-3.42 0ZM11 9a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0V9Zm1 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {status}
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {title}
              </h1>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            {message}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="btn btn-neutral rounded-xl">
              Go Home
            </Link>
            {isNotFound && (
              <Link to="/books" className="btn btn-primary rounded-xl">
                Browse Books
              </Link>
            )}
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn btn-outline rounded-xl"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
