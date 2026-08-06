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

  const filteredProjects = selectedTag
    ? projects.filter((pro) => pro.tags.includes(selectedTag))
    : projects;

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setProjectLength(6);
  };

  const filters = [
    { label: "All", value: "" },
    { label: "React.js", value: "React.js" },
    { label: "Next.js", value: "Next.js" },
    { label: "Full Stack", value: "MERN" },
  ];

  return (
    <section id='projects' className='my-12 lg:my-32 px-4 lg:px-8 relative'>
      <div className='mb-16'>
        <h3 className='text-primary-500 font-semibold tracking-widest uppercase mb-3 text-sm md:text-base'>
          My Recent Projects
        </h3>
        <h2 className='text-3xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-2xl'>
          Elevate your brand with our portfolio expertise
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className='my-12 flex justify-center'>
        <div className='inline-flex items-center p-1 bg-dark-200 border border-dark-100 rounded-full shadow-glass'>
          <button
            title='Go Lang - (Project) Coming soon'
            className='px-6 py-2.5 text-sm font-medium rounded-full text-gray-500 cursor-not-allowed transition-all'
            disabled
          >
            Go Lang
          </button>
          
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => handleTagClick(filter.value)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                selectedTag === filter.value
                  ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                  : "text-gray-400 hover:text-white hover:bg-dark-100"
              }`}
            >
              {filter.label}
              {selectedTag === filter.value && (
                <span className="ml-1.5 opacity-80 text-xs">
                  ({filter.value === "" ? projects.length : projects.filter((pro) => pro.tags.includes(filter.value)).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14'>
        {filteredProjects.slice(0, projectLength).map((project) => (
          <div key={project?.id} className="group">
            <BackgroundGradient className='relative rounded-[22px] w-full min-h-[460px] p-1 bg-dark-200 border border-dark-100'>
              <div className="bg-dark-300 rounded-[20px] p-5 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-md">
                  <Image
                    src={project?.image}
                    alt={project?.name}
                    height={550}
                    width={440}
                    className='object-cover h-[200px] w-full transform transition-transform duration-500 group-hover:scale-105'
                  />
                  
                  {/* Overlay Action Links */}
                  <div className='absolute inset-0 bg-dark-300/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    <a
                      href={project?.liveLink}
                      target='_blank'
                      rel="noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl"
                      title="Live Preview"
                    >
                      <FaEye className='text-xl' />
                    </a>
                    <a
                      href={project?.githubLink}
                      target='_blank'
                      rel="noreferrer"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl"
                      title="Source Code"
                    >
                      <FaGithub className='text-xl' />
                    </a>
                  </div>
                </div>

                <h3 className='text-xl font-bold mt-2 mb-3 text-white group-hover:text-primary-500 transition-colors'>
                  {project?.name}
                </h3>

                <p className='text-sm text-gray-400 mb-6 flex-grow leading-relaxed'>
                  {project?.description}
                </p>
                
                <div className='flex flex-wrap gap-2 mt-auto'>
                  <span className='bg-primary-900/40 border border-primary-500/20 text-primary-400 rounded-md text-xs font-semibold px-3 py-1.5'>
                    {project?.tags}
                  </span>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>

      {filteredProjects.length >= projectLength ? (
        <div className='mt-16 flex justify-center items-center'>
          <button
            onClick={() => setProjectLength((prev) => prev + 6)}
            type='button'
            className='text-white bg-dark-200 border border-dark-100 hover:bg-dark-100 hover:border-primary-500/50 font-medium rounded-full text-sm px-8 py-3.5 transition-all duration-300 shadow-glass'
          >
            Load More Projects
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default Portfolio;
