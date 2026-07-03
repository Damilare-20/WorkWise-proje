import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-sky/50 sticky top-0 z-50 backdrop-blur-md h-20">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          Work<span className="text-sky-600">Wise</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            About
          </Link>

          <Link
            to="/#search-bar"
            className="bg-sky-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-sm"
          >
            Find Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;