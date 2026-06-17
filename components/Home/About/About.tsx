import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div id="about" data-aos="fade-up">
        <SectionHeading title_1={'About'} title_2={'Me'} description="" />
        <div className="grid w-[80%] mx-auto md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden p-2">
              <Image
                src={'/images/profile.jpg'}
                alt="profile"
                width={1238}
                height={1280}
                className="w-full h-full object-center rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I focus on building interactive frontend applications using React
              and TypeScript. My work involves developing UI-heavy features and
              handling real-world application logic such as asynchronous data
              flows, state management, and multi-step user interactions. I am
              currently building personal projects to strengthen practical
              frontend engineering skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
