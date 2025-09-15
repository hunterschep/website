import React from 'react';

const Projects = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Times New Roman, serif' }}>
      
      <h1 style={{ fontSize: '24px', textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '30px' }}>
        Software Projects
      </h1>

      <div className="section">
        <h3><strong>EasyCanvas</strong> - Canvas LMS Interface Enhancement</h3>
        <p><em>Technologies:</em> React, Python, Firebase, FastAPI, Anthropic API</p>
        <p>Streamlined interface for Canvas LMS that simplifies course and assignment management. 
        Integrates with Canvas API for real-time data, includes custom analytics and AI-powered features. 
        Currently in development with authentication via Firebase and serverless backend.</p>
        <p><strong>Link:</strong> <a href="https://github.com/hunterschep/easycanvas" target="_blank" rel="noopener noreferrer">
          https://github.com/hunterschep/easycanvas
        </a></p>
        <br />
      </div>

      <div className="section">
        <h3><strong>Flock</strong> - Student Connectivity Platform</h3>
        <p><em>Technologies:</em> React, PostgreSQL, Prisma, React-Query</p>
        <p>Student networking platform developed with @Rafael Singer serving 250+ active users. 
        Facilitates connections between graduates and interns with Google OAuth, real-time messaging, 
        and preference management systems.</p>
        <p><strong>Link:</strong> <a href="https://github.com/rafaelsinger/flock" target="_blank" rel="noopener noreferrer">
          https://github.com/rafaelsinger/flock
        </a></p>
        <br />
      </div>

      <div className="section">
        <h3><strong>College Earnings Dashboard</strong> - Education Data Visualization</h3>
        <p><em>Technologies:</em> Python, Streamlit</p>
        <p>Interactive dashboard displaying Department of Education college earnings data. 
        Enables filtering by degree type, major, and institution with comparative analytics 
        for educational investment decisions.</p>
        <p><strong>Link:</strong> <a href="https://college-earnings.streamlit.app/" target="_blank" rel="noopener noreferrer">
          https://college-earnings.streamlit.app/
        </a></p>
        <br />
      </div>

      <div className="section">
        <h3><strong>AI Data Visualization Chatbot</strong> - Conversational Analytics Interface</h3>
        <p><em>Technologies:</em> React, FastAPI, OpenAI API</p>
        <p>Interactive chatbot with function calling capabilities for data analysis and visualization. 
        Provides natural language interface for querying datasets and generating analytical insights.</p>
        <p><strong>Link:</strong> <a href="https://hunterschep.github.io/hai-course/" target="_blank" rel="noopener noreferrer">
          https://hunterschep.github.io/hai-course/
        </a></p>
        <br />
      </div>

      <div className="section">
        <h3><strong>Interactive Machine Translation Demo</strong> - Research Interface</h3>
        <p><em>Technologies:</em> NLLB, Gradio, Python, OpenNMT, Transformers</p>
        <p>Web interface for ComputEL 2025 research demonstrating bidirectional translation 
        between Amis and Mandarin Chinese. Provides user-friendly exploration of low-resource 
        language machine translation results.</p>
        <p><strong>Link:</strong> <a href="https://huggingface.co/spaces/hunterschep/ami-zh-translation" target="_blank" rel="noopener noreferrer">
          https://huggingface.co/spaces/hunterschep/ami-zh-translation
        </a></p>
        <br />
      </div>

      <div className="section">
        <h3><strong>Boston Air Quality Dashboard</strong> - Environmental Data Visualization</h3>
        <p><em>Technologies:</em> React, Leaflet, Open-Meteo API</p>
        <p>Real-time air quality monitoring system for Boston metropolitan area. 
        Interactive mapping with neighborhood-level data, historical trends, and 
        multiple air quality metrics visualization.</p>
        <p><strong>Link:</strong> <a href="https://hunterschep.github.io/chem-final-project/" target="_blank" rel="noopener noreferrer">
          https://hunterschep.github.io/chem-final-project/
        </a></p>
        <br />
      </div>

      <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} />
      <p style={{ fontSize: '12px', textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
        For additional projects and code repositories, visit: 
        <a href="https://github.com/hunterschep" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>

    </div>
  );
};

export default Projects;
