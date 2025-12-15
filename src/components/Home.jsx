import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Name Header */}
      <h1>Hunter Scheppat</h1>
      
      {/* Bio Section with Photo */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <img 
          src={process.env.PUBLIC_URL + '/personal/headshot.jpeg'}
          alt="Hunter Scheppat"
          className="headshot"
          style={{ width: '150px', height: 'auto', marginRight: '20px', flexShrink: 0 }}
        />
        <div>
          <p>
            I am a senior at <a href="https://www.bc.edu/" target="_blank" rel="noopener noreferrer">Boston College</a> pursuing 
            a B.S. in Management (Finance & Information Systems) from the Carroll School of Management and a B.A. in Computer Science 
            from the Morrissey College of Arts and Sciences. I work as a research assistant at 
            the <a href="https://ai4commsci.github.io/" target="_blank" rel="noopener noreferrer">AI4 Communication Sciences Lab</a> at 
            Mass General Hospital, where I focus on machine translation for endangered languages.
          </p>
          <p>
            In Summer 2025, I will be joining <a href="https://www2.deloitte.com/" target="_blank" rel="noopener noreferrer">Deloitte</a> as 
            a Technology Consultant in the Digital Trust & Privacy practice. I also serve as President of 
            the <a href="https://bccss.co/" target="_blank" rel="noopener noreferrer">Boston College Computer Science Society</a>.
          </p>
        </div>
      </div>

      {/* Research */}
      <h2>Research</h2>
      <p>
        My research focuses on machine translation for low-resource and endangered languages, particularly 
        within the Formosan language family of Taiwan. I am interested in computational methods for language 
        preservation, data augmentation for low-resource NLP, and interactive machine learning systems. 
        You can find more details on my <a href="/research">research page</a>.
      </p>
      <p>
        I maintain open-source software and demos on my <a href="/projects">projects page</a>. 
        I also occasionally write about technology and research on my <a href="/writing">writing page</a>.
      </p>

      {/* Contact */}
      <h2>Contact</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Email:</strong></td>
            <td><a href="mailto:hunter.scheppat@bc.edu">hunter.scheppat@bc.edu</a></td>
          </tr>
          <tr>
            <td><strong>GitHub:</strong></td>
            <td><a href="https://github.com/hunterschep" target="_blank" rel="noopener noreferrer">github.com/hunterschep</a></td>
          </tr>
          <tr>
            <td><strong>Scholar:</strong></td>
            <td><a href="https://scholar.google.com/citations?user=MsjRFU8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a></td>
          </tr>
          <tr>
            <td><strong>LinkedIn:</strong></td>
            <td><a href="https://www.linkedin.com/in/hunterscheppat/" target="_blank" rel="noopener noreferrer">linkedin.com/in/hunterscheppat</a></td>
          </tr>
        </tbody>
      </table>

      {/* What's New */}
      <h2>What's New?</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li className="news-item">
          <span className="news-date">2025-12:</span> Released <a href="https://medium.com/@hunterschep" target="_blank" rel="noopener noreferrer">tutorial on Medium</a> for fine-tuning NLLB-200.
        </li>
        <li className="news-item">
          <span className="news-date">2025-12:</span> Open source contribution to Hugging Face Transformers library.
        </li>
        <li className="news-item">
          <span className="news-date">2025-05:</span> Featured in <a href="https://x.com/BostonCollege/status/1918386552666787889" target="_blank" rel="noopener noreferrer">Wall Street Journal Future View</a>.
        </li>
        <li className="news-item">
          <span className="news-date">2025-03:</span> Presented paper at ComputEL 2025 on "Integrating diverse corpora for training an endangered language machine translation system."
        </li>
        <li className="news-item">
          <span className="news-date">2025-01:</span> Paper accepted to ComputEL 2025 (Workshop on Computational Methods for Endangered Languages).
        </li>
        <li className="news-item">
          <span className="news-date">2025-01:</span> Released interactive <a href="https://huggingface.co/spaces/hunterschep/ami-zh-translation" target="_blank" rel="noopener noreferrer">Amis-Mandarin translation demo</a> on Hugging Face.
        </li>
        <li className="news-item">
          <span className="news-date">2024-09:</span> Started as President of the BC Computer Science Society.
        </li>
        <li className="news-item">
          <span className="news-date">2024-06:</span> Completed internship at Liberty Mutual Insurance as Data Analytics Intern.
        </li>
        <li className="news-item">
          <span className="news-date">2024-01:</span> Began work as Teaching Assistant for CSCI1102: Data Structures at Boston College.
        </li>
        <li className="news-item">
          <span className="news-date">2023-09:</span> Joined AI4 Communication Sciences Lab as Research Assistant, working on NSF REU-funded Formosan MT project.
        </li>
      </ul>

      {/* Footer */}
      <div className="footer">
        All content © Hunter Scheppat. Last updated: December 2025.
      </div>
    </div>
  );
};

export default Home;
