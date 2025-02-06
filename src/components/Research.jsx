import React from 'react';

// Sample data for published research
const researchPublications = [
  {
    id: 1,
    title: "Exploring the Frontiers of AI",
    authors: "Hunter Scheppat, Collaborator A",
    journal: "Journal of Innovative Research",
    year: "2023",
    description: "A deep dive into advanced machine learning algorithms and their real-world applications.",
    link: "https://example.com/paper-one",
  },
  {
    id: 2,
    title: "Data Visualization Techniques for Big Data",
    authors: "Hunter Scheppat, Collaborator B",
    journal: "International Journal of Data Science",
    year: "2022",
    description: "An overview of modern data visualization techniques to derive actionable insights from big data.",
    link: "https://example.com/paper-two",
  },
  // Add more research items as needed
];

// Sample data for research interests
const researchInterests = [
  "Artificial Intelligence & Machine Learning",
  "Data Science & Big Data Analytics",
  "Human-Computer Interaction",
  "Software Engineering & Systems Design",
];

const Research = () => {
  return (
    <div className="min-h-screen w-full bg-black bg-opacity-90 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">My Research</h1>

      {/* Research Interests Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4">Research Interests</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          {researchInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>

      {/* Published Research Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Published Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchPublications.map((paper) => (
            <div
              key={paper.id}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{paper.title}</h3>
              <p className="text-sm italic mb-2">
                {paper.authors} — {paper.journal} ({paper.year})
              </p>
              <p className="mb-4">{paper.description}</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;
