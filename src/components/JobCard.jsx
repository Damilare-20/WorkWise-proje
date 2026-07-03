import React from "react";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";

function JobCard({ job }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
      
      <div className="flex items-center justify-between mb-4">
        <span className="inline-block bg-sky-100 text-sky-600 text-xs font-medium px-3 py-1 rounded-full">
          {job.job_category}
        </span>
        <span className="text-gray-400 text-xs flex items-center text-xs font-medium px-3 py-1  bg-sky-100 rounded-full gap-1">
          <MdDateRange /> {job.application_deadline}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {job.title}
      </h3>

      <p className="text-gray-500 text-sm mb-4">
        {job.company}
      </p>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <span>{job.location}</span>
        {job.job_type && (
          <>
            <span>•</span>
            <span>{job.job_type}</span>
          </>
        )}
      </div>

      <Link
        to={`/jobs/${job.id}`}
        state={{ job }}
        className="inline-flex items-center justify-center gap-1 bg-sky-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-sky-700 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}

export default JobCard;
