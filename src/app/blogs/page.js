import loadBlogData from "@/utils/loadBlogData";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Blogs | Next Hero",
};

// const blogs = [
//   {
//     id: 1,
//     year: 2023,
//     title: "Title 1",
//   },
//   {
//     id: 2,
//     year: 2022,
//     title: "Title 2",
//   },
//   {
//     id: 3,
//     year: 2021,
//     title: "Title 3",
//   },
//   {
//     id: 4,
//     year: 2020,
//     title: "Title 4",
//   },
// ];

const Blogs = async () => {
  // const router = useRouter();
  const blogs = await loadBlogData();

  return (
    <div className="mx-auto container">
      {blogs.map(({ id, body, title }) => (
        <div key={id} className=" border-2 border-green-500 p-2 my-2">
          <h2 className="text-2xl">{title}</h2>
          <p>{body}</p>
          <Link className="inline-block mt-2" href={`/blogs/${id}`}>
            <button className="bg-green-400 px-2 py-1">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
