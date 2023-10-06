import loadBlogData from "@/utils/loadBlogData";
import singleBlogData from "@/utils/singleBlogData";

export const generateMetadata = async ({ params }) => {
  const blog = await singleBlogData(params.id);
  return {
    title: `${blog.title} | Next Hero`,
    description: `${blog.body}`,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogData();
  return blogs.map((blog) => ({
    id: blog.id.toString()
  }));
};

const SingleBlog = async ({ params }) => {
  const blog = await singleBlogData(params.id);

  return (
    <div className=" border-2 border-green-500 p-2 my-2 mx-auto container">
      <h1 className="text-2xl">
        {blog.id}. {blog.title}
      </h1>
      <p>{blog.body}</p>
    </div>
  );
};

export default SingleBlog;
