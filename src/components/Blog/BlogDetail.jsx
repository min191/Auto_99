import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`https://ngochieuwedding.io.vn/api/minh/news/${id}`);
        const result = await response.json();

        if (result.message === 'Lấy chi tiết tin tức thành công') {
          setBlog(result.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi lấy chi tiết bài viết:', error);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-gray-600 text-xl font-semibold animate-pulse">Đang tải...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-red-500 text-xl font-semibold">Không tìm thấy bài viết!</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-lg rounded-xl my-8">
      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-72 sm:h-96 object-cover rounded-t-xl mb-8 shadow-md"
      />
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
        {blog.title}
      </h1>
      <p className="text-gray-600 text-lg sm:text-xl italic mb-6 font-light">{blog.description}</p>
      <div
        className="prose prose-lg text-gray-800 leading-relaxed mb-8"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
      <div className="flex flex-wrap gap-3 mb-8">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-200 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-gray-500 text-sm text-right space-y-1">
        <p>
          Được đăng bởi:{' '}
          <span className="font-medium text-gray-700">{blog.created_by}</span>
        </p>
        <p>Ngày đăng: {new Date(blog.createdAt).toLocaleDateString('vi-VN')}</p>
      </div>
    </article>
  );
};

export default BlogDetail;