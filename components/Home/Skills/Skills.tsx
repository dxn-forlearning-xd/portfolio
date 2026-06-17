import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';

const skillGroups = [
  {
    title: 'Core',
    highlight: true,
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)'],
  },
  {
    title: 'Frontend & State',
    highlight: true,
    skills: ['Zustand', 'REST API', 'HTML5', 'CSS3'],
  },
  {
    title: 'Styling & UI',
    highlight: false,
    skills: ['Tailwind CSS', 'Material UI', 'Ant Design', 'Chakra UI'],
  },
  {
    title: 'Tools',
    highlight: false,
    skills: ['Vite', 'Git', 'ESLint', 'Prettier'],
  },
];

const Skills = () => {
  return (
    <div className=" py-16 bg-gray-100 dark:bg-gray-900">
      <div id="skills" data-aos="fade-up">
        <SectionHeading title_1="Technical" title_2="Skills" description="" />

        <div className="grid grid-cols-2 w-[70%] mx-auto space-y-10 ">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                {group.highlight && (
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                )}
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm border
                      ${
                        group.highlight
                          ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                          : 'border-gray-300 text-gray-600 dark:text-gray-300'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
