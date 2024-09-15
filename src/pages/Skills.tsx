import { MdCloudDownload } from "react-icons/md";
// import handleDownload from "../utils/handleDownload";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { technologies, education } from "@/constants";

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
          Bringing your vision to life with precision and passion
        </h2>
      </div>
      <div
        id='experience'
        className='flex flex-col md:flex-row gap-5 justify-center my-12'
      >
        <button
          //   onClick={handleDownload}
          type='button'
          className='text-white flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2'
          // className='text-white flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-[18px] px-5 py-2.5 text-center me-2 mb-2'
        >
          <span>Download CV</span> <MdCloudDownload className='text-xl' />
        </button>

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
            <div className='border border-gray-600 p-5 rounded-lg'>
              <h3>
                <span className='text-[#55e6a5] text-2xl'> &gt;&gt; </span>
                <span className='text-2xl text-white border-b-2 border-[#55e6a5]'>
                  {edu?.title}
                </span>
              </h3>
              <div className='py-6 px-7 *:text-white'>
                <h2 className='text-2xl mb-1'>{edu?.institution}</h2>
                <h4 className='text-xl mb-2'>{edu?.year}</h4>
                <p>
                  <strong>Subject:</strong> {edu?.subject}
                </p>
                <p>
                  <strong className='my-2'>University: </strong> {edu?.board}
                </p>
                <p className='text-sm'>
                  <strong>Location:</strong> {edu?.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <!-- biography  --> */}
      {tract === "biography" && (
        <div className='bg- p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-10'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/3 w-full flex justify-center md:justify-start mb-6 md:mb-0'>
              <img
                src='./about/rakib.png'
                alt='Profile'
                className='rounded-full size-36 md:size-48 object-cover profile'
              />
            </div>
            <div className='md:w-2/3 w-full md:pl-8'>
              <h2 className='text-2xl lg:text-4xl font-bold mb-4'>
                Md Rakibul Alam
              </h2>
              <p className='text-gray-300 mb-4'>
                Hello! I'm Rakibul, a passionate web developer with a love for
                creating beautiful and functional web applications. I have
                developed a strong foundation in modern web technologies. I
                enjoy working on innovative projects and constantly strive to
                improve my skills and learn new technologies.
              </p>
              <p className='text-gray-400 mb-4'>
                In my free time, I like to explore new tech trends, contribute
                to open-source projects, and enjoy outdoor activities.
              </p>
              <div className='live-link flex gap-3 *:text-xl *:border-none'>
                <a
                  className='social'
                  href='https://www.linkedin.com/in/hrmrakib/'
                  data-link='linkedin'
                >
                  <span className='filled filled2'></span>
                  <FaLinkedin className='text-xl text-black z-50 icon' />
                </a>
                <a
                  className='social'
                  href='https://www.facebook.com/hrmrakib'
                  data-link='facebook'
                >
                  <span className='filled filled2'></span>
                  <FaFacebook className='text-xl text-black z-50 icon' />
                </a>
                <a
                  className='social'
                  href='https://github.com/hrmrakib'
                  data-link='github'
                >
                  <span className='filled filled2'></span>
                  <FaGithub className='text-xl text-black z-50 icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <!-- experience and tech --> */}
      {tract === "technologies" && (
        <div>
          <h3 className='text-xl text-slate-200 text-center'>
            Which Technologies is My Hands On
          </h3>
          <div className='flex flex-wrap justify-center gap-5 my-8'>
            {technologies.map((tech) => (
              <div className='flex flex-col justify-center parent p-2'>
                <div className='size-20 md:size-24 rounded-full bg-[#2F3046] mb-2 child'>
                  <img
                    className='w-full p-4 rounded-3xl'
                    src={tech?.image}
                    alt={tech?.name}
                  />
                </div>
                <span className='text-center text-white'>{tech?.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skill;
