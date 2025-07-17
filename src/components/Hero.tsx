import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full-Stack Engineer & AI Enthusiast';
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return <section id="home" className="min-h-screen flex flex-col justify-center relative bg-[#0A1128] overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,134,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24px,rgba(58,134,255,0.05)_25px,transparent_26px),linear-gradient(90deg,transparent_24px,rgba(58,134,255,0.05)_25px,transparent_26px)] bg-[size:25px_25px]"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-1 inline-block bg-gradient-to-r from-[#3A86FF]/20 to-[#8ECAE6]/20 rounded mb-4">
            <p className="text-[#3A86FF] bg-[#0A1128] px-3 py-1 text-sm">
              Hello, world! I'm
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Carlo Pizzuto Allende
          </h1>
          <div className="h-12 mb-6">
            <h2 className="text-xl md:text-2xl text-gray-300">
              {text}
              <span className={`inline-block w-3 h-5 ml-1 bg-[#3A86FF] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
            Building modern web applications and integrating AI solutions.
            Passionate about clean code, user experience, and real world impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-[#3A86FF]/20 hover:bg-[#3A86FF]/30 border border-[#3A86FF]/50 text-[#8ECAE6] px-6 py-3 rounded-md transition-all hover:shadow-[0_0_15px_rgba(58,134,255,0.3)]">
              View Projects
            </a>
            <a href="#contact" className="bg-transparent hover:bg-[#0C1B3A] border border-gray-600 text-gray-300 hover:text-white px-6 py-3 rounded-md transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-[#3A86FF] transition-colors">
          <ChevronDownIcon size={32} />
        </a>
      </div>
    </section>;
};