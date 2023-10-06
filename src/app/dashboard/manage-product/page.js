import getAllProducts from "@/utils/getAllProducts";
import React from "react";
import ManageProductPage from "./ManageProductPage";

export const metadata = {
  title: "Manage Products | Dashboard | Next Hero",
  description: "Manage Product | Dashboard | Next Hero",
};

const ManageProduct = async () => {
  const products = await getAllProducts();

  return (
    <div className="w-full mt-10">
      <h2 className="font-semibold text-2xl text-center mb-4">Manage Products</h2>
      <ManageProductPage products={products}></ManageProductPage>
    </div>
  );
};

export default ManageProduct;
