import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}
