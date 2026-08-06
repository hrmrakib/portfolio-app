import { experiences } from "@/constants";
import { calculateDuration } from "@/lib/calculateDuration";
import React from "react";

export default function ExperienceSection() {
  return (
    <section
      id='experience'
      className='my-12 lg:my-32 px-4 lg:px-8 py-10 relative'
    >
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h3 className='text-primary-500 font-semibold tracking-widest uppercase mb-3 text-sm md:text-base'>
            Professional Experience
          </h3>
          <h2 className='text-3xl lg:text-5xl font-extrabold text-white leading-snug max-w-3xl mx-auto tracking-tight'>
            Creating impactful, user-focused, and reliable web solutions.
          </h2>

          <h3 className='text-gray-400 mt-6 font-medium'>
            Total Experience: {calculateDuration("Jun, 2024 - Present")}
          </h3>
        </div>

        {/* Desktop Timeline */}
        <div className='hidden lg:block relative mt-12'>
          {/* Vertical line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500/0 via-primary-500/50 to-primary-500/0'></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex justify-between items-center w-full group ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className='w-5/12'></div>
              <div className='w-2/12 flex justify-center relative'>
                {/* Glowing Node */}
                <div className='w-4 h-4 bg-primary-500 rounded-full shadow-glow z-10 transition-transform duration-300 group-hover:scale-150'></div>
              </div>
              <div className='w-5/12'>
                <div className='glass-card p-8 hover:-translate-y-1 transition-all duration-300 hover:border-primary-500/50'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {exp.title}
                  </h3>
                  <p className='text-primary-500 font-semibold text-lg'>{exp.company}</p>
                  <p className='text-sm text-gray-400 mt-1 flex items-center gap-2'>
                    <span>{exp.period}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span>{calculateDuration(exp.period)}</span>
                  </p>
                  <p className='text-gray-300 mt-4 leading-relaxed whitespace-pre-line'>
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className='lg:hidden relative mt-10 ml-4'>
          {/* Vertical line */}
          <div className='absolute left-[7px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500/0 via-primary-500/50 to-primary-500/0'></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className='mb-8 flex justify-start items-start w-full relative'
            >
              {/* Node */}
              <div className='absolute left-0 top-6 w-4 h-4 bg-primary-500 rounded-full shadow-glow z-10'></div>
              
              <div className='w-full pl-10'>
                <div className='glass-card p-6'>
                  <h3 className='text-xl font-bold text-white mb-1'>
                    {exp.title}
                  </h3>
                  <p className='text-primary-500 font-semibold'>{exp.company}</p>
                  <p className='text-sm text-gray-400 mt-1 mb-3'>
                    {exp.period} • {calculateDuration(exp.period)}
                  </p>
                  <p className='text-gray-300 leading-relaxed text-sm'>
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
