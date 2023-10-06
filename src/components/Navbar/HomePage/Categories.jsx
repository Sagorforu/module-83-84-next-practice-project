import getAllCategories from "@/utils/getAllCategories";
import Category from "./Category";

const Categories = async () => {
  const categories = await getAllCategories();

  return (
    <div>
      <h2>All categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 mx-4">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
