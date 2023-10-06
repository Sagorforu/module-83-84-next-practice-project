
import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/products",
    title: "Products",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto container">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex justify-center items-center gap-3">
        {navLinks.map(({ path, title }) => (
          <li className="transition border-b-2 border-transparent hover:border-green-500 duration-500 ease-in-out" key={path}>
            <NavLink exact={path === "/"} activeClassName="text-green-500 font-semibold" href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
