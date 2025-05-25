import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8 text-gray-900">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Tech Insights Blog</h1>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      <article className="space-y-2">
        <h2 className="text-2xl font-semibold">The IT Revolution: Then and Now</h2>
        <p className="text-gray-700">
          The IT industry has transformed how the world works. From mainframes to microservices, this journey has reshaped businesses globally.
        </p>
      </article>

      <article className="space-y-2">
        <h2 className="text-2xl font-semibold">Emerging AI: What’s Next?</h2>
        <p className="text-gray-700">
          AI is rapidly evolving. Explore how large language models, autonomous systems, and generative AI are defining the next decade.
        </p>
      </article>

      <article className="space-y-2">
        <h2 className="text-2xl font-semibold">Next-Gen Tech: The Road Ahead</h2>
        <p className="text-gray-700">
          Quantum computing, edge AI, and blockchain are paving the road to a decentralized and powerful future.
        </p>
      </article>
    </div>
  );
};

export default Blog;
