"use client";
import { useEffect } from "react";

const RootError = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-red-500">
          {error.message || "Something went wrong..."}
        </h2>
        <button
          onClick={() => reset()}
          className="py-2 px-3 border border-green-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RootError;
