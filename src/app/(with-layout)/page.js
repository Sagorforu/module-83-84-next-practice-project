import Categories from "@/components/Navbar/HomePage/Categories";
import PopularProduct from "@/components/Navbar/HomePage/PopularProduct";
import { Suspense } from "react";

export const revalidate = 0;

const HomePage = () => {
  return (
    <main>
      <h2>Home</h2>
      <Categories></Categories>
      <Suspense fallback={<h2 className="text-center text-2xl font-semibold">Loading...</h2>}>
      <PopularProduct></PopularProduct>
      </Suspense>
    </main>
  );
};

export default HomePage;
