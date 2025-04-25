import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">SnehAm 💜</div>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link
          to="/signup"
          className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-xl hover:bg-purple-100 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
