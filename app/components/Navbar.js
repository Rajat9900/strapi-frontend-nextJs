import Link from 'next/link';

const Navbar = ({ isAdmin }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/pages/homepage">MyWebsite</Link>
        </div>
        <ul className="flex space-x-8 text-gray-300 font-medium">
          <li className="hover:text-white transition-colors">
            <Link href="/pages/homepage">Home</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link href="/blogs">Blogs</Link>
          </li>
          {isAdmin && (
            <li className="hover:text-white transition-colors">
              <Link href="/admin">Admin Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


