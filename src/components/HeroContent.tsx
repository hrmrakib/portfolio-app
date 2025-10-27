import { MdCloudDownload } from "react-icons/md";
import handleDownload from "../lib/handleDownload";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";
import { Meteors } from "../components/ui/meteors";

const HeroContent = () => {
  const words = [
    "Problem Solver",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
  ];

  return (
    <>
      <section
        id='home'
        className='hero_area bg-[#02050A] text-[#a2a2a2] h-screen'
      >
        <div className='relative layer grid grid-cols-1 lg:grid-cols-3 justify-center items-center p-4 lg:p-20'>
          <div className='hero_left col-span-2'>
            <h2 className='text-2xl md:text-4xl lg:text-6xl lg:pt-8 text-white font-extrabold lg:leading-tight'>
              HI, I&apos;M Rakibul!
              <br />
              CREATIVE
            </h2>

            <h2 className='font-bold text-xl md:text-3xl lg:text-4xl mb-5 lg:mb-8'>
              <FlipWords words={words} className='text-green-500' /> <br />
            </h2>
            <p className='my-p max-w-lg leading-6 mb-6 text-gray-100'>
              Driven by a passion for modern web technologies, I bring a blend
              of technical expertise and leadership skills to deliver impactful
              digital solutions. I’m committed to contributing to innovative
              projects and continuously growing in the ever-evolving field of
              software development.
            </p>
            <button
              onClick={handleDownload}
              type='button'
              className='text-white flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm md:text-base lg:text-lg px-5 py-2.5 text-center me-2 mb-2'
            >
              Download CV <MdCloudDownload className='text-xl' />
            </button>
          </div>

          <div className='absolute right-[30%] top-[3%] w-36 justify-self-center hidden lg:flex'>
            <Image
              className='w-full'
              width={400}
              height={400}
              src='/tech/go-lang.png'
              alt=''
            />
          </div>

          <div className='absolute right-[20%] top-[20%] w-24 justify-self-center hidden lg:flex'>
            <Image
              className='w-full'
              width={200}
              height={200}
              src='/tech/nodejs.png'
              alt=''
            />
          </div>

          <div className='w-32 justify-self-center hidden lg:flex'>
            <Image
              className='w-full rotate'
              width={300}
              height={300}
              src='/react.png'
              alt=''
            />
          </div>

          <div className='absolute right-[20%] bottom-[22%] w-24 justify-self-center hidden lg:flex'>
            <Image
              className='w-full'
              width={200}
              height={200}
              src='/tech/mongodb.png'
              alt=''
            />
          </div>

          <div className='absolute right-[30%] bottom-[1%] w-20 justify-self-center hidden lg:flex'>
            <Image
              className='w-full'
              width={200}
              height={200}
              src='/tech/postgresql.png'
              alt=''
            />
          </div>
        </div>

        <div className='hidden md:flex'>
          <Meteors number={25} className='hidden md:flex' />
        </div>
      </section>
    </>
  );
};

export default HeroContent;
