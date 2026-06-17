import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import { projects } from '../../../data';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div id="projects" data-aos="fade-up">
        <SectionHeading title_1="Feartured" title_2="Projects" description="" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
