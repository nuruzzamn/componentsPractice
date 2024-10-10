import React, { useState } from "react";

const NewsItemView = ({ news }) => {
  console.log("news item", news);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Split the description into words
  const words = news.summary.split(" ");
  console.log("list item", words);

  // Limit to the first 100 words
  const truncatedDescription = words.slice(0, 20).join(" ");
  const isTruncated = words.length > 20;
  return (
    <div className="flex flex-row justify-center mb-8 p-6 bg-gray-100 shadow-lg rounded-lg w-10/12 basis-2/4">
      {/* Left side - content */}
      <div className="w-full md:w-1/2 pr-6 ">
        <h2 className="text-2xl font-bold text-gray-800">{news.title}</h2>
        <p className="text-gray-600 text-sm mt-2">
          {news.date} | By {news.author}
        </p>
        <p className="text-gray-500 mt-4">
          {showFullDescription ? news.summary : <>{truncatedDescription}...</>}
        </p>
        <a
          href={news.url}
          className="text-blue-500 mt-4 inline-block hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read full article
        </a>
      </div>

      {/* Right side - image */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={news.image}
          alt={news.title}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      </div>
    </div>
  );
};

export default NewsItemView;
