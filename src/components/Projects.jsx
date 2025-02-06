import React from 'react';

// Sample project data. Update or expand this as needed.
const projectsData = [
  {
    id: 1,
    title: "Project One",
    technologies: "React, Tailwind CSS, Node.js",
    description: "A brief description of Project One that highlights its key features and functionalities.",
    link: "https://github.com/yourusername/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    technologies: "Python, Django, PostgreSQL",
    description: "A brief description of Project Two focusing on its robust backend and API services.",
    link: "https://github.com/yourusername/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    technologies: "Vue.js, Vuetify, Firebase",
    description: "A brief description of Project Three showcasing its real-time features and user interface.",
    link: "https://github.com/yourusername/project-three",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-transparent text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-white"
          >
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-sm italic mb-4">{project.technologies}</p>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
