import React from 'react';

const Writing = () => {
  return (
    <div>
      <h1>Writing</h1>
      
      <p>
        I occasionally write about technology, research, and machine learning. 
      </p>

      <h2>Blog</h2>
      <p>
        <a href="https://medium.com/@hunterschep" target="_blank" rel="noopener noreferrer">
          medium.com/@hunterschep
        </a> - Tutorials and essays on machine learning, NLP, and technology.
      </p>
      <p>
        <a href="https://substack.com/@hunterscheppat" target="_blank" rel="noopener noreferrer">
          hunterscheppat.substack.com
        </a> - Longer-form essays and updates.
      </p>

      <h2>Recent Posts</h2>
      <ul>
        <li>
          <a href="https://medium.com/@hunterschep" target="_blank" rel="noopener noreferrer">Fine-tuning NLLB-200 for Low-Resource Languages</a> (December 2025) - A practical guide to fine-tuning Meta's NLLB-200 model for machine translation.
        </li>
      </ul>

      <h2>Other</h2>
      <ul>
        <li>
          <strong>Photography:</strong> <a href="https://hunterscheppat.myportfolio.com/" target="_blank" rel="noopener noreferrer">Portfolio</a> - 
          A collection of my photography work.
        </li>
        <li>
          <strong>Models:</strong> <a href="https://huggingface.co/hunterschep" target="_blank" rel="noopener noreferrer">Hugging Face</a> - 
          Machine learning models and demos.
        </li>
        <li>
          <strong>Scholarship:</strong> <a href="https://bold.org/scholarships/zachary-scheppat-memorial-science-scholarship/" target="_blank" rel="noopener noreferrer">
            Zachary Scheppat Memorial Science Scholarship
          </a> - 
          A scholarship I help organize in memory of my brother.
        </li>
      </ul>

      {/* Footer */}
      <div className="footer">
        Subscribe to updates on <a href="https://medium.com/@hunterschep" target="_blank" rel="noopener noreferrer">Medium</a> or <a href="https://substack.com/@hunterscheppat" target="_blank" rel="noopener noreferrer">Substack</a>.
      </div>
    </div>
  );
};

export default Writing;
