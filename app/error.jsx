"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center">
      <h2>Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-primary-color p-2 text-primary-text-color"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        aria-label="Try again"
      >
        Try again
      </button>
    </div>
  );
}
