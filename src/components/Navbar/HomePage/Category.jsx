import Link from "next/link";

const Category = ({ category }) => {
  const { id, name } = category;
  return (
    <div className=" border border-green-500 py-2 px-2 shadow-md rounded-md">
      <Link href={`/products?categoryId=${id}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default Category;
