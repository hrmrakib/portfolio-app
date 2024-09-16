import Link from 'next/link';
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";

const page = ({ params }: { params: { slug: string } }) => {

  const blog = ''
  return (
    <div className='relative bg-[#09101A] min-h-screen'>
      <Link
        href='/'
        className='absolute left-3 top-2 border border-pink-400 rounded-full p-2'
        title='Go to Home'
      >
        <IoHomeOutline className='text-2xl text-purple-600' />
      </Link>
      <div className='w-[94%] lg:w-[70%] mx-auto pt-20'>
        {/* <img className='rounded w-full h-48 lg:h-96' src={blog?.image} alt='' /> */}

        {/* title */}
        <h2 className='text-2xl lg:text-4xl text-gray-200 my-5'>
          {/* {blog?.headingTitle} */}
        </h2>

        {/* <p className='lg:text-xl text-gray-300 my-5'>{blog?.summery}:</p> */}

        {/* <ul className='py-7'>
          {blog?.points?.map((point, i) => (
            <ol key={point._id} type='1' className='mb-8'>
              <h2 className='text-lg text-gray-300 font-semibold'>
                {i + 1}. {point?.title}:
              </h2>
              <p className='text-gray-400 pl-6 mt-2'>{point?.description}</p>
            </ol>
          ))}
        </ul> */}
      </div>
    </div>
  )
}

export default page