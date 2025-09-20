import { useParams, Link } from "react-router-dom"
import projects from "../data/projects"


export default function Project() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/" className="text-blue-600 hover:underline mt-4 block">
          Back to all projects
        </Link>
      </div>
    )
  }

  return (
    <div className="work-page slide delay01 px-6 max-w-5xl mx-auto mt-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <Link to="/" className="logo text-xl font-bold hover:underline">
          Mariam Mahmoud
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </header>

      {/* Content */}
      <div className="work-page-content space-y-6">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <h3 className="text-lg text-gray-700">{project.description}</h3>

        {project.details.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {/* Links */}
        <div className="space-x-4">
          {project.links?.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Media */}
      <div className="mt-12 space-y-8">
        {project.video && (
          <div className="video-iphone relative w-full max-w-sm mx-auto">
            <div className="video-iphone-inner relative">
              <video
                poster={project.video.poster}
                preload="none"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl shadow"
              >
                <source src={project.video.src} type="video/mp4" />
              </video>
              <div className="device-iphone12 absolute inset-0 border-4 rounded-xl pointer-events-none"></div>
            </div>
          </div>
        )}

        {project.images?.map((img) => (
          <img
            key={img}
            src={`/img/${img}`}
            alt={img}
            className="work-page-image rounded-lg shadow"
          />
        ))}
      </div>

      {/* Back link */}
      <div className="back-to-projects mt-12 text-center">
        <Link to="/" className="text-blue-600 hover:underline">
          Back to all projects
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500">
        © Mariam Mahmoud {new Date().getFullYear()}
      </footer>
    </div>
  )
}
