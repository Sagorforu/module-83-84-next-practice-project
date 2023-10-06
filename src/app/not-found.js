import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center text-red-500 ">
      <h1 className="text-3xl">404</h1>
      <h3 className="text-lg">Page not found</h3>
      <Link href={"/"}>
        <button className="bg-red-300 text-3xl px-3 py-2">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
