import React from "react"
import { Link, useLocation } from "react-router-dom"
import projects from "../data/projects"

export default function Home() {
  const location = useLocation()

  return (
    <div className="flex flex-col items-center px-6">
      {/* Inline Navbar */}
      <div className="w-full max-w-5xl flex justify-between items-center py-6">
        <Link to="/" className="text-xl font-bold">
          Mariam Mahmoud
        </Link>
        {location.pathname === "/" ? (
          <Link to="/about" className="hover:underline transition">
            About
          </Link>
        ) : (
          <Link to="/" className="hover:underline transition">
            Home
          </Link>
        )}
      </div>

      {/* Hero */}
      <header className="max-w-3xl text-center mt-10">
        <h1 className="text-4xl font-bold">
          Flutter Developer · Software Tester
        </h1>
      </header>

      {/* Projects Grid: 2 columns with staggered layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl w-full">
        <div className="space-y-8">
          {projects
            .filter((_, index) => index % 2 === 0)
            .map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="w-full overflow-hidden work-item">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <div className="text-gray-600">{p.description}</div>
                </div>
              </Link>
            ))}
        </div>
        <div className="space-y-8 mt-16">
          {projects
            .filter((_, index) => index % 2 === 1)
            .map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="w-full overflow-hidden work-item">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <div className="text-gray-600">{p.description}</div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 mb-10 text-center">
        <p className="text-gray-600">Get in touch:</p>
        <a
          href="mailto:mariam.mahmoud2811@gmail.com"
          className="text-blue-600 font-medium hover:underline"
        >
          mariam.mahmoud2811@gmail.com
        </a>
        <p className="text-sm text-gray-400 mt-4">
          © {new Date().getFullYear()} Mariam Mahmoud
        </p>
      </footer>
    </div>
  )
}
