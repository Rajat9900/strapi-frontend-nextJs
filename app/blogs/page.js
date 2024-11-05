import React from 'react'
import Link from 'next/link'

const data = await fetch("http://localhost:1337/api/articles?populates=*" , {cache: 'no-store'})
const response = await data.json()
console.log(response , "response of api")
const Blogs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {response && response.data && response.data.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
               <Link href={`/blogpost/${data.slug}`}> {data.title}</Link>
               
                </h2>
            <p className="text-gray-700 text-base">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
