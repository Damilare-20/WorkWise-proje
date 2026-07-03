import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CiDollar,
  CiCalendar,
  CiLocationOn,
  CiAlarmOn,
  CiPhone,
  CiUser,
  CiBoxList,
} from "react-icons/ci";

function InfoRow({ icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-sky-600 text-xl">{icon}</div>
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">
          {label}
        </p>
        <p className="text-sm text-slate-700 font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString; // show raw string if it can't be parsed
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatNaira(value) {
  if (value === undefined || value === null) return null;
  return `₦${Number(value).toLocaleString()}`;
}

function parseQualifications(raw) {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function JobDetails() {
  const location = useLocation();
  const job = location.state?.job;

  if (!job) {
    return (
      <main className="font-sans min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <p className="text-slate-700 font-medium mb-2">Job not found</p>
          <p className="text-slate-500 text-sm mb-6">
            This usually happens after a refresh. Head back and click
            "View Details" on a job again.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-sky-600 font-medium text-sm hover:text-sky-700"
          >
            Back to jobs
          </Link>
        </div>
      </main>
    );
  }

  const salaryFrom = formatNaira(job.salary_from);
  const salaryTo = formatNaira(job.salary_to);
  const salaryRange =
    salaryFrom && salaryTo
      ? `${salaryFrom} - ${salaryTo}`
      : salaryFrom || salaryTo || null;

  const qualifications = parseQualifications(job.qualifications);
  const postedDate = formatDate(job.created_at);
  const deadline = formatDate(job.application_deadline);

  return (
    <main className="font-sans min-h-screen bg-slate-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-sky-600 transition-colors mb-8"
        >
          ← Back to jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {job.employment_type && (
                <span className="inline-block bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                  {job.employment_type}
                </span>
              )}
              {job.job_category && (
                <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                  {job.job_category}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-2 leading-tight">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-2 text-slate-500 text-sm mb-8">
              <span className="font-medium text-slate-700">
                {job.company}
              </span>
              {job.location && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <CiLocationOn className="text-base" />
                    {job.location}
                  </span>
                </>
              )}
            </div>

            <div className="border-t border-slate-100 pt-6">
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                About this role
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line mb-8">
                {job.description || "No description available."}
              </p>

              {qualifications.length > 0 && (
                <div className="border-t border-slate-100 pt-6">
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">
                    <CiBoxList className="text-lg" />
                    Qualifications
                  </h2>
                  <ul className="space-y-2">
                    {qualifications.map((q, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-600 text-sm"
                      >
                        <span className="text-sky-600 mt-1">•</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 lg:sticky lg:top-8 space-y-5">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
              Job overview
            </p>

            <InfoRow icon={<CiDollar />} label="Salary" value={salaryRange} />
            <InfoRow icon={<CiCalendar />} label="Posted" value={postedDate} />
            <InfoRow icon={<CiAlarmOn />} label="Apply by" value={deadline} />
            <InfoRow
              icon={<CiUser />}
              label="Openings"
              value={job.number_of_opening}
            />
            <InfoRow icon={<CiPhone />} label="Contact" value={job.contact} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default JobDetails;