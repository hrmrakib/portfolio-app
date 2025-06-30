import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";

const About = () => {
  const words = [
    "Problem Solver",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
  ];

  return (
    <section id='about' className='my-12 lg:my-32'>
      <div>
        <h3 className='text-[#55e6a5] text-xl font-medium mb-3'>About Me</h3>
        <h2 className='lg:max-w-[70%] text-2xl lg:text-5xl font-semibold text-white leading-normal'>
          Transforming ideas into impactful digital experiences through design
          and innovation.
        </h2>
      </div>

      <div className='grid gap-20 lg:gap-36 lg:grid-cols-2 my-16'>
        <div className='grid gap-20'>
          <div>
            <Image
              className='w-28 mb-8'
              width={200}
              height={200}
              src='/about/ambition.png'
              alt='ambition'
            />
            <h2 className='text-3xl font-semibold text-white mb-3'>
              My Ambition
            </h2>
            <p className='my-p'>
              As a passionate software developer, I’m committed to building
              visually stunning and highly user-centric websites. I thrive in
              collaborative, fast-paced environments and aim to leverage modern
              technologies to deliver innovative and impactful digital
              solutions.
            </p>
          </div>
          <div>
            <Image
              className='w-28 mb-8'
              width={200}
              height={200}
              src='/about/target.png'
              alt='target'
            />
            <h2 className='text-3xl font-semibold text-white mb-3'>
              My Purpose
            </h2>
            <p className='my-p'>
              To utilize my creativity and technical skills in web development
              to create impactful digital experiences, collaborating with
              diverse teams and staying ahead in a dynamic industry to drive
              meaningful innovation.
            </p>
          </div>
        </div>

        <div className='relative w-full h-[350px] md:h-auto about-bg bg-center bg-cover rounded-md'>
          <div className='p-8 text-white'>
            <h2 className='text-xl md:text-4xl mb-1'>Md Rakibul Alam</h2>
            <h3 className='text-sky-500 text-xl mb-2 font-semibold'>
              <FlipWords words={words} className='text-sky-500' /> <br />
            </h3>
            <p className='text-pink-300'>Dhaka, Bangladesh</p>
          </div>

          <div className='w-20 md:w-36 absolute bottom-2 right-2  rounded-full shadow-[0_35px_60px_-15px_rgba(100,00,220,0.3)]'>
            <Image
              className='w-20 md:w-36 profile'
              width={200}
              height={200}
              src='/about/rakib.png'
              alt='Rakibul'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
