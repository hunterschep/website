import React, { useEffect, useState } from 'react';
import InfiniteCarousel from './sub-components/InfiniteCarousel';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research Involvement' },
  { id: 'campus', label: 'Campus Involvement' },
  { id: 'experience', label: 'Professional Experience' },
];

const About = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    // Use IntersectionObserver to detect which section is currently in view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust the threshold as needed
    };

    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        });
      }, observerOptions);
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex">
      {/* Progress Bar Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-48 flex-col items-center justify-center p-4 bg-transparent">
        <ul className="space-y-4">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`block px-3 py-1 rounded transition-colors ${
                  activeSection === sec.id
                    ? 'bg-white text-gray-900 font-bold'
                    : 'text-white hover:bg-white hover:text-gray-900'
                }`}
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-56 p-4">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="flex flex-col items-center space-y-4">
            {/* Profile Image linking to LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + '/personal/headshot.jpeg'}
                alt="Hunter Scheppat"
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
            </a>
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition duration-300"
              >
                GitHub
              </a>
              <a
                href="mailto:your.email@example.com"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition duration-300"
              >
                Email Me
              </a>
              <a
                href="/path/to/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition duration-300"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Hunter Scheppat
            </h1>
            <p className="mt-4 text-lg text-white">
              <strong>Business Analyst / Data Scientist</strong>
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
            <p className="text-lg">
              I am currently a <strong>junior at Boston College</strong> pursuing a{' '}
              <strong>B.S. in Management</strong> and a <strong>B.A. in Computer Science</strong>. My coursework spans a broad range of subjects, fueling my passion for data analytics and business strategy.
            </p>
          </div>
        </section>

        {/* Research Involvement Section */}
        <section id="research" className="mb-16">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Research Involvement</h2>
            <p className="text-lg mb-4">
              I have been part of several <strong>large-scale research projects</strong> at Boston College. Last year, I served as a research assistant for the{' '}
              <a
                href="https://example.com/pushkin-project"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Pushkin Project
              </a>, and worked as a lab member at the{' '}
              <a
                href="https://example.com/ai4-communications"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                AI4 Communication Sciences Lab
              </a>{' '}
              at <strong>Mass General Hospital</strong> (formerly the Language Learning Lab at Boston College). My role involved writing tests in JavaScript and Selenium, performing bug testing, and updating technical documentation.
            </p>
            <p className="text-lg">
              This year, I joined an NSF REU-funded initiative on the <strong>Formosan Corpora/MT project</strong> under the same lab. With my dedicated team and advisor, we published a paper at the{' '}
              <a
                href="https://example.com/computel2025"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ComputEL 2025 Conference
              </a>. This research focused on machine translation methods for low-resource languages. Learn more on my{' '}
              <a
                href="https://example.com/research"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                research page
              </a>, and explore our models on{' '}
              <a
                href="https://huggingface.co"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Hugging Face
              </a>.
            </p>
          </div>
        </section>

        {/* Campus Involvement Section */}
        <section id="campus" className="mb-16">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Campus Involvement</h2>
            <p className="text-lg">
              I have taken on various leadership roles at Boston College. Currently, I serve as the <strong>President of the Computer Science Society</strong>, where I help manage a multi-thousand dollar budget, lead a 10+ member executive board, and organize events for over 100 active members.
            </p>
            <p className="text-lg mt-4">
              Learn more about our initiatives on our{' '}
              <a
                href="https://bccss.co"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                website
              </a>{' '}
              and view our projects on{' '}
              <a
                href="https://github.com/bccss"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>.
            </p>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="mb-16">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg mb-4">
              Last summer, I worked as a <strong>Data Analytics Intern</strong> at <strong>Liberty Mutual Insurance</strong>, where I analyzed emerging risks using SQL, Excel, PowerBI, and VBA to streamline routine tasks. I also investigated data discrepancies and automated monthly data warehousing using SAS/SQL.
            </p>
            <p className="text-lg">
              In summer 2025, I will be joining <strong>Deloitte</strong> as a Technology and Transformation Intern, focusing on cybersecurity initiatives.
            </p>
          </div>
        </section>

        {/* Companies Section */}
        <section id="companies" className="mb-16">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Firms & Organizations</h2>
            <InfiniteCarousel />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
