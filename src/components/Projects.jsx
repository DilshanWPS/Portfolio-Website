import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const allProjects = [
  {
    title: "Weather App",
    description: "A web app to find the real time weather situation.",
    tech: "Html, Css, JavaScript",
    github: "https://github.com/DilshanWPS/Weather_App",
    image: "./project1.png",
    featured: true,
  },
 
  {
    title: "UI test automation(Forked)",
    description: "",
    tech: "python",
    github: "https://github.com/DilshanWPS/ui-test-automation",
    image: "./project2.png",
    featured: false,
  },

   {
    title: "Portfolio Website",
    description: "This personal portfolio site.",
    tech: "React, Vite, Tailwind CSS",
    github: "https://github.com/your/portfolio",
    image: "./project3.png",
    featured: true,
  }
];

const Projects = () => {
  const [tab, setTab] = useState("all");

  const filteredProjects =
    tab === "featured"
      ? allProjects.filter((p) => p.featured)
      : allProjects;

  return (
    <section
      id="projects"
      className="bg-[#eaf6fb] py-20 px-4"
    >

      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-extrabold text-black text-center mb-6">
         My Projects
      </h2>
        <p className="text-lg text-gray-600 mb-6">
          A collection of projects that showcase my skills and passion for creating innovative digital solutions.
        </p>
        <a
          href="https://github.com/DilshanWPS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition mb-2"
        >
          <FaGithub className="text-xl" />
          View on GitHub
        </a>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-white rounded-lg shadow flex">
          <button
            onClick={() => setTab("all")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              tab === "all"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Projects ({allProjects.length})
          </button>
          <button
            onClick={() => setTab("featured")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              tab === "featured"
                ? "bg-blue-600 text-white shadow"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Featured ({allProjects.filter((p) => p.featured).length})
          </button>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center">
        {filteredProjects.map((proj, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden relative flex flex-col"
          >
            <div className="relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              {proj.featured && (
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Featured
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
              <p className="text-gray-600 mb-2 flex-1">{proj.description}</p>
              <p className="text-sm text-gray-400 mb-4">Tech: {proj.tech}</p>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto bg-blue-50 text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-100 transition"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
