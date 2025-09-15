import React from 'react';
import CompanyGrid from './sub-components/InfiniteCarousel';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Times New Roman, serif' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '24px', margin: '0', borderBottom: '2px solid #000', paddingBottom: '10px' }}>
          Hunter Scheppat
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <div>
            <p style={{ fontSize: '16px', margin: '10px 0', fontStyle: 'italic' }}>
              Senior, Boston College<br/>
              B.S. Management (Finance & Information Systems) | B.A. Computer Science
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + '/personal/Boston-College-Logo.png'}
            alt="Boston College"
            style={{ width: '75px', height: 'auto' }}
          />
        </div>
      </div>

      {/* Contact Info */}
      <div style={{ textAlign: 'center', marginBottom: '25px', fontSize: '14px' }}>
        Email: <a href="mailto:hunter.scheppat@bc.edu">hunter.scheppat@bc.edu</a> | 
        <a href="https://github.com/hunterschep" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
        <a href="https://scholar.google.com/citations?user=MsjRFU8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer"> Google Scholar</a> | 
        <a href="https://www.linkedin.com/in/hunterscheppat/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
      </div>

      {/* Photo and Professional Interests Side by Side */}
      <div style={{ display: 'flex', marginBottom: '30px', alignItems: 'flex-start' }}>
        {/* Photo */}
        <div style={{ marginRight: '30px' }}>
          <img
            src={process.env.PUBLIC_URL + '/personal/headshot.jpeg'}
            alt="Hunter Scheppat"
            style={{ width: '200px', height: '250px', border: '1px solid #000' }}
          />
        </div>
        
        {/* Professional Interests */}
        <div style={{ flex: 1 }}>
          <h2 className="academic-header">Professional Interests</h2>
          <ul style={{ marginTop: '0' }}>
            <li> • Sales Engineering</li>
            <li> • Cybersecurity</li>
            <li> • Data Analytics & Business Intelligence</li>
            <li> • Solutions Architecture</li>
            <li> • Cloud & Big Data Technologies</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="section">
        <h2 className="academic-header">Education</h2>
        <p><strong>Boston College</strong>, Chestnut Hill, MA</p>
        <ul>
          <li>B.S. Management, Carroll School of Management (Expected May 2026)</li>
          <li> • Concentrations: Finance and Information Systems</li>
          <li>B.A. Computer Science, Morrissey College of Arts and Sciences (Expected May 2026)</li>
        </ul>
      </div>

      {/* Research Experience */}
      <div className="section">
        <h2 className="academic-header">Research Experience</h2>
        <p><strong>AI4 Communication Sciences Lab</strong>, Mass General Hospital (2023-Present)</p>
        <ul>
          <li> • Research Assistant on NSF REU-funded Formosan Corpora/MT project</li>
          <li> • Developed machine translation methods for low-resource languages</li>
          <li> • Published paper at ComputEL 2025 Conference</li>
          <li> • Technologies: JavaScript, Selenium, OpenSSF security standards</li>
        </ul>
        
        <p><strong>Pushkin Project</strong>, Boston College (2023)</p>
        <ul>
          <li> • Research Assistant for web-based behavioral experiments platform</li>
          <li> • Bug testing, technical documentation, and modernizing security requirements</li>
        </ul>
      </div>

      {/* Professional Experience */}
      <div className="section">
        <h2 className="academic-header">Professional Experience</h2>
        <p><strong>Technology Consultant</strong>, Deloitte (Summer 2025)</p>
        <ul>
          <li>Technology and Transformation Consulting, Digital Trust & Privacy practice</li>
          <li> • Data security posture improvement for large financial institution</li>
          <li> • Technologies: PowerBI, PowerShell, Python, Forcepoint, Forescout, CrowdStrike</li>
        </ul>
        
        <p><strong>Data Analytics Intern</strong>, Liberty Mutual Insurance (Summer 2024)</p>
        <ul>
          <li> • Emerging risk analysis using SQL, Excel, PowerBI, VBA</li>
          <li> • Data discrepancy investigation and monthly warehousing automation</li>
          <li> • Technologies: SAS/SQL, VBA automation</li>
        </ul>
      </div>

      {/* Leadership & Teaching */}
      <div className="section">
        <h2 className="academic-header">Leadership & Teaching</h2>
        <ul>
          <li><strong>President</strong>, Computer Science Society, Boston College (2024-Present)</li>
          <li><strong>Teaching Assistant</strong>, CSCI1102: Data Structures, Boston College (2024)</li>
          <li><strong>Member</strong>, Pulse Program, Boston College (2023-2024)</li>
        </ul>
      </div>

      {/* Affiliations */}
      <div className="section">
        <h2 className="academic-header">Affiliations</h2>
        <CompanyGrid />
      </div>

      {/* Publications & Links */}
      <div className="section">
        <h2 className="academic-header">Other</h2>
        <ul>
          <li>Blog: <a href="https://substack.com/@hunterscheppat" target="_blank" rel="noopener noreferrer">Substack</a></li>
          <li>Photography: <a href="https://hunterscheppat.myportfolio.com/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
          <li>Models: <a href="https://huggingface.co/hunterschep" target="_blank" rel="noopener noreferrer">Hugging Face</a></li>
          <li>Organizer: <a href="https://bold.org/scholarships/zachary-scheppat-memorial-science-scholarship/" target="_blank" rel="noopener noreferrer">Zachary Scheppat Memorial Science Scholarship</a></li>
        </ul>
      </div>

      {/* Last Updated */}
      <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} />
      <p style={{ fontSize: '12px', textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
        Last updated: September 2025
      </p>
      
    </div>
  );
};

export default About;