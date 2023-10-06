const ManageSingleProduct = ({ product, openModal, handleDelete }) => {
  const { name, price } = product;

  const handleAdd =() => {
     alert("Method not applied. Please don't try to add product.")
  }

  return (
    <tr className="text-center w-full">
      <td className="border border-slate-400 p-2">{name}</td>
      <td className="border border-slate-400">$ {price}</td>
      <td className="border border-slate-400">
        <button onClick={()=>openModal(product)} className="bg-green-500 text-white py-2 px-3 rounded-md">
          Update
        </button>
      </td>
      <td className="border border-slate-400">
        <button onClick={() => handleDelete(product?.id)} className="bg-red-500 text-white py-2 px-3 rounded-md">
          Delete
        </button>
      </td>
      <td className="border border-slate-400">
        <button onClick={() => handleAdd()} className="bg-blue-500 cursor-not-allowed text-white py-2 px-3 rounded-md">
          Add
        </button>
      </td>
    </tr>
  );
};

export default ManageSingleProduct;
