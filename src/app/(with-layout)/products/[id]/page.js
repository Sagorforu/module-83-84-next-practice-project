import getSingleProduct from "@/utils/getSingleProduct";

const singleProductPage = async ({ params }) => {
  const { name, price, features } = await getSingleProduct(params.id);
  return (
    <div className="mx-2 my-2 text-gray-700">
      <h2>Name: {name}</h2>
      <h2> Price: ${price}</h2>
      <h2>Product Features:</h2>
      {features.map((feature, index) => (
        <div className="mx-3">
          <ul key={index}>
            {" "}
            {index + 1}. {feature}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default singleProductPage;
