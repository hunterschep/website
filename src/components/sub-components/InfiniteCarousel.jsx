import React from "react";

// List of organizations
const organizations = [
  {
    name: "AI4 Communication Sciences Lab",
    link: "https://ai4commsci.github.io/"
  },
  {
    name: "Deloitte",
    link: "https://www2.deloitte.com/"
  },
  {
    name: "Liberty Mutual Insurance",
    link: "https://www.libertymutual.com/"
  },
  {
    name: "National Science Foundation",
    link: "https://www.nsf.gov/"
  },
  {
    name: "BC Computer Science Society",
    link: "https://bccss.co/"
  },
];

const CompanyGrid = () => {
  return (
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.6' }}>
      {organizations.map((org, index) => (
        <li key={index} style={{ marginBottom: '5px' }}>
          <a 
            href={org.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {org.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CompanyGrid;
