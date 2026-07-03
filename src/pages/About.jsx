import React from "react";
import { Link } from "react-router-dom";
import {
  HiShieldCheck,
  HiLightBulb,
  HiGlobeAlt,
  HiUserGroup,
} from "react-icons/hi2";

function AboutUs() {
  return (
    <main className="font-sans min-h-screen bg-sky-50">
      <section className="relative bg-gradient-to-b from-sky-50 to-white px-6 pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 "
          style={{
            backgroundImage:
              "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white text-sky-700 text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-sm mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            About <span className="text-sky-600">WorkWise</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            We connect talented individuals with meaningful opportunities,
            making job searching accessible, transparent, and rewarding for
            everyone.
          </p>
        </div>
      </section>

      <section className="px-6 -mt-10 relative z-10">
        <div className="max-w-5xl mx-auto bg-sky-50 border border-slate-200 rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
          <div className="px-6 py-8 text-center">
            <p className="text-3xl font-extrabold text-sky-600 mb-1">1,200+</p>
            <p className="text-sm text-slate-500 font-medium">
              Active Job Listings
            </p>
          </div>

          <div className="px-6 py-8 text-center">
            <p className="text-3xl font-extrabold text-sky-600 mb-1">300+</p>
            <p className="text-sm text-slate-500 font-medium">
              Companies Hiring
            </p>
          </div>

          <div className="px-6 py-8 text-center">
            <p className="text-3xl font-extrabold text-sky-600 mb-1">10K+</p>
            <p className="text-sm text-slate-500 font-medium">
              Job Seekers Helped
            </p>
          </div>

          <div className="px-6 py-8 text-center">
            <p className="text-3xl font-extrabold text-sky-600 mb-1">15+</p>
            <p className="text-sm text-slate-500 font-medium">
              Countries Reached
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-sky-600/10 rounded-3xl -rotate-2" />
            <img
              src="/community.jpg"
              alt="Team working together"
              className="relative rounded-2xl shadow-xl w-full max-w-lg object-cover"
            />
          </div>

          <div>
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-wide mb-3 block">
              Our Mission
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
              Building a fairer path to work
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              The job search process is often slow, opaque, and frustrating
              for both candidates and employers. FindJob exists to close that
              gap with a platform that's fast, honest, and genuinely useful.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you're hiring for your first role or your fiftieth, we're
              built to make the process feel less like a maze and more like a
              conversation.
            </p>
          </div>
        </div>
      </section>
{/* Core values */}
<section className="bg-sky-50 px-6 py-24">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <span className="text-sky-600 font-semibold text-xs uppercase tracking-widest mb-3 block">
        What We Stand For
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
        Our Core Values
      </h2>
      <p className="text-slate-500 max-w-2xl mx-auto text-lg">
        The principles that guide every decision we make as a platform.
      </p>
    </div>

    {/* Values grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Integrity */}
      <div className="group bg-white border border-slate-200 rounded-2xl shadow-sm p-7 hover:shadow-xl hover:-translate-y-1.5 hover:border-sky-200 transition-all duration-300">
        <div className="w-13 h-13 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
          <HiShieldCheck className="text-2xl" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2.5">Integrity</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          We prioritize honesty and fairness in every interaction, ensuring trust between job seekers and employers.
        </p>
      </div>

      {/* Innovation */}
      <div className="group bg-white border border-slate-200 rounded-2xl shadow-sm p-7 hover:shadow-xl hover:-translate-y-1.5 hover:border-sky-200 transition-all duration-300">
        <div className="w-13 h-13 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
          <HiLightBulb className="text-2xl" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2.5">Innovation</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          We continuously improve our platform to meet the evolving needs of the workforce and hiring organizations.
        </p>
      </div>

      {/* Accessibility */}
      <div className="group bg-white border border-slate-200 rounded-2xl shadow-sm p-7 hover:shadow-xl hover:-translate-y-1.5 hover:border-sky-200 transition-all duration-300">
        <div className="w-13 h-13 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
          <HiGlobeAlt className="text-2xl" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2.5">Accessibility</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          We believe everyone deserves equal access to opportunities, regardless of background or location.
        </p>
      </div>

      {/* Community */}
      <div className="group bg-white border border-slate-200 rounded-2xl shadow-sm p-7 hover:shadow-xl hover:-translate-y-1.5 hover:border-sky-200 transition-all duration-300">
        <div className="w-13 h-13 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
          <HiUserGroup className="text-2xl" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2.5">Community</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          We foster connections that go beyond jobs, building networks that support long-term success.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
<section className="px-6 py-12">
  <div className="max-w-4xl mx-auto bg-sky-600 rounded-2xl px-8 py-10 text-center shadow-lg">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
      Ready to find your next role?
    </h2>
    <p className="text-sky-100 mb-6 max-w-xl mx-auto">
      Browse thousands of opportunities tailored to your skills and start
      your next chapter today.
    </p>
    <Link
      to="/"
      className="inline-flex items-center justify-center bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
    >
      Browse Jobs
    </Link>
  </div>
</section>

    </main>
  );
}

export default AboutUs;
