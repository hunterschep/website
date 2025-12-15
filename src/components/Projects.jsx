import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Software</h1>
      
      <p>
        Below is a selection of software projects I have developed or contributed to. 
        For additional code and repositories, see my <a href="https://github.com/hunterschep" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>

      <hr />

      {/* EasyCanvas */}
      <div className="project-item">
        <p className="project-title">
          <a href="https://github.com/hunterschep/easycanvas" target="_blank" rel="noopener noreferrer">EasyCanvas</a> - Canvas LMS Interface Enhancement
        </p>
        <p className="project-tech">React, Python, Firebase, FastAPI, Anthropic API</p>
        <p>
          Streamlined interface for Canvas LMS that simplifies course and assignment management. 
          Integrates with Canvas API for real-time data, includes custom analytics and AI-powered features. 
          Currently in development.
        </p>
      </div>

      <hr />

      {/* Flock */}
      <div className="project-item">
        <p className="project-title">
          <a href="https://github.com/rafaelsinger/flock" target="_blank" rel="noopener noreferrer">Flock</a> - Student Connectivity Platform
        </p>
        <p className="project-tech">React, PostgreSQL, Prisma, React-Query</p>
        <p>
          Student networking platform developed with @Rafael Singer, serving 250+ active users. 
          Facilitates connections between graduates and interns with Google OAuth, real-time messaging, 
          and preference management systems.
        </p>
      </div>

      <hr />

      {/* Amis MT Demo */}
      <div className="project-item">
        <p className="project-title">
          <a href="https://huggingface.co/spaces/hunterschep/ami-zh-translation" target="_blank" rel="noopener noreferrer">Amis-Mandarin Translation Demo</a> - Research Interface
        </p>
        <p className="project-tech">NLLB, Gradio, Python, OpenNMT, Transformers</p>
        <p>
          Web interface for ComputEL 2025 research demonstrating bidirectional translation 
          between Amis (an indigenous language of Taiwan) and Mandarin Chinese. Provides user-friendly 
          exploration of low-resource language machine translation results.
        </p>
      </div>

      <hr />

      {/* College Earnings */}
      <div className="project-item">
        <p className="project-title">
          <a href="https://college-earnings.streamlit.app/" target="_blank" rel="noopener noreferrer">College Earnings Dashboard</a> - Education Data Visualization
        </p>
        <p className="project-tech">Python, Streamlit</p>
        <p>
          Interactive dashboard displaying Department of Education college earnings data. 
          Enables filtering by degree type, major, and institution with comparative analytics 
          for educational investment decisions.
        </p>
      </div>

      <hr />

      {/* AI Data Viz */}
      <div className="project-item">
        <p className="project-title">
          <a href="https://hunterschep.github.io/hai-course/" target="_blank" rel="noopener noreferrer">AI Data Visualization Chatbot</a> - Conversational Analytics
        </p>
        <p className="project-tech">React, FastAPI, OpenAI API</p>
        <p>
          Interactive chatbot with function calling capabilities for data analysis and visualization. 
          Provides natural language interface for querying datasets and generating analytical insights.
        </p>
      </div>

      <hr />

      {/* Boston AQ */}
      <div className="project-item">
        <p className="project-title">
          <a href="https://hunterschep.github.io/chem-final-project/" target="_blank" rel="noopener noreferrer">Boston Air Quality Dashboard</a> - Environmental Monitoring
        </p>
        <p className="project-tech">React, Leaflet, Open-Meteo API</p>
        <p>
          Real-time air quality monitoring system for Boston metropolitan area. 
          Interactive mapping with neighborhood-level data, historical trends, and 
          multiple air quality metrics visualization.
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        Source code available on <a href="https://github.com/hunterschep" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </div>
    </div>
  );
};

export default Projects;
