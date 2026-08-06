"use client";

import { MdVisibility } from "react-icons/md";
import { FlipWords } from "../components/ui/flip-words";
import { Meteors } from "../components/ui/meteors";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroContent = () => {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "AI-Driven Developer",
  ];

  return (
    <>
      <section
        id='home'
        className='relative overflow-hidden bg-background text-foreground min-h-screen flex items-center justify-center'
      >
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-100 via-background to-background z-0'></div>
 
        <div className='relative z-10 w-full container mx-auto p-6 md:py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between'>
          <div className='w-full lg:w-1/2'>
            <h3 className='text-primary-500 font-semibold tracking-widest uppercase mb-2 text-sm md:text-base'>
              Welcome to my portfolio
            </h3>
            <h1 className='text-4xl md:text-6xl lg:text-7xl text-white font-extrabold leading-tight tracking-tight mb-4'>
              Hi, I&apos;m <span className="text-gradient">Rakibul</span>!
              <br />
              Creative
            </h1>

            <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-dark-100 flex items-center'>
              <FlipWords words={words} className='text-primary-500 font-semibold px-0' />
            </h2>
            
            <p className='text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed mb-8'>
              I specialize in building scalable, user-focused web applications
              that balance performance, usability, and clean architecture. I
              approach development with a focus on clarity, efficiency, and
              long-term maintainability.
            </p>
            
            <div className='flex gap-4 items-center'>
              <a
                href='https://drive.google.com/file/d/1bu30zyk0laiw-CuLvNIRmzqv1EYWbtGS/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                type='button'
                className='text-white inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-500/50 shadow-glow font-medium rounded-full text-base px-8 py-3.5 transition-all duration-300'
              >
                Review Resume <MdVisibility className='text-xl' />
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white font-medium px-6 py-3 transition-colors duration-300">
                View Work
              </a>
            </div>
          </div>

          <div className='w-full lg:w-1/2 relative hidden lg:flex justify-center items-center h-[500px] lg:h-[600px]'>
            {/* Center Glowing Orb */}
            <div className="absolute w-[300px] h-[300px] bg-primary-500/20 rounded-full blur-3xl shadow-glow"></div>

            {/* Orbiting Rings */}
            <div className="absolute w-[280px] h-[280px] border border-dark-100/50 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[420px] h-[420px] border border-primary-500/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

            {/* Main Center Icon - React */}
            <motion.div 
              className='relative z-20 w-32 h-32 bg-dark-200/60 backdrop-blur-md rounded-full border border-dark-100 shadow-glass flex items-center justify-center p-6'
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Image className='w-full h-full object-contain animate-[spin_10s_linear_infinite]' width={300} height={300} src='/react.png' alt='React' />
            </motion.div>

            {/* Orbiting Icons */}
            {/* Go */}
            <motion.div 
              className='absolute right-[15%] top-[10%] w-24 h-24 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-dark-100 shadow-glass flex items-center justify-center p-4'
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
            >
              <Image className='w-full h-full object-contain' width={400} height={400} src='/tech/go-lang.png' alt='Go' />
            </motion.div>

            {/* Node.js */}
            <motion.div 
              className='absolute left-[10%] top-[25%] w-20 h-20 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-dark-100 shadow-glass flex items-center justify-center p-4'
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            >
              <Image className='w-full h-full object-contain' width={200} height={200} src='/tech/nodejs.png' alt='Node.js' />
            </motion.div>

            {/* MongoDB */}
            <motion.div 
              className='absolute left-[20%] bottom-[15%] w-24 h-24 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-dark-100 shadow-glass flex items-center justify-center p-4'
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
            >
              <Image className='w-full h-full object-contain' width={200} height={200} src='/tech/mongodb.png' alt='MongoDB' />
            </motion.div>

            {/* PostgreSQL */}
            <motion.div 
              className='absolute right-[20%] bottom-[10%] w-20 h-20 bg-dark-200/60 backdrop-blur-md rounded-2xl border border-dark-100 shadow-glass flex items-center justify-center p-4'
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
            >
              <Image className='w-full h-full object-contain' width={200} height={200} src='/tech/postgresql.png' alt='PostgreSQL' />
            </motion.div>

          </div>
        </div>

        <div className='absolute inset-0 pointer-events-none'>
          <Meteors number={30} className='hidden md:flex' />
        </div>
      </section>
    </>
  );
};

export default HeroContent;
