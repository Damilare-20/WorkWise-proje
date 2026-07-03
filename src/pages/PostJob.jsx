import { useState } from "react"

export default function PostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: ""
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // For now we just show an alert. Later you can connect to an API.
    alert(`Job posted successfully!\n\n${JSON.stringify(form, null, 2)}`)
    setForm({ title: "", company: "", location: "", description: "" })
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Job Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. AI Engineer"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="e.g. TechCorp"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Remote"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Job Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the role and responsibilities..."
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500 h-32"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Submit Job
        </button>
      </form>
    </div>
  )
}
