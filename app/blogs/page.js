"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blogs = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await fetch("http://localhost:1337/api/blog-apis?populate=media", { cache: 'no-store' });
      const response = await data.json();
      setArticles(response.data);
    };
    
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              <Link href={`/blogpost/${article.slug}`}>{article.title}</Link>
            </h2>
            <p className="text-gray-700 mb-4">{article.description}</p>
            {article.media && article.media.formats && article.media.formats.medium && (
              <Image
                src={`http://localhost:1337${article.media.formats.medium.url}`}
                alt={article.media.alternativeText || article.title}
                width={article.media.formats.medium.width}
                height={article.media.formats.medium.height}
                className="rounded-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

