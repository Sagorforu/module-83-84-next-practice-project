import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container mx-auto flex gap-10">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashboardLayout;
