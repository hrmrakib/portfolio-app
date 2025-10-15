import { experiences } from "@/constants";
import React from "react";

export default function ExperienceSection() {
  return (
    <section
      id='experience'
      className='my-12 lg:my-24 bg-[#09101A] px-8 py-10 rounded-lg'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h3 className='text-[#55e6a5] text-2xl mb-3 tracking-wide'>
            Professional Experience
          </h3>
          <h2 className='text-3xl lg:text-5xl font-extrabold text-white leading-snug max-w-[820px] mx-auto'>
            Creating impactful, user-focused, and reliable web solutions.
          </h2>
        </div>
        {/* only desktop */}
        <div className='hidden lg:block relative mt-12'>
          {/* Vertical line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200'></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className='w-5/12'></div>
              <div className='w-2/12 flex justify-center'>
                <div className='w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow'></div>
              </div>
              <div className='w-5/12'>
                <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <h3 className='text-xl font-semibold text-gray-300'>
                    {exp.title}
                  </h3>
                  <p className='text-blue-600 font-medium'>{exp.company}</p>
                  <p className='text-sm text-gray-400 mt-1'>{exp.period}</p>
                  <p className='text-gray-400 mt-2 whitespace-pre-line'>
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* only mobile */}
        <div className='lg:hidden relative mt-10'>
          {/* Vertical line - hidden on mobile, visible on md and up */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block'></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className='w-full md:w-5/12 mb-4 md:mb-0'>
                {index % 2 === 0 && (
                  <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <h3 className='text-xl font-semibold text-gray-200'>
                      {exp.title}
                    </h3>
                    <p className='text-blue-600 font-medium'>{exp.company}</p>
                    <p className='text-sm text-gray-300 mt-1'>{exp.period}</p>
                    <p className='text-gray-300 mt-2'>{exp.description}</p>
                  </div>
                )}
              </div>
              <div className='w-full md:w-2/12 flex justify-center'>
                <div className='w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow'></div>
              </div>
              <div className='w-full md:w-5/12'>
                {index % 2 !== 0 && (
                  <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <h3 className='text-xl font-semibold text-gray-200'>
                      {exp.title}
                    </h3>
                    <p className='text-blue-600 font-medium'>{exp.company}</p>
                    <p className='text-sm text-gray-300 mt-1'>{exp.period}</p>
                    <p className='text-gray-300 mt-2'>{exp.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
