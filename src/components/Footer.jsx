import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-14">

          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white">
            Work<span className="text-blue-500">Wise</span>
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              Work career opportunities, anywhere.
            </p>
          </div>

          <div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link to="/saved-jobs" className="hover:text-white transition-colors">Saved Jobs</Link></li>
              <li><Link to="/career-advice" className="hover:text-white transition-colors">Career Advice</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/post-job" className="hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for WorkWise alerts
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} WorkWise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
