import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        <ul className="flex space-x-8 text-gray-300 font-medium">
          <li className="hover:text-white transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

