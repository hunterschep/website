import React from 'react';

// Sample project data with image URLs added. Replace the image URLs with your own images.
const projectsData = [
  {
    id: 1,
    title: "EasyCanvas",
    image: "/projects/easycanvas.png",
    technologies: "React, Tailwind, Python, Firebase, FastAPI, Anthropic API",
    description:
      "A streamlined interface for Canvas LMS that simplifies managing your courses and assignments. Uses real Canvas LMS data from read-only API keys. Provides a more intuitive and user-friendly experience for students and instructors. Leverages Firebase for authentication and FastAPI for serverless functions. Provides custom analytics, notifications, and built in AI features. (WIP)",
    link: "https://github.com/hunterschep/easycanvas",
  },
  {
    id: 2,
    title: "Flock",
    image: "/projects/flock.png",
    technologies: "React, Tailwind, Postgres, Prisma, React-Query",
    description:
      "A student connectivity system developed jointly with @Rafael Singer that currently has 250+ users. Allows for grads and interns to connect. Features Google auth, messaging, and preference management. ", 
    link: "https://github.com/rafaelsinger/flock",
  },
  {
    id: 3,
    title: "College Earnings",
    image: "/projects/college-earnings.png",
    technologies: "Python, Streamlit",
    description:
      "Streamlit dashboard that displays Dept. of Education college data. Users can filter by degree, major, and college to see earnings data. Provides insights into the earning potential of different degrees and majors",
    link: "https://college-earnings.streamlit.app/",
  },
  {
    id: 4,
    title: "AI Chatbot",
    image: "/projects/hai-course.png",
    technologies: "React, Tailwind, FastAPI, OpenAI API",
    description:
      "Interactive AI data visualization chatbot with function calling and data analysis capabilities. Uses OpenAI API for natural language processing and data analysis. Provides a conversational interface for querying data and generating insights.",
    link: "https://hunterschep.github.io/hai-course/",
  },
  {
    id: 5, 
    title: "Interactive Machine Translation",
    image: "/projects/amis-mt.png",
    technologies: "NLLB, Gradio, Python, OpenNMT, Transformers",
    description: 
      "Frontend with interactive demo for ComputEL 2025 research submission. Allows users to input text and see machine translation output. Uses NLLB to allow bidirectional translation between Amis and Mandarin Chinese. Provides a user-friendly interface for exploring the research results.",
    link: "https://huggingface.co/spaces/hunterschep/ami-zh-translation",
  },
  {
    id: 6,
    title: "Air Quality Dashboard",
    image: "/projects/boston-aq.png",
    technologies: "ReactJS, Leaflet, Open-Mateo API ",
    description: "Live air quality dashboard for Boston, MA. Uses the Open-Mateo API to get air quality data. Displays a map of Boston with air quality data for each neighborhood. Allows users to toggle between different air quality metrics and view historical data.",
    link: "https://hunterschep.github.io/chem-final-project/",
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="min-h-screen align-center max-w-8xl bg-transparent text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg border border-white"
          >
            {/* Project Image */}
            <img
              src={process.env.PUBLIC_URL + project.image}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
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
