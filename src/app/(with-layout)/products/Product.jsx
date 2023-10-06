import Link from "next/link";

const Product = ({ product }) => {
  const { id, name } = product;
  return (
    <div className="border border-green-500 py-2 px-2 ">
      <Link href={`/products/${id}`}><h2>{name}</h2></Link>
    </div>
  );
};

export default Product;
