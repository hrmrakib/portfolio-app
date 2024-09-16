import { GoDotFill } from "react-icons/go";
import { services } from "@/constants";
import { Meteors } from "../components/ui/meteors";
import Image from 'next/image';

export const ThreeDot = () => {
  return (
    <div className='absolute flex top-5 right-5 *:text-3xl'>
      <GoDotFill className='text-red-600 text-sm' />
      <GoDotFill className='text-yellow-600 text-sm' />
      <GoDotFill className='text-green-600 text-sm' />
    </div>
  );
};

const Service = () => {
  return (
    <>
      <section id='service' className='my-12 lg:my-32'>
        <div className='text-center'>
          <h3 className='text-[#55e6a5] text-2xl mb-3 mt-12'>MY SERVICE</h3>
          <h2 className='text-3xl lg:text-5xl font-bold text-white leading-snug max-w-[790px] mx-auto'>
            Bringing your vision to life with precision and passion
          </h2>
        </div>

        {/* <!-- service card --> */}

        <div className='my-12 lg:my-32 grid gap-8 grid-cols-1 lg:grid-cols-3 *:mb-12'>
        {
            services.map((service)=> (

    <div key={service.id} className='bg-[#09101A] p-6 relative rounded-lg transition duration-200 delay-100 hover:-translate-y-12'>
      <div className="w-full relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {service?.title}
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          {service?.description}
             </p>
 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          <Meteors number={20} />
        </div>
      </div>
      <Image
          className='w-20 h-20 absolute -top-16 rounded-xl'
          src={service?.img}
          width={100}
          height={100}
          alt='service'
          />
          <ThreeDot />
          </div>

        ))
        }                    
        </div>
                
      </section>
    </>
  );
};

export default Service;
