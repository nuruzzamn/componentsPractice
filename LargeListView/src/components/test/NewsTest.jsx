import React, { useState } from "react";

const NewsTest = ({ news }) => {
  console.log("news item", news);
  /*
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Split the description into words
  const words = news.summary.split(" ");
  console.log("list item", words);

  // Limit to the first 100 words
  const truncatedDescription = words.slice(0, 20).join(" ");
  const isTruncated = words.length > 20;
  */
  return (
    <div className="bg-gray-100 mt-4 shadow-lg rounded-lg w-3/4 p-6 mb-8 overflow-hidden">
      <div className="float">
        <div className="float-right w-[50%] relative h-[300px] mb-2 ml-6">
          <img
            src={news.image}
            alt={news.title}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{news.title}</h2>
        <p className="text-gray-600 text-sm mt-2">
          {news.date} | By {news.author}
        </p>
        <p className="text-gray-500 mt-4 text-justify">
          {/* {showFullDescription ? news.summary : <>{truncatedDescription}...</>} */}
          {news.summary}
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
      {/* <div className="float-right w-[50%] relative h-[300px]">
        <img
          src={news.image}
          alt={news.title}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      </div> */}
    </div>
  );
};

export default NewsTest;
