import HeroContent from "./HeroContent";
import About from "../pages/About";
import Service from "../pages/Service";

const App = () => {
  return (
    <div className='w-full bg-black overflow-y-scroll'>
        <HeroContent />
        <div className='p-4 lg:px-12'>
        <About />
        <Service />
        </div> 
    </div>
  );
};

export default App;
