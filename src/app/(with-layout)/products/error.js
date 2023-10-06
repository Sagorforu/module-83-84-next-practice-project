"use client";
import { useEffect } from "react";

const ProductError = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
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
  );
};

export default ProductError;
