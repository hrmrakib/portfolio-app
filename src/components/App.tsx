import dynamic from 'next/dynamic';

import HeroContent from "./HeroContent";
import About from "../pages/About";
import Service from "../pages/Service";
import Skill from "@/pages/Skills";
// import Portfolio from "@/pages/Portfolio";
// import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Footer from "./Footer";

const Portfolio = dynamic(() => import('@/pages/Portfolio'));
const Blog = dynamic(() => import('@/pages/Blog'));


const App = () => {
  return (
    <div className='w-full bg-black overflow-y-scroll'>
      <HeroContent />
      <div className='p-4 lg:px-12'>
        <About />
        <Service />
        <Skill />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
