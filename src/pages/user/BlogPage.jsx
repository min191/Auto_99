import React, { useState, useEffect } from "react";
import BlogCard from "../../components/Blog/BlogCard";
import { NEWS_API } from "../../API/NewsAPI";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(NEWS_API);
        const result = await response.json();

        console.log("Dữ liệu API:", result);

        if (result.data && Array.isArray(result.data)) {
          setBlogs(result.data);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-[500px] p-6 flex flex-col bg-gray-50">
      {/* Tiêu đề */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        News & Offers
      </h1>
      {/* Phân trang */}
      {blogs.length > 0 && totalPages > 1 && (
        <div className="m-10 flex justify-center items-center gap-4">
          {/* Nút Previous */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700 hover:shadow-lg"
            }`}
          >
            Previous
          </button>

          {/* Các nút số trang */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
                currentPage === number
                  ? "bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400 hover:shadow-lg"
              }`}
            >
              {number}
            </button>
          ))}

          {/* Nút Next */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700 hover:shadow-lg"
            }`}
          >
            Next
          </button>
        </div>
      )}
      {/* Grid bài báo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-grow">
        {blogs.length > 0 ? (
          currentPosts.map((blog) => (
            <BlogCard
              key={blog._id}
              _id={blog._id}
              title={blog.title}
              description={blog.description}
              body={blog.body}
              image={blog.thumbnail}
            />
          ))
        ) : (
          <div className="min-h-[80vh] col-span-full flex items-center justify-center h-full">
            <svg
              className="animate-spin h-8 w-8 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
