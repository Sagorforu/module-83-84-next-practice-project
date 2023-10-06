import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <footer>This is a footer</footer>
    </div>
  );
};

export default WithLayout;
