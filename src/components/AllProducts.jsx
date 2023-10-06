"use client";
import Modal from "@/components/Modal";
import db from "@/db.json";
import ManageSingleProduct from "@/app/dashboard/manage-product/ManageSingleProduct";
import { useRef, useState } from "react";
import useProducts from "@/hooks/useProducts";

const AllProducts = () => {
  const { products, isLoading, isValidating, mutate } = useProducts();
  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };
  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const data = {
      name,
      price,
    };
    if (name && price) {
      try {
        const res = await fetch(
          `http://localhost:5000/products/${updateData?.id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await res.json();
        console.log(result);
        form.reset();
        closeModal();
        mutate();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleDelete = async (id) => {
    if (id) {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        });
        const result = await res.json();
        console.log(result);
        mutate();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {isLoading && <h2 className="text-center text-2xl">Loading...</h2>}
      {!isLoading && (
        <table
          className={`border-collapse w-full ${
            isValidating ? "opacity-25" : "opacity-100"
          }`}
        >
          <thead>
            <tr>
              <th className="border border-slate-400">Title</th>
              <th className="border border-slate-400">Price</th>
              <th className="border border-slate-400">Update</th>
              <th className="border border-slate-400">Delete</th>
              <th className="border border-slate-400">Add</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ManageSingleProduct
                key={product.id}
                product={product}
                openModal={openModal}
                handleDelete={handleDelete}
              ></ManageSingleProduct>
            ))}
          </tbody>
        </table>
      )}
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleSubmit={handleSubmit}
      ></Modal>
    </div>
  );
};

export default AllProducts;
