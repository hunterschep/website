import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Software</h1>

      <p>
        Below is a selection of software projects I have developed or contributed to.
        For additional code and repositories, see my{' '}
        <a
          href="https://github.com/hunterschep"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </p>

      <p>
        These are just a few projects I think are cool or relevant. I pick up side
        projects all the time and am always interested in working on something new.
      </p>

      <hr />

      <div className="project-item">
        <div className="project-title">
          Canvas LMS Codex Plugin
        </div>
        <div className="project-tech">
          React, MCP, Canvas LMS, developer tooling
        </div>
        <p>
          A plugin with custom skills and an MCP server that exposes functionality
          for Canvas LMS workflows. Built to make it easier to interact with course
          data and platform actions in a more programmatic way.
        </p>
        <p>
          <a
            href="https://github.com/hunterschep/canvas-lms-codex-plugin"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
        </p>
      </div>

      <div className="project-item">
        <div className="project-title">
          March Madness 2026
        </div>
        <div className="project-tech">
          Python, Elo, Gaussian GLM, XGBoost
        </div>
        <p>
          A March Madness prediction project using a season-reset Elo system,
          per-season Gaussian GLM team quality estimates, and XGBoost regression on
          point differential.
        </p>
        <p>
          Top 20% of submissions.
        </p>
        <p>
          <a
            href="https://github.com/hunterschep/march-madness"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
        </p>
      </div>

      <div className="project-item">
        <div className="project-title">
          Kalshi Trading Bots
        </div>
        <div className="project-tech">
          Python, automation, cloud deployment
        </div>
        <p>
          Built two trading bots to automate trading based on probability
          distributions of event outcomes.
        </p>
        <p>
          Running autonomously on an Oracle always-on compute instance with a real
          account balance.
        </p>
        <p>Source code available upon request.</p>
      </div>

      <h2>More Soon</h2>
      <p>
        More projects and writeups will be added here over time.
      </p>

      <div className="footer">
        Source code available on{' '}
        <a
          href="https://github.com/hunterschep"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </div>
    </div>
  );
};

export default Projects;