import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 mt-6 block">Back to Home</Link>
    </div>
  )
}