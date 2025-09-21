import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function About() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("mariam.mahmoud2811@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center px-6">
      {/* Header */}
      <div className="w-full max-w-5xl flex justify-between items-center py-6">
        <Link to="/" className="logo text-xl font-bold">
          Mariam Mahmoud
        </Link>
        <Link to="/" className="hover:underline transition">
          Work
        </Link>
      </div>

      {/* Intro */}
      <div className="grid md:grid-cols-1 gap-10 items-start mb-16">
        <div className="about text-left space-y-4">
          <h2 className="text-2xl font-semibold">
            Software Engineer and Flutter Developer passionate about creating intuitive, reliable, and impactful mobile solutions.
          </h2>
          <p className="text-gray-700">
            I’m a Flutter Developer with a Bachelor’s degree in Systems and Biomedical Engineering 
            from Cairo University (July 2023, GPA 3.5). With hands-on experience in building and 
            deploying mobile applications, I specialize in creating user-friendly, high-performance 
            apps that integrate seamlessly with hardware, cloud services, and real-time data systems.
          </p>
          <p className="text-gray-700">
            Since August 2023, I’ve been working full-time at EOIP (Engineering Office for Integrated
            Project), where I’ve developed multiple end-to-end mobile solutions using Flutter and Dart.
            My projects range from smart utility monitoring apps (integrating BLE, MQTT, and secure 
            storage) to real-time lighting control systems and transformer monitoring dashboards. 
            I have consistently tackled critical challenges such as optimizing communication with 
            hardware, ensuring secure transactions, and implementing robust state management.
          </p>
          <p className="text-gray-700">
            Beyond professional work, I’ve also built personal projects that highlight my versatility, 
            including a calorie-tracking food ordering app, and hands-on experience in software testing 
            (manual and automated with Selenium, Java, and Cucumber).
          </p>
          <p className="text-gray-700">
            My technical toolkit includes Flutter, Dart, Firebase, REST APIs, SQL, MQTT, Java, Selenium, 
            and modern testing frameworks. I thrive in dynamic environments where I can bridge the gap 
            between user needs and technical execution, continuously delivering solutions that are both 
            impactful and reliable.
          </p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="about space-y-8">
        <h4 className="text-xl font-semibold">Work Experiences</h4>
        <div className="space-y-4">
          {[
            { title: "Flutter Developer", entity: "Engineering Office for Integrated Projects — EOIP", years: "2023 - Present" },
          ].map((job, i) => (
            <div key={i} className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium">{job.title}</p>
                <p className="text-gray-600">{job.entity}</p>
              </div>
              <p className="text-sm text-gray-500">{job.years}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <h4 className="text-xl font-semibold">Education</h4>
        <div>
          <p className="font-medium">Bachelor of Engineering</p>
          <p className="text-gray-600">
            Systems and Biomedical Engineering — Faculty of Engineering, Cairo University
          </p>
          <p className="text-sm text-gray-500">2018 – 2023</p>
        </div>

        {/* Disciplines */}
        <h4 className="text-xl font-semibold">Disciplines</h4>
        <div className="grid md:grid-cols-2 gap-2 text-gray-700">
          <p>Mobile Application Development (Flutter & Dart)</p>
          <p>Real-time Data Visualization & Hardware Communication</p>
          <p>Backend Integration & RESTful APIs</p>
          <p>State Management</p>
          <p>Firebase Authentication & Cloud Messaging</p>
          <p>Database Management (SQL, Firebase, Local Storage)</p>
          <p>Testing & Quality Assurance (Manual & Automation)</p>
        </div>

        {/* Contact */}
        <h4 className="text-xl font-semibold">Contact</h4>
        <p className="text-gray-700">
          Feel free to reach out for projects, collaborations, or just to say hello! Currently
          seeking new opportunities.
        </p>
        <div className="flex gap-6 mt-4">
          <button
            onClick={handleCopy}
            className="text-blue-600 hover:underline"
          >
            {copied ? "Email Copied" : "mariam.mahmoud2811@gmail.com"}
          </button>
          <a
            href="https://www.linkedin.com/in/mariam-mahmoud-50721b1b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Linkedin
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-16">
        © Mariam Mahmoud {new Date().getFullYear()}
      </footer>
    </div>
  )
}
