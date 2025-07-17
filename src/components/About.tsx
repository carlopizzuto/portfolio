import React from 'react';
import { CodeIcon, BookOpenIcon, CoffeeIcon } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-20 bg-[#0A1128] relative overflow-hidden">
      {/* Terminal decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3A86FF]/50 via-[#8ECAE6]/50 to-[#3A86FF]/50"></div>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <span className="text-[#3A86FF]">~/</span>about
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3A86FF]/50 to-transparent"></span>
            </h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0C1B3A]/50 border border-[#1A2A4A] rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="ml-4 text-sm text-gray-500">bash</div>
            </div>
            <div className="space-y-4 font-mono">
              <p className="text-gray-300">
                <span className="text-[#3A86FF]">$</span> cat about.txt
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm a recent Computer Science graduate from UT Dallas with a passion for
                building innovative web applications and exploring the frontiers
                of AI technology. My journey in tech started when I was 15,
                tinkering with python to create simple scripts to optimize my life.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I specialize in full-stack development with a focus on
                creating seamless user experiences and integrating AI
                capabilities into web applications. I'm particularly interested
                in how AI can enhance user interfaces and automate complex
                processes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring vintage tech,
                playing guitar, or learning to sail.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 rounded-lg p-6 hover:border-[#3A86FF]/30 hover:bg-[#0C1B3A]/50 transition-all">
              <div className="mb-4 text-[#3A86FF]">
                <CodeIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer</h3>
              <p className="text-gray-400">
                Passionate about clean code and building applications that solve
                real problems. Always exploring new technologies.
              </p>
            </div>
            <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 rounded-lg p-6 hover:border-[#3A86FF]/30 hover:bg-[#0C1B3A]/50 transition-all">
              <div className="mb-4 text-[#8ECAE6]">
                <BookOpenIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learner</h3>
              <p className="text-gray-400">
                Constantly expanding my knowledge through courses,
                documentation, and hands-on projects. Learning is a lifelong
                journey.
              </p>
            </div>
            <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 rounded-lg p-6 hover:border-[#3A86FF]/30 hover:bg-[#0C1B3A]/50 transition-all">
              <div className="mb-4 text-[#FFD700]">
                <CoffeeIcon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creator</h3>
              <p className="text-gray-400">
                Love bringing ideas to life through code. Set on finding the perfect
                balance between functionality and design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};