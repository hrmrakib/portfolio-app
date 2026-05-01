import { MdVisibility } from "react-icons/md";
// import handleDownload from "../lib/handleDownload";
import { useState } from "react";
import { technologies, education } from "@/constants";
import FloatingDockDemo from "@/components/SocialLink";
import Image from "next/image";

const TOPICS_PREVIEW_COUNT = 3;

const TopicsList = ({ topics }: { topics: string[] }) => {
  const [expanded, setExpanded] = useState(false);

  const hasMore = topics.length > TOPICS_PREVIEW_COUNT;
  const visibleTopics = expanded
    ? topics
    : topics.slice(0, TOPICS_PREVIEW_COUNT);

  return (
    <div className='mt-3'>
      <p className='text-white font-semibold mb-2'>Topics Covered:</p>
      <div className='flex flex-wrap gap-2'>
        {visibleTopics.map((topic, index) => {
          const isImportant = topic.includes("*");
          const cleanTopic = topic.replace("*", "");

          return (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded border ${
                isImportant
                  ? "bg-[#55e6a5] text-black border-[#55e6a5]"
                  : "bg-[#55e6a5]/10 text-[#55e6a5] border-[#55e6a5]/30"
              }`}
            >
              {cleanTopic}
            </span>
          );
        })}
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className='mt-3 flex items-center gap-1 text-sm text-[#55e6a5] hover:text-white transition-colors duration-200 cursor-pointer group'
        >
          <span className='border-b border-dashed border-[#55e6a5]/50 group-hover:border-white/50 transition-colors duration-200'>
            {expanded
              ? "Show less"
              : `Show ${topics.length - TOPICS_PREVIEW_COUNT} more topics`}
          </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          >
            <polyline points='6 9 12 15 18 9' />
          </svg>
        </button>
      )}
    </div>
  );
};

const Skill = () => {
  const [tract, setTract] = useState("technologies");

  const handleSkill = (view: string) => {
    setTract(view);
  };

  return (
    <section
      id='skill'
      className='my-12 lg:my-24 bg-[#09101A] px-8 py-10 rounded-lg'
    >
      <div className='text-center'>
        <h3 className='text-[#55e6a5] text-2xl mb-3 tracking-wide'>MY Skill</h3>
        <h2 className='text-3xl lg:text-5xl font-extrabold text-white leading-snug max-w-[790px] mx-auto'>
          Building impactful solutions through code, design, and innovation.
        </h2>
      </div>

      <div className='flex flex-col md:flex-row gap-5 justify-center my-12'>
        <a
          href='https://drive.google.com/file/d/1bu30zyk0laiw-CuLvNIRmzqv1EYWbtGS/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          type='button'
          className='text-white flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2'
        >
          <span>Review Resume</span> <MdVisibility className='text-xl' />
        </a>

        <button
          onClick={() => handleSkill("technologies")}
          type='button'
          className={`text-white ${
            tract === "technologies"
              ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
              : "bg-gray-800"
          } hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2`}
        >
          Technologies
        </button>

        <button
          onClick={() => handleSkill("education")}
          type='button'
          className={`text-white ${
            tract === "education"
              ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
              : "bg-gray-800"
          } hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2`}
        >
          Education
        </button>
        <button
          onClick={() => handleSkill("biography")}
          type='button'
          className={`text-white ${
            tract === "biography"
              ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
              : "bg-gray-800"
          } hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg  dark:shadow-lg  font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2`}
        >
          Biography
        </button>
      </div>

      {/* <!-- education content --> */}

      {tract === "education" && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          {education?.map((edu) => (
            <div key={edu.id} className='border border-gray-600 p-5 rounded-lg'>
              <h3>
                <span className='text-[#55e6a5] text-2xl'>&gt;&gt; </span>
                <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                  {edu?.title}
                </span>
              </h3>

              <div className='py-6 px-7 *:text-white'>
                <h2 className='text-2xl mb-1'>{edu?.institution}</h2>
                <h4 className='text-xl mb-2 flex items-center gap-2'>
                  {edu?.year}

                  {edu?.year.includes("Present") && (
                    <span className='text-xs bg-[#55e6a5] text-black px-2 py-0.5 rounded-full font-semibold'>
                      Ongoing
                    </span>
                  )}
                </h4>
                <p>
                  <strong>Subject:</strong> {edu?.subject}
                </p>
                <p>
                  <strong className='my-2'>University / Institute: </strong>{" "}
                  {edu?.board}
                </p>
                {edu?.location && (
                  <p className='text-sm'>
                    <strong>Location:</strong> {edu?.location}
                  </p>
                )}

                {edu?.topicCovered && edu.topicCovered.length > 0 && (
                  <TopicsList topics={edu.topicCovered} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <!-- biography  --> */}
      {tract === "biography" && (
        <div className='p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-10'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/3 w-full flex justify-center md:justify-start'>
              <Image
                src='/about/rakib.png'
                className='rounded-full size-36 md:size-48 object-cover profile'
                width={100}
                height={100}
                alt='Profile'
              />
            </div>
            <div className='md:w-2/3 w-full md:pl-8'>
              <h2 className='text-2xl lg:text-4xl text-white font-bold mb-4'>
                Md Rakibul Alam
              </h2>

              <p className='text-gray-300 mb-1'>
                <b>Role:</b> Frontend-Focused Full Stack Developer
              </p>

              <p className='text-gray-300 mb-1'>
                <b>Location:</b> Dhaka, Bangladesh
              </p>

              <p className='text-gray-300 mb-1'>
                <b>Origin:</b> Gazipur, Bangladesh
              </p>

              <p className='text-gray-300 mb-1'>
                <b>Nationality:</b> Bangladeshi (🇧🇩)
              </p>

              <p className='text-gray-300 mb-1'>
                <b>Languages:</b> Bengali, English
              </p>

              <div className='mt-4'></div>

              <FloatingDockDemo />
            </div>
          </div>
        </div>
      )}

      {/* <!-- experience and tech --> */}
      {tract === "technologies" &&
        technologies.map((group, index) => (
          <div key={index} className='mb-10'>
            <h3
              className={`text-xl mb-4 text-center font-semibold`}
              style={{ color: group.color }}
            >
              <span className='mr-2'>{group.icon}</span>
              {group.category}
            </h3>

            <div className='flex flex-wrap justify-center gap-5'>
              {group.items.map((tech, i) => (
                <div key={i} className='flex flex-col items-center'>
                  <div
                    className={`size-20 md:size-24 rounded-full mb-2 p-3 transition-all duration-300 ${
                      tech.highlight
                        ? "bg[#55e6a5]/20 border border-[#55e6a5] scale-105"
                        : "bg-[#2F3046]"
                    }`}
                  >
                    <Image
                      className='w-full h-full object-contain rounded-3xl'
                      src={tech.image}
                      width={100}
                      height={100}
                      alt={tech.name}
                    />
                  </div>

                  <span
                    className={`max-w-32 text-sm text-center ${
                      tech.highlight ? "text-[#55e6a5]" : "text-white"
                    }`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Skill;
