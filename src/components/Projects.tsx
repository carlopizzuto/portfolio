import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export const Projects = () => {
  const projects = [{
    title: 'SWIMO',
    description: 'A tinder-style web app that uses sentence-transformers embeddings for discovering new movies.',
    tags: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    image: '/swimo-icon.png',
    liveLink: 'https://swimo.vercel.app/',
    repoLink: 'https://github.com/carlopizzuto/swimo'
  }, {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with product management, cart functionality, and payment processing.',
    tags: ['React', 'Express', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    liveLink: '#',
    repoLink: '#'
  }, {
    title: 'Retro Game Collection',
    description: 'A collection of classic arcade games rebuilt with modern web technologies.',
    tags: ['JavaScript', 'Canvas API', 'CSS', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    liveLink: '#',
    repoLink: '#'
  }, {
    title: 'AI Image Generator',
    description: 'Web application that generates custom images based on text prompts using AI models.',
    tags: ['React', 'Python', 'Flask', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1655720828018-ad4b84a8c253?q=80&w=2070&auto=format&fit=crop',
    liveLink: '#',
    repoLink: '#'
  }];
  return <section id="projects" className="py-20 bg-[#0A1128] relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,134,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <span className="text-[#3A86FF]">~/</span>projects
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3A86FF]/50 to-transparent"></span>
            </h2>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent projects showcasing my skills in full-stack
            development and AI integration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => <div key={index} className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 rounded-lg overflow-hidden hover:border-[#3A86FF]/30 transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#3A86FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => <span key={i} className="text-xs px-2 py-1 bg-[#0C1B3A]/50 text-gray-300 rounded">
                      {tag}
                    </span>)}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex items-center gap-1 text-sm text-[#FFD700] hover:text-[#FFE55C] transition-colors">
                    <ExternalLinkIcon size={16} />
                    Live Demo
                  </a>
                  <a href={project.repoLink} className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
                    <GithubIcon size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/carlopizzuto" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#3A86FF] transition-colors">
            <span>View all of my projects on GitHub</span>
            <ExternalLinkIcon size={18} />
          </a>
        </div>
      </div>
    </section>;
};