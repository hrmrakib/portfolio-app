"use client";
import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { projects } from "@/constants";

import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";

const Portfolio = () => {
  const [projectLength, setProjectLength] = useState<number>(6);
  const [selectedTag, setSelectedTag] = useState<string>("");
 
  const filteredProjects = selectedTag ? projects.filter((pro)=> pro.tags.includes(selectedTag)) : projects;

  const handleTagClick = (tag:string)=> {
    setSelectedTag(tag)
    setProjectLength(3)
  }

  return (
    <section id='portfolio' className='my-12 lg:my-32'>
      <div>
        <h3 className='text-[#55e6a5] text-xl font-medium mb-3'>
          My Recent Portfolio
        </h3>
        <h2 className='text-3xl lg:text-5xl font-semibold text-white leading-normal'>
          Elevate your brand to new heights with our portfolio expertise
        </h2>
      </div>
      

      <div className='my-14'>
      <ul className='flex items-center flex-wrap justify-center gap-3 *:bg-white *:px-4 *:py-2 *:text-gray-800 *:rounded-lg'>
        <li className='cursor-pointer' onClick={()=> handleTagClick('HTML, CSS')}>HTML, CSS</li>
        <li className='cursor-pointer' onClick={()=> handleTagClick('React.js')}>React.js</li>
        <li className='cursor-pointer' onClick={()=> handleTagClick('Next.js')}>Next.js</li>
        <li className='cursor-pointer' onClick={()=> handleTagClick('MERN')}>MERN</li>
        <li className='!bg-blue-600 !text-white cursor-pointer' onClick={()=> handleTagClick('')}>All</li>
      </ul>
      </div>

      <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {filteredProjects.slice(0, projectLength).map((project) => (
          <div key={project?.id}>
            <BackgroundGradient className='relative rounded-[22px] w-full min-h-[440px] p-4 sm:p-10 bg-white dark:bg-zinc-900'>
              <Image
                src={project?.image}
                alt={project?.name}
                height={550}
                width={440}
                className='object-cover h-[220px] rounded-md'
              />
              <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>
                {project?.name}
              </p>

              <p className='text-base text-neutral-600 dark:text-neutral-400'>
                {project?.description}
              </p>
              <div className='max-w-max rounded-full pl-2 pr-1 py-1 text-white flex justify-end items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800'>
                <span className='bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white'>
                {project?.tags}
                </span>
              </div>

              {/* external link */}
              <div className='flex gap-3 absolute top-4 right-4'>
                <div className='live-link'>
                  <a
                    href={project?.liveLink}
                    aria-label='Spotify'
                    data-link='live'
                    target='_blank'
                  >
                    <div className='filled'></div>
                    <FaEye className='text-base text-gray-700 z-50 icon' />
                  </a>
                  <div className='tooltip'>Live Preview</div>
                </div>
                <div className='live-link'>
                  <a
                    className='hover:text-white'
                    href={project?.githubLink}
                    aria-label='Spotify'
                    data-link='code'
                    target='_blank'
                  >
                    <div className='filled'></div>
                    <FaGithub className='text-base text-gray-700 z-50 icon' />
                  </a>
                  <div className='tooltip'>Source Code</div>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      {filteredProjects.length >= projectLength ? (
        <div className='mt-10 flex justify-center items-center'>
          <button
            onClick={()=> setProjectLength((prev) => prev + 3)}
            type='button'
            className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            Show More
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default Portfolio;
