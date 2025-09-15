import React from 'react';

const Research = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Times New Roman, serif' }}>
      
      <h1 style={{ fontSize: '24px', textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '30px' }}>
        Research
      </h1>

      {/* Research Interests */}
      <div className="section">
        <h2 className="academic-header">Research Interests</h2>
        <ul>
          <li> • Machine Translation for Low-Resource Languages</li>
          <li> • Computational Methods for Endangered Languages</li>
          <li> • Natural Language Processing</li>
          <li> • Interactive Machine Learning Systems</li>
          <li> • Data Augmentation and Synthetic Data Generation</li>
          <li> • Pivot Translation Methods</li>
        </ul>
      </div>

      {/* Research Overview */}
      <div className="section">
        <h2 className="academic-header">Current Research</h2>
        <p>My research focuses on machine translation for low-resource languages, 
        particularly within the Formosan language family of Taiwan. I investigate 
        methods to enhance translation performance through data augmentation, pivot 
        languages, and integration of diverse corpora. Current work utilizes 
        state-of-the-art libraries including mBART, NLLB, OpenNMT, and Fairseq.</p>
      </div>

      {/* Publications */}
      <div className="section">
        <h2 className="academic-header">Publications</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <p><strong>Scheppat, H.</strong>, Hartshorne, J. K., Leddy, D., Le Ferrand, É., & Prud'hommeaux, E. (2025). 
          Integrating diverse corpora for training an endangered language machine translation system. 
          In <em>Proceedings of the 8th Workshop on the Use of Computational Methods in the Study of Endangered Languages (ComputEL-8)</em>.</p>
          
          <p style={{ marginTop: '10px', fontSize: '14px' }}>
            <strong>Abstract:</strong> Machine translation (MT) can support endangered language documentation and usage, 
            but most lack sufficient parallel corpora for training effective models. This study repurposes diverse 
            data sources to train MT systems for Amis, an Indigenous language of Taiwan, and supplements limited 
            Amis-English data by generating synthetic translations from an Amis-Mandarin corpus. Results show that 
            synthetic data improves translation to English but not from English, and no single MT system consistently 
            outperforms the other, emphasizing the need to experiment with multiple training approaches for optimal performance.
          </p>
          
          <p style={{ fontSize: '12px', marginTop: '8px' }}>
            [<a href="https://aclanthology.org/2025.computel-main.19.pdf" target="_blank" rel="noopener noreferrer">PDF</a>] 
            [<a href="https://ufl.zoom.us/rec/play/7NoaD3Pjkyw1CoIj9roJ0IIflzVe6VQ-llA7aovSK8bVbbbqnQALMXoOGAuFGXqTDWw2LjEpSG0DffzL.1gg9eoxLXaklyZEC?startTime=1741230485000" target="_blank" rel="noopener noreferrer">Presentation</a>]
            [<a href="https://huggingface.co/spaces/hunterschep/ami-zh-translation" target="_blank" rel="noopener noreferrer">Demo</a>]
          </p>
        </div>
      </div>

      {/* Research Experience */}
      <div className="section">
        <h2 className="academic-header">Research Experience</h2>
        
        <p><strong>Research Assistant</strong> (2023-Present)<br/>
        AI4 Communication Sciences Lab, Mass General Hospital<br/>
        PI: Emily Prud'hommeaux</p>
        <ul>
          <li> • NSF REU-funded research on Formosan language machine translation</li>
          <li> • Developed synthetic data generation pipelines for low-resource MT</li>
          <li> • Implemented and evaluated multiple neural MT architectures</li>
          <li> • Published findings at ComputEL 2025 workshop</li>
        </ul>
        
        <p style={{ marginTop: '15px' }}><strong>Research Assistant</strong> (2023)<br/>
        Pushkin Project, Boston College<br/>
        PI: Joshua K. Hartshorne</p>
        <ul>
          <li> • Web-based behavioral experiments platform development</li>
          <li> • JavaScript and Selenium testing frameworks</li>
          <li> • Security modernization and OpenSSF compliance</li>
        </ul>
      </div>

      {/* Conference Presentations */}
      <div className="section">
        <h2 className="academic-header">Conference Presentations</h2>
        <ul>
          <li>ComputEL 2025: "Integrating diverse corpora for training an endangered language machine translation system" (January 2025)</li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div className="section">
        <h2 className="academic-header">Technical Skills</h2>
        <p><strong>Programming Languages:</strong> Python, JavaScript, R, SQL</p>
        <p><strong>ML/NLP Libraries:</strong> Transformers, OpenNMT, Fairseq, NLLB, mBART, Gradio</p>
        <p><strong>Tools & Platforms:</strong> Hugging Face, Selenium, Git, Docker</p>
      </div>

      <hr style={{ margin: '30px 0', border: '1px solid #ccc' }} />
      <p style={{ fontSize: '12px', textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
        For complete publication list and preprints, see: 
        <a href="https://scholar.google.com/citations?user=MsjRFU8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer"> Google Scholar</a>
      </p>

    </div>
  );
};

export default Research;
