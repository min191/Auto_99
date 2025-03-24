import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ _id, title, description, body, image }) => {
  const truncateText = (text, maxWords) => {
    const words = text.split(' '); // Tách thành mảng từ
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
  };

  return (
    <Link to={`/blog/${_id}`} className="block">
      <div className="text-start border rounded-2xl shadow-lg bg-white overflow-hidden cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-1 p-4 h-full flex flex-col">
        {/* Phần ảnh */}
        <div className="rounded-xl overflow-hidden h-52 flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Phần nội dung */}
        <div className="text-start mt-3 space-y-2 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-gray-900 line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-900 font-medium line-clamp-2">{description}</p>
            <p className="text-md text-gray-600 line-clamp-3">{truncateText(body, 10)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;