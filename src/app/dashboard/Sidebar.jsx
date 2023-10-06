import NavLink from "@/components/Navbar/NavLink";
import Link from "next/link";
const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/dashboard/allProducts",
    title: "All Products",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <ul className="">
        {navLinks.map(({ path, title }) => (
          <li className="my-3" key={path}>
            <NavLink
              exact
              activeClassName="text-green-500 font-semibold"
              className="transition border-b-2 border-transparent hover:border-green-500 duration-500 ease-in-out"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
