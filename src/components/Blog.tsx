import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Blog post type
interface BlogPost {
  id: string;
  title: string;
  image: string;
  content: string;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The IT Revolution: Then and Now',
    image: 'https://via.placeholder.com/800x400?text=IT+Revolution',
    content:
      `The IT revolution has reshaped the modern world in unimaginable ways. In the past, massive mainframes and limited processing power constrained computing. Today, cloud computing, microservices, and containerized deployments dominate the scene.

      Businesses now rely on real-time data analytics, AI-driven decisions, and decentralized workflows. This evolution has enabled agility, reduced costs, and improved customer experience. The transformation didn't occur overnight; it’s the result of decades of innovation in hardware, software, and infrastructure.

      From the early days of punch cards and CRT terminals to serverless architectures and AI copilots, the IT revolution continues to push boundaries and redefine what's possible.`,
  },
  {
    id: '2',
    title: 'Emerging AI: What’s Next?',
    image: 'https://via.placeholder.com/800x400?text=Emerging+AI',
    content:
      `Artificial Intelligence is entering its most transformative era. Large Language Models (LLMs), computer vision, and autonomous agents are now core parts of how organizations operate. Chatbots, smart assistants, and automation are replacing repetitive jobs, freeing up humans for creative tasks.

      In the next few years, we’ll witness advancements like emotionally aware AI, real-time multilingual translation, and domain-specific copilots revolutionizing medicine, law, and education. Concerns remain about bias and misuse, making responsible development critical.

      As AI expands into embedded devices and edge computing, we’re entering an age where intelligence isn’t just centralized, but distributed—bringing smarter tech to every corner of life.`,
  },
  {
    id: '3',
    title: 'Next-Gen Tech: The Road Ahead',
    image: 'https://via.placeholder.com/800x400?text=Next+Gen+Tech',
    content:
      `The future of tech is being shaped by groundbreaking innovations. Quantum computing promises exponentially faster calculations, opening new possibilities in cryptography, chemistry, and logistics. Edge AI will enable real-time processing in smart cities and autonomous vehicles.

      Meanwhile, blockchain is evolving beyond cryptocurrency into secure digital identity, supply chain integrity, and decentralized finance. These technologies combined will redefine security, transparency, and decision-making.

      As 6G, spatial computing, and neural interfaces emerge, our interaction with technology will be more immersive, intelligent, and intuitive than ever before. The next decade will be a fusion of science fiction and reality.`,
  },
];

const Blog: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const postId = params.get('id');

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Detail view
  if (postId) {
    const post = blogPosts.find((p) => p.id === postId);
    if (!post) return <div className="p-6">Blog not found</div>;

    return (
      <div
        className="min-h-screen bg-[#F8F4E6] bg-[url('/images/vintage-spots.png')] bg-contain bg-repeat py-10"
      >
        <div className="max-w-4xl mx-auto p-6 text-gray-800 bg-white bg-opacity-90 rounded-xl shadow-lg">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Home
          </Link>

          <img
            src={post.image}
            alt={post.title}
            className="rounded-xl w-full mt-4 mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg whitespace-pre-line leading-relaxed">
            {post.content}
          </p>
        </div>
      </div>
    );
  }

  // List view
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-[#F8F4E6] bg-[url('/images/vintage-spots.png')] bg-contain bg-repeat py-10">
      <div className="max-w-5xl mx-auto p-6 space-y-8 text-gray-900">
        <h1 className="text-4xl font-bold">Tech Insights Blog</h1>

        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="space-y-3 border-b pb-6"
          >
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl w-full"
            />
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">
              {post.content.slice(0, 200)}...
            </p>
            <Link
              to={`/blog?id=${post.id}`}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Read more →
            </Link>
          </article>
        ))}

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 pt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 bg-blue-100 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 bg-blue-100 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
