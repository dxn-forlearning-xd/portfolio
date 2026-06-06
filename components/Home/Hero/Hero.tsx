'use client';
import { Button } from '@/components/ui/button';
import { FolderOpen } from 'lucide-react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div
      className="relative min-h-screen
bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)] 
flex items-center justify-center overflow-hidden 
dark:bg-[radial-gradient(circle_farthest-corner_at_50%_52.5%,rgba(14,53,92,1)_0%,rgba(16,14,72,1)_90%)]!"
    >
      <div className="relative z-10 text-center mx-2">
        <div className="sm:mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I&apos;m{' '}
            <span className="text-cyan-600 dark:text-[#FFAE6E]">
              Xiaonan Dong
            </span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12">
            <TypeAnimation
              sequence={['aahihih', 2000, 'asdsdasd', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono"
            />
          </div>
          <p className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            sequi possimus sed sunt autem, recusandae ad commodi deleniti vero
            voluptatibus. Rerum ad nulla suscipit eaque ut quibusdam ducimus
            quas! Minus!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size={'lg'} asChild className="w-fit mx-auto sm:mx-0">
              <a href="#_">
                <FolderOpen className="w-5 h-5 mr-2" />
                View Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
