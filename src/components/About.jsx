import React, { useState, useEffect } from 'react';
import CompanyGrid from './sub-components/InfiniteCarousel';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 w-full bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl px-4 md:px-8 py-12">
        {/* About Section */}
        <section id="about" className="mb-4 scroll-mt-20">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://www.linkedin.com/in/hunterscheppat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + '/personal/headshot.jpeg'}
                alt="Hunter Scheppat"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl hover:scale-105 transition-transform"
              />
            </a>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/hunterschep"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                GitHub
              </a>
              <a
                href="mailto:hunter.scheppat@bc.edu"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Email Me
              </a>
              <a
                href="https://scholar.google.com/citations?user=MsjRFU8AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Google Scholar
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hunter Scheppat
            </h1>
            <p className="text-lg text-white bg-opacity-0 rounded-lg p-4 mx-auto max-w-lg shadow-md">
              <strong>Interested in:</strong>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="px-2 py-1 bg-blue-900 bg-opacity-50 rounded-md text-sm">Software Engineering</span>
                <span className="px-2 py-1 bg-purple-900 bg-opacity-50 rounded-md text-sm">Product Management</span>
                <span className="px-2 py-1 bg-indigo-900 bg-opacity-50 rounded-md text-sm">Program Management</span>
                <span className="px-2 py-1 bg-blue-900 bg-opacity-50 rounded-md text-sm">Data Analytics</span>
                <span className="px-2 py-1 bg-purple-900 bg-opacity-50 rounded-md text-sm">Business Intelligence</span>
                <span className="px-2 py-1 bg-indigo-900 bg-opacity-50 rounded-md text-sm">Solutions Engineering</span>
                <span className="px-2 py-1 bg-blue-900 bg-opacity-50 rounded-md text-sm">Sales Engineering</span>
              </div>
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-4 scroll-mt-20">
          <div className="bg-opacity-0 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Education</h2>
            <p className="text-lg mb-4 text-white">
              I am currently a <strong>junior at Boston College</strong> pursuing a{' '}
              <strong>B.S. in Management</strong> and a <strong>B.A. in Computer Science</strong>.
            </p>
            <p className="text-lg mb-4 text-white">
              In the Carroll School of Management I am concentrating in <strong>Finance</strong> and <strong>Information Systems</strong>.
              My B.A in Computer Science has equipped me with a strong understanding of algorithms, data structures, and software development.
              I'll graduate with both degrees in May 2026!
            </p>
          </div>
        </section>

        {/* Research Involvement Section */}
        <section id="research" className="mb-4 scroll-mt-20">
          <div className="bg-opacity-0 rounded-2xl p-6 md:p-8 shadow-xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 ">Research Involvement</h2>
            <p className="text-lg mb-4">
              I have been part of several <strong>large-scale research projects</strong> at Boston College. Last year, I served as a research assistant for the{' '}
              <a
                href="https://languagelearninglab.gitbook.io/pushkin"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Pushkin Project
              </a>, and worked as a lab member at the{' '}
              <a
                href="https://ai4commsci.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                AI4 Communication Sciences Lab
              </a>{' '}
              at <strong>Mass General Hospital </strong> (formerly the Language Learning Lab at Boston College). My role involved writing tests in JavaScript and Selenium, performing bug testing, updating technical documentation, and modernizing security requirements in line with OpenSSF.
            </p>
            <p className="text-lg">
              This year, I joined an NSF REU-funded initiative on the <strong>Formosan Corpora/MT project</strong> under the same lab. We published a paper at the{' '}
              <a
                href="https://computel-workshop.org/computel-8/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ComputEL 2025 Conference
              </a>. This research focused on machine translation methods for low-resource languages. Learn more on my{' '}
              <a
                href="/research"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                research page
              </a>, and explore my models on{' '}
              <a
                href="https://huggingface.co/hunterschep"
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
        <section id="campus" className="mb-4 scroll-mt-20">
          <div className="bg-opacity-0 rounded-2xl p-6 md:p-8 shadow-xl text-white">
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
            <p className="text-lg mt-4">
              I've also worked as a Teaching Assistant most recently for CSCI1102: Data Structures. I held office hours, graded assignments, and led lab sections.
            </p>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="mb-4 scroll-mt-20">
          <div className="bg-opacity-0 rounded-2xl p-6 md:p-8 shadow-xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg mb-4">
              <strong>Summer 2025:</strong> I worked for <strong>Deloitte</strong> in their Technology and Transformation Consulting practice, specifically aligned to Digital Trust & Privacy. I worked on a project to help a large financial institution improve their data security posture from strategy to implementation. I used tools like the Microsoft Office suite, PowerBI, PowerShell, Python, and SaaS applications like Forcepoint, Forescout, and CrowdStrike to support analysis and implementation.
            </p>
            <p className="text-lg mb-4">
              <strong>Summer 2024:</strong> I worked as a <strong>Data Analytics Intern</strong> at <strong>Liberty Mutual Insurance</strong>, where I analyzed emerging risks using SQL, Excel, PowerBI, and VBA to streamline routine tasks. I also investigated data discrepancies and automated monthly data warehousing using SAS/SQL.
            </p>
            <p className="text-lg">
              <strong>Summer 2023:</strong> I worked as a summer camp counselor! Ask me about this experience.
            </p>
          </div>
        </section>

        {/* Companies Section */}
        <section id="companies" className="mb-4 scroll-mt-20">
          <div className="bg-opacity-0 rounded-2xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Firms & Organizations</h2>
            <CompanyGrid />
          </div>
        </section>

        {/* Other Section */}
        <section id="experience" className="mb-4 scroll-mt-20">
          <div className="bg-opacity-0 rounded-2xl p-6 md:p-8 shadow-xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Other Involvement</h2>
            <p className="text-lg mb-4">
              I was a member of the <strong>Pulse Program</strong> at <strong>BC</strong>, where I worked 8 hours per week at a local food pantry.
              I primarily focused on client relations and service distribution. I helped file taxes during the spring 2024 season.
            </p>
            <p className="text-lg mb-4 text-white">
              I graduated from Issaquah High School in May 2022. I help organize and award the <a
                href="https://bold.org/scholarships/zachary-scheppat-memorial-science-scholarship/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Zachary Scheppat Memorial Science Scholarship
              </a> in honor of my late brother.
            </p>
            <p className="text-lg mb-4 text-white">
              I sometimes write about my research and interests on my{' '}
              <a
                href="https://substack.com/@hunterscheppat"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                blog. 
              </a> My writing was featured in the{' '}  
              <a
                href="https://www.wsj.com/opinion/is-your-data-private-anymore-technology-social-media-safety-personalization-157035c0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Wall Street Journal.
              </a>
            </p>
            <p className="text-lg mb-4 text-white">   
              Some of my landscape photography from around the Pacific Northwest and Northeast has been featured on Washington Trails Association
              and other small organizations. {' '}
              <a
                href="https://hunterscheppat.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                My portfolio. 
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;