import React from "react";

// List of photo paths (adjust the paths as needed)
const companies = [
  {
    name: "AI4 Communication Sciences",
    logo: "/companies/ai4commscipng.png",
    link: "https://ai4commsci.github.io/"
  },
  {
    name: "Deloitte",
    logo: "/companies/Deloitte.png",
    link: "https://www2.deloitte.com/"
  },
  {
    name: "Liberty Mutual",
    logo: "/companies/liberty.png",
    link: "https://www.libertymutual.com/"
  },
  {
    name: "National Science Foundation",
    logo: "/companies/nsf.png",
    link: "https://www.nsf.gov/"
  },
  {
    name: "BC Computer Science Society",
    logo: "/companies/bccss.png",
    link: "https://bccss.co/"
  },
];

const CompanyGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
      {companies.map((company, index) => (
        <a 
          key={index} 
          href={company.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group transition-all"
        >
          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full flex items-center justify-center h-32">
            <img
              src={process.env.PUBLIC_URL + company.logo}
              alt={company.name}
              className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <span className="mt-2 text-sm text-gray-300 text-center">{company.name}</span>
        </a>
      ))}
    </div>
  );
};

export default CompanyGrid;
