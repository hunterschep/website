import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Name Header */}
      <h1>Hunter Scheppat</h1>
      
      {/* Bio Section with Photo */}
      <div style={{ display: 'flex', alignItems: 'flex-start'}}>
        <img 
          src={process.env.PUBLIC_URL + '/personal/headshot.png'}
          alt="Hunter Scheppat"
          className="headshot"
          style={{ width: '200px', height: 'auto', marginRight: '20px', marginTop: '15px', flexShrink: 0 }}
        />
        <div>
          <p>
            I graduated cum laude from <a href="https://www.bc.edu/" target="_blank" rel="noopener noreferrer">Boston College</a> in May 2026 with 
            a B.S. in Management and a B.A. in Computer Science. I work as a research assistant at 
            the <a href="https://ai4commsci.github.io/people" target="_blank" rel="noopener noreferrer">AI4 Communication Sciences Lab</a>, where I focus on machine translation for endangered languages.
          </p>
          <p>
            I am very interested in open-source NLP and MT projects. I have previously worked as a resarch assistant at the <a href="https://pushkin-consortium.github.io/pushkin/4.2/" target="_blank" rel="noopener noreferrer">Pushkin Project</a> (2024) and as 
            teaching assistant for CSCI1102: Data Structures (2023).  
            I served as the President of the <a href="https://bccss.co/" target="_blank" rel="noopener noreferrer">Boston College Computer Science Society</a> (2024-2026). 
          </p>
        </div>
      </div>

      {/* Research */}
      <h2>Research</h2>
      <p>
        My research focuses on machine translation for low-resource and endangered languages, particularly 
        within the Formosan language family of Taiwan. I am interested in computational methods for language 
        preservation, data augmentation for low-resource NLP, and interactive machine learning systems. 
        You can find more details on my <a href="website/research">research page</a>.
      </p>
      <p>
        I try to help maintain open-source software and demos on my <a href="website/projects">projects page</a>. 
        I also occasionally write about technology and research on my <a href="website/writing">writing page</a>.
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
          <span className="news-date">2026-02:</span> Paper accepted to <a href="https://www.elra.info/lrec2026/" target="_blank" rel="noopener noreferrer">LREC 2026</a> (Language Resources and Evaluation Conference).
        </li>
        <li className="news-item">
          <span className="news-date">2025-12:</span> Released <a href="https://medium.com/@hunterschep" target="_blank" rel="noopener noreferrer">tutorial on Medium</a> for fine-tuning NLLB-200.
        </li>
        <li className="news-item">
          <span className="news-date">2025-12:</span> Open source <a href="https://github.com/huggingface/transformers/pull/42779" target="_blank" rel="noopener noreferrer">contribution</a> to Hugging Face Transformers library.
        </li>
        <li className="news-item">
          <span className="news-date">2025-05:</span> Featured in <a href="https://x.com/BostonCollege/status/1918386552666787889" target="_blank" rel="noopener noreferrer">Wall Street Journal Future View</a>.
        </li>
        <li className="news-item">
          <span className="news-date">2025-03:</span> Paper at ComputEL 2025 on "Integrating diverse corpora for training an endangered language machine translation system."
        </li>
        <li className="news-item">
          <span className="news-date">2025-01:</span> Paper accepted to <a href='https://computel-workshop.org/computel-8/' target="_blank" rel="noopener noreferrer">ComputEL 2025</a> (Workshop on Computational Methods for Endangered Languages).
        </li>
        <li className="news-item">
          <span className="news-date">2025-01:</span> Released interactive <a href="https://huggingface.co/FormosanBank" target="_blank" rel="noopener noreferrer">Formosan MT and ASR demos</a> on Hugging Face.
        </li>
      </ul>

      {/* Footer */}
      <div className="footer">
        All content © Hunter Scheppat. Last updated: March 2026.
      </div>
    </div>
  );
};

export default Home;
