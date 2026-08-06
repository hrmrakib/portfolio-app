import dynamic from "next/dynamic";

import HeroContent from "./HeroContent";
import About from "../pages/About";
import Service from "../pages/Service";
import Skill from "@/pages/Skills";
// import Portfolio from "@/pages/Portfolio";
// import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Footer from "./Footer";
import Experience from "@/pages/Experience";

const Portfolio = dynamic(() => import("@/pages/Portfolio"));
const Blog = dynamic(() => import("@/pages/Blog"));

const App = () => {
  return (
    <div className='w-full bg-background overflow-y-scroll overflow-x-hidden relative'>
      <HeroContent />
      <div className='w-full container mx-auto'>
        <About />
        <Service />
        <Skill />
        <Experience />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
