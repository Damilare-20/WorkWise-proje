import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { GiCheckMark } from "react-icons/gi";

const MAX_PAGES = 10;

function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const effectiveLastPage = Math.min(lastPage, MAX_PAGES);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonfakery.com/jobs/paginated?page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.data || []);
        setLastPage(data.last_page || 1);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
        setLoading(false);
      });
  }, [currentPage]);

  const handleSearch = () => {
    setSearchTerm(searchInput.trim());
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const matchesSearch = (job, term) => {
    const haystack = [
      job.job_title,
      job.title,
      job.company_name,
      job.company,
      job.location,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(term.toLowerCase());
  };

  const isSearching = searchTerm.length > 0;
  const displayedJobs = isSearching
    ? jobs.filter((job) => matchesSearch(job, searchTerm))
    : jobs;

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= effectiveLastPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <>
      <section className="relative bg-sky-50 px-8 py-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white text-sky-700 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              New jobs added daily
            </span>

            <h1 className="text-5xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Find Your Next <span className="text-sky-600">Work Career</span>{" "}
              Anywhere
            </h1>

            <p className="text-slate-600 text-lg mb-8 max-w-md leading-relaxed">
              Discover work-focused job opportunities tailored to your skills,
              wherever you are in the world.
            </p>

            <div className="bg-white rounded-2xl shadow-md p-2 flex flex-col sm:flex-row items-stretch gap-2 max-w-lg">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                id="search-bar"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search jobs, e.g. Machine Learning Engineer"
                className="flex-1 px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                onClick={handleSearch}
                className="bg-sky-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-sky-700 transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-sky-600/10 rounded-3xl rotate-3" />
            <img
              src="/hero-photo.jpg"
              alt="Professional working on laptop"
              className="relative rounded-2xl shadow-xl w-full max-w-md object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 font-bold text-sm">
                <GiCheckMark />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Verified Companies
                </p>
                <p className="text-xs text-slate-400">Only trusted employers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="featured-jobs" className="bg-sky-100 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-sky-600 mb-2">
                {isSearching ? "Search Results" : "Browse Openings"}
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                {isSearching ? `Results for "${searchTerm}"` : "Featured Jobs"}
              </h2>
            </div>

            {isSearching && (
              <button
                onClick={handleClearSearch}
                className="self-start md:self-auto text-sm font-medium text-sky-600 hover:text-sky-700"
              >
                Clear search
              </button>
            )}
          </div>

          {loading ? (
            <p className="text-slate-500">Loading jobs...</p>
          ) : displayedJobs.length === 0 ? (
            <p className="text-slate-500">
              No jobs found matching your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {displayedJobs.map((job, index) => (
                <JobCard key={job.id || index} job={job} />
              ))}
            </div>
          )}

          {!isSearching && !loading && (
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-400 text-slate-500 hover:bg-sky-50 hover:text-sky-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <HiChevronLeft />
              </button>

              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full border border-slate-400 text-slate-900 hover:bg-sky-50 hover:text-sky-600 ${
                    page === currentPage ? "bg-sky-200 font-bold" : ""
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(effectiveLastPage, p + 1))
                }
                disabled={currentPage === effectiveLastPage}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-400 text-slate-500 hover:bg-sky-50 hover:text-sky-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <HiChevronRight />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
