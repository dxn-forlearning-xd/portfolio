import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title_1={'About'}
        title_2={'Me'}
        description={'description11111'}
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src={'/images/user.jpg'}
              alt="profile"
              width={70}
              height={70}
              className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">a passionate developer</h3>{' '}
          <p className="text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            odit animi! Rem suscipit id eaque laborum quae, dolorum vero sequi
            nihil architecto iure, consequatur aperiam laudantium molestiae
            aliquid fugit! Possimus.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            odit animi! Rem suscipit id eaque laborum quae, dolorum vero sequi
            nihil architecto iure, consequatur aperiam laudantium molestiae
            aliquid fugit! Possimus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
