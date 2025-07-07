import React from 'react';

// Sample data for published research
const researchPublications = [
  {
    id: 1,
    title:
      "Integrating diverse corpora for training an endangered language machine translation system",
    authors:
      "Hunter Scheppat, Joshua K. Hartshorne, Dylan Leddy, Éric Le Ferrand, Emily Prud'hommeaux",
    journal:
      "Workshop: ComputEL 8 - The Use of Computational Methods in the Study of Endangered Languages",
    year: "2025",
    description:
      "Machine translation (MT) can support endangered language documentation and usage, but most lack sufficient parallel corpora for training effective models. This study repurposes diverse data sources to train MT systems for Amis, an Indigenous language of Taiwan, and supplements limited Amis-English data by generating synthetic translations from an Amis-Mandarin corpus. Results show that synthetic data improves translation to English but not from English, and no single MT system consistently outperforms the other, emphasizing the need to experiment with multiple training approaches for optimal performance.",
    link: "https://computel-workshop.org/wp-content/uploads/2025/05/CEL-8_Proceedings.pdf",
  },
  {
    id: 2,
    title: "Something Cool in 2025",
    authors: "Hunter Scheppat, Awesome Team",
    journal: "Don't Know Yet",
    year: "2025",
    description:
      "This is a placeholder description for a future research paper (hopefully) It will be updated with the actual description once the paper is published.",
    link: "https://example.com/coming-soon",
  },
  // Add more research items as needed
];

// Sample data for research interests
const researchInterests = [
  "Machine Translation",
  "Experiments on Low Resource Languages",
  "Natural Language Processing",
  "Interactive Machine Learning Systems",
  "General NLP Applications",
];

const Research = () => {
  return (
    <div className="min-h-screen bg-opacity-0 text-white">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-10">
          My Research
        </h1>

        {/* Research Interests and Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-black bg-opacity-60 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
              Research Interests
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              {researchInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </section>

          <section className="bg-black bg-opacity-60 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
              Overview
            </h2>
            <p className="text-lg">
              I'm passionate about machine translation for low resource
              languages, with a specific focus on the Formosan language family.
              I experiment with various methods to enhance machine translation
              performance by leveraging data augmentation, pivot languages, and
              state-of-the-art open source libraries like mBART, NLLB, OpenNMT,
              and Fairseq.
            </p>
          </section>
        </div>

        {/* Published Research Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
            Published Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchPublications.map((paper) => (
              <div
                key={paper.id}
                className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-2">{paper.title}</h3>
                <p className="text-sm italic mb-2">{paper.authors}</p>
                <p className="text-sm mb-2">
                  {paper.journal}, {paper.year}
                </p>
                <p className="mb-4">{paper.description}</p>
                {paper.id === 1 ? (
                  <div className="flex flex-wrap gap-3 mt-2">
                    <a
                      href="https://ufl.zoom.us/rec/play/7NoaD3Pjkyw1CoIj9roJ0IIflzVe6VQ-llA7aovSK8bVbbbqnQALMXoOGAuFGXqTDWw2LjEpSG0DffzL.1gg9eoxLXaklyZEC?startTime=1741230485000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                      tabIndex={0}
                    >
                      Watch Presentation
                    </a>
                    <a
                      href="https://computel-workshop.org/wp-content/uploads/2025/05/CEL-8_Proceedings.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
                      tabIndex={0}
                    >
                      View Paper
                    </a>
                  </div>
                ) : (
                  <div className="mt-2">
                    <span className="inline-block px-4 py-2 bg-gray-600 text-white rounded cursor-default">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;
