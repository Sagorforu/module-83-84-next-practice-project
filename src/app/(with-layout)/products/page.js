import getAllProducts from "@/utils/getAllProducts";
import Product from "./Product";

const ProductsPage = async ({searchParams}) => {
  const products = await getAllProducts(searchParams.categoryId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 mx-2">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default ProductsPage;
