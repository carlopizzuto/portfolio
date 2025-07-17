import React from 'react';

type Skill = {
  name: string;
  level: number;
};

export const Skills = () => {
  const frontendSkills = [{
    name: 'React',
    level: 90
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'TypeScript',
    level: 85
  }, {
    name: 'HTML/CSS',
    level: 80
  }, {
    name: 'Tailwind CSS',
    level: 70
  }];
  const backendSkills = [{
    name: 'Python',
    level: 95
  }, {
    name: 'Node.js',
    level: 85
  }, {
    name: 'SQL',
    level: 80
  }, {
    name: 'FastAPI',
    level: 75
  }, {
    name: 'Django',
    level: 70
  }];
  const aiSkills = [{
    name: 'AI APIs',
    level: 85
  },{
    name: 'TensorFlow',
    level: 80
  }, {
    name: 'PyTorch',
    level: 75
  }, {
    name: 'Data Analysis',
    level: 75
  }, {
    name: 'C/C++',
    level: 65
  }];
  const renderSkillBar = (skill: Skill, index: number) => <div key={index} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-[#3A86FF] text-xs">{skill.level}%</span>
      </div>
      <div className="h-2 bg-[#0C1B3A] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#3A86FF] to-[#8ECAE6] rounded-full" style={{
        width: `${skill.level}%`,
        transition: 'width 1s ease'
      }}></div>
      </div>
    </div>;
  return <section id="skills" className="py-20 bg-[#0A1128]/95 relative">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(0deg,transparent_24px,rgba(58,134,255,0.3)_25px,transparent_26px),linear-gradient(90deg,transparent_24px,rgba(58,134,255,0.3)_25px,transparent_26px)] bg-[size:25px_25px]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <span className="text-[#3A86FF]">~/</span>skills
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3A86FF]/50 to-transparent"></span>
            </h2>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My technical toolkit includes a range of technologies across the
            full stack, with a special focus on AI integration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 p-6 rounded-lg hover:border-[#3A86FF]/30 transition-all">
            <h3 className="text-xl font-semibold mb-6 text-white">
              <span className="text-[#3A86FF]">01.</span> Frontend
            </h3>
            {frontendSkills.map(renderSkillBar)}
          </div>
          <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 p-6 rounded-lg hover:border-[#3A86FF]/30 transition-all">
            <h3 className="text-xl font-semibold mb-6 text-white">
              <span className="text-[#3A86FF]">02.</span> Backend
            </h3>
            {backendSkills.map(renderSkillBar)}
          </div>
          <div className="bg-[#0C1B3A]/30 border border-[#1A2A4A]/50 p-6 rounded-lg hover:border-[#3A86FF]/30 transition-all">
            <h3 className="text-xl font-semibold mb-6 text-white">
              <span className="text-[#3A86FF]">03.</span> AI & ML
            </h3>
            {aiSkills.map(renderSkillBar)}
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-white">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['Linux', 'Git', 'Docker', 'AWS', 'GCP', 'GraphQL', 'CI/CD', 'Figma', 'VS Code', 'Vim'].map((tool: string, index: number) => <span key={index} className="px-4 py-2 bg-[#0C1B3A]/50 border border-[#1A2A4A] rounded-md text-gray-300 hover:text-[#3A86FF] hover:border-[#3A86FF]/50 transition-all">
                {tool}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};