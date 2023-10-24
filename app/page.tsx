import { About, Header, Skills, Footer, Work, Learn } from "@/container";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Learn />
      <Footer />
    </div>
  );
}
