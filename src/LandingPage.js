import { Link } from 'react-router-dom';

<div className="flex space-x-4 mt-6">
  <Link to="/get-started">
    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
      Get Started
    </button>
  </Link>
  <Link to="/about">
    <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-100 font-bold py-2 px-6 rounded-full">
      Learn More
    </button>
  </Link>
</div>
