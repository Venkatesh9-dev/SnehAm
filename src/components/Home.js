import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
          You are not alone, we are with you.
        </h1>
        <h2 className="text-2xl md:text-3xl text-purple-600 font-semibold mb-4">
          Feeling Depressed..?
        </h2>
        <p className="text-lg text-purple-800 mb-8 leading-relaxed">
          Let's resolve this tough phase by speaking out our hearts.<br />
          Depression ain't gonna stop us. <br /><br />
          "If you've come here, I know you're desperately trying to come out of this phase <br/> and just by being here, you've already taken your first step towards healing."
        </p>

        <div className="space-x-4">
          <Link
            to="/get-started" // Use Link instead of anchor tag
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about" // Use Link instead of anchor tag
            className="border border-purple-700 text-purple-700 hover:bg-purple-100 font-semibold py-2 px-6 rounded-xl shadow-sm transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
