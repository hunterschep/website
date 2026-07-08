import React from 'react';

const Research = () => {
  return (
    <div>
      <h1>Research</h1>

      {/* Research Interests */}
      <h2>Research Interests</h2>
      <p>
        My research focuses on machine translation for low-resource and endangered languages. 
        I am particularly interested in:
      </p>
      <ul>
        <li>● Machine Translation for Low-Resource Languages</li>
        <li>● Computational Methods for Endangered Language Documentation</li>
        <li>● Natural Language Processing</li>
        <li>● Data Augmentation and Synthetic Data Generation</li>
        <li>● Pivot Translation Methods</li>
        <li>● Interactive Machine Learning Systems</li>
      </ul>

      {/* Current Research */}
      <h2>Current Work</h2>
      <p>
        I am currently a Research Assistant at the <a href="https://ai4commsci.github.io/" target="_blank" rel="noopener noreferrer">AI4 Communication Sciences Lab</a>, working 
        under the supervision of Dr. Emily Prud'hommeaux. 
        My work is funded by an NSF REU grant focused on Formosan language corpora.
      </p>
      <p>
        I investigate methods to enhance translation performance for Formosan languages (indigenous languages of Taiwan) 
        through data augmentation, pivot languages, and integration of diverse corpora. Current work utilizes 
        models and libraries including mBART, NLLB, OpenNMT, and Fairseq.
      </p>

      {/* Publications */}
      <h2>Publications</h2>

      <div className="publication">
        <strong>Hunter Scheppat</strong>, Joshua K. Hartshorne, Sercan Koc, Éric Le Ferrand, and Emily Prud'hommeaux. 2026. 
        FormosanMT: A Multilingual Parallel Corpus of the Formosan Language Family. 
        In <em>Proceedings of the Fifteenth Language Resources and Evaluation Conference (LREC 2026)</em>, pages 3445-3455. 
        European Language Resources Association (ELRA).
        <div className="pub-links">
          [<a href="https://doi.org/10.63317/3ut33xim33nt" target="_blank" rel="noopener noreferrer">DOI</a>]
          [<a href="https://f003.backblazeb2.com/file/lrec-media/lrec2026/videos/1488.mp4" target="_blank" rel="noopener noreferrer">Talk</a>]
          [<a href="https://lrec.elra.info/lrec2026-main-273" target="_blank" rel="noopener noreferrer">LREC</a>]
        </div>
      </div>
      
      <div className="publication">
        <strong>Hunter Scheppat</strong>, Joshua Hartshorne, Dylan Leddy, Éric Le Ferrand, and Emily Prud'hommeaux. 2025. 
        Integrating diverse corpora for training an endangered language machine translation system. 
        In <em>Proceedings of the Eighth Workshop on the Use of Computational Methods in the Study of Endangered Languages (ComputEL-8)</em>, pages 162-169.
        <div className="pub-links">
          [<a href="https://aclanthology.org/2025.computel-main.19.pdf" target="_blank" rel="noopener noreferrer">PDF</a>]
          [<a href="https://ufl.zoom.us/rec/play/7NoaD3Pjkyw1CoIj9roJ0IIflzVe6VQ-llA7aovSK8bVbbbqnQALMXoOGAuFGXqTDWw2LjEpSG0DffzL.1gg9eoxLXaklyZEC?startTime=1741230485000" target="_blank" rel="noopener noreferrer">Talk</a>]
          [<a href="https://huggingface.co/spaces/hunterschep/ami-zh-translation" target="_blank" rel="noopener noreferrer">Demo</a>]
        </div>
      </div>
    

      {/* Research Experience */}
      <h2>Research Experience</h2>
      <p>
        <strong>Post-Graduate Research Assistant</strong>, AI4 Communication Sciences Lab (2026-Present)<br />
        MGH / BC / NSF | PI: Dr. Emily Prud'hommeaux
      </p>
      <ul>
        <li>● Focusing on High Performance Computing, MT, and ASR</li>
      </ul>
      
      <p style={{ marginTop: '15px' }}>
        <strong>Research Assistant</strong>, AI4 Communication Sciences Lab (2023-Present)<br />
        MGH / BC / NSF | PI: Dr. Emily Prud'hommeaux
      </p>
      <ul>
        <li>● NSF REU-funded research on Formosan language machine translation</li>
        <li>● Developed synthetic data generation pipelines for low-resource MT</li>
        <li>● Implemented and evaluated multiple neural MT architectures (mBART, NLLB, OpenNMT)</li>
        <li>● First-author publication at ComputEL 2025</li>
        <li>● First-author publication at LREC 2026</li>
      </ul>
      
      <p style={{ marginTop: '15px' }}>
        <strong>Research Assistant</strong>, Pushkin Project (2023)<br />
        Boston College | PI: Dr. Joshua K. Hartshorne
      </p>
      <ul>
        <li>● Web-based behavioral experiments platform development</li>
        <li>● JavaScript and Selenium testing frameworks</li>
        <li>● Security modernization and OpenSSF compliance</li>
      </ul>

      {/* Conference Presentations */}
      <h2>Presentations</h2>
      <ul>
        <li>
          <strong>LREC 2026</strong> (May 2026): "FormosanMT: A Multilingual Parallel Corpus of the Formosan Language Family" - Oral presentation at the 15th Language Resources and Evaluation Conference.
        </li>
      </ul>
      <ul>
        <li>
          <strong>ComputEL-8</strong> (March 2025): "Integrating diverse corpora for training an endangered language machine translation system" - Oral presentation at the 8th Workshop on Computational Methods for Endangered Languages.
        </li>
      </ul>

      {/* Footer */}
      <div className="footer">
        For a complete list of publications and preprints, see my <a href="https://scholar.google.com/citations?user=MsjRFU8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> profile.
      </div>
    </div>
  );
};

export default Research;
