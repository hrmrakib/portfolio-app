import { MdCloudDownload } from "react-icons/md";
import handleDownload from "../lib/handleDownload";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";
import { Meteors } from "../components/ui/meteors";

const HeroContent = () => {
  const words = ["Frontend Developer", "React.js Developer", "Next.js Developer", "MERN Stack Developer", "Full-Stack Developer"];

  return ( 
    <>
      <section
        id='home'  
        className='hero_area bg-[#02050A] text-[#a2a2a2] h-screen'
      >
        <div className='layer grid grid-cols-1 lg:grid-cols-3 justify-center items-center p-4 lg:p-20'>
          <div className='hero_left col-span-2'>
            <h2 className='text-2xl md:text-4xl lg:text-6xl lg:pt-8 text-white font-extrabold lg:leading-tight'>
              HI, I&apos;M Rakibul!
              <br />
              CREATIVE
            </h2>
           
      
            <h2 className='dynamic  font-bold text-xl md:text-3xl lg:text-4xl mb-5 md:mb-8'>
              <FlipWords words={words} className="text-green-500" /> <br /> 
            </h2>
            <p className='my-p max-w-lg leading-6 mb-6 text-gray-100'>
              With a fervent dedication to modern web technologies, I
              aspire to utilize my technical prowess and leadership acumen to
              propel success in dynamic tech projects, seeking an environment to
              apply my expertise and further excel in the Web Development field.
            </p>
            <button
              onClick={handleDownload}
              type='button'
              className='text-white flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm md:text-base lg:text-lg px-5 py-2.5 text-center me-2 mb-2'
            >
              Download CV <MdCloudDownload className='text-xl' />
            </button>
          </div>

          <div className='w-52 justify-self-center hidden md:flex'>
            <Image className='w-full rotate' width={300} height={300} src='/react.png' alt='' />
          </div>
        </div>

        <Meteors number={25} />
      </section>
    </>
  );
};

export default HeroContent;
