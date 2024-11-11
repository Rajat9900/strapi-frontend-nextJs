"use client"
import React, { useEffect, useState } from 'react'
import MarkdownHTML from '@/app/components/MarkdownHTML'
import { use } from 'react'

export default  function Page({ params }) {
    const { slug } =  params;
    const [response, setBlog] = useState(null);

    const fetchData = async () => {
        const data = await fetch(
            `http://localhost:1337/api/articles?sort[0]=title:asc&filters[slug][$eq]=${slug}&status=published&locale[0]=en&populate=*`,
            { cache: 'no-store' }
        );
        const response = await data.json();
        console.log(response, "response of api 2");
        setBlog(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Blog Title: {response && response.data[0].title}
                </h1>
                <p className="text-gray-500 mb-8">
                    Published on{" "}
                    <span className="text-gray-700 font-medium">
                        October 25, 2023
                    </span>{" "}
                    by{" "}
                    <span className="text-gray-700 font-medium">{response && response.data[0].author.name}</span>
                </p>

                <div className="prose prose-lg text-gray-700 mb-8">
                    {response &&
                        response.data[0].blocks
                            .filter((item) =>
                                item["__component"] === "shared.rich-text"
                                    ? true
                                    : false
                            )
                            .map((item) => (
                                <div key={item.id}>
                                    <MarkdownHTML markdown={item.body} />
                                </div>
                            ))}
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Related Posts
                    </h2>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="text-blue-500 hover:underline">
                                How to Style a Blog Page with Tailwind CSS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:underline">
                                Top 10 CSS Libraries for React Developers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:underline">
                                Building a Responsive Navbar with Tailwind
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

  
