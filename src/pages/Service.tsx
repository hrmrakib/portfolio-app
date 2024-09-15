import { GoDotFill } from "react-icons/go";
import { services } from "@/constants";

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
                <ThreeDot />
                <img
                className='w-20 h-20 absolute -top-12 rounded-xl'
                src={service?.img}
                alt=''
                />
                <h2 className='text-xl text-white mb-3 mt-10'>{service?.title}</h2>
                <p className='my-p'>{service?.description}</p>
          </div>
            ))
        }                    
        </div>
      </section>
    </>
  );
};

export default Service;
