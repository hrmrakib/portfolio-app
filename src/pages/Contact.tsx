import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Successfully sent your message!");
          }
          const target = e.target as HTMLFormElement;
          (target.elements.namedItem("name") as HTMLInputElement).value = "";
          (target.elements.namedItem("email") as HTMLInputElement).value = "";
          (target.elements.namedItem("subject") as HTMLInputElement).value = "";
          (target.elements.namedItem("message") as HTMLTextAreaElement).value =
            "";
        },
        (error) => {
          toast.error(error?.message);
        }
      );
  };

  return (
    <section id='contact' className='my-12'>
      <h2 className='text-center text-3xl lg:text-4xl font-bold'>
        Take A Coffee & Chat with Me
      </h2>
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
        }}
      />

      <div className='max-w-[600px] mx-auto flex md:items-center flex-col gap-6 md:flex-row md:justify-around my-14'>
        <a
          href='mailto:hrmrakibs@gmail.com'
          className='flex items-center gap-3 bg-violet-200 opacity-80 px-3 py-2 rounded-md'
        >
          <Image
            className='w-6'
            width={25}
            height={25}
            src='/contact/mail.png'
            alt='mail'
          />
          <span className='text-gray-800'>hrmrakibs@gmail.com</span>
        </a>
        <a
          href='https://wa.me/8801792063488'
          className='flex items-center gap-3 bg-blue-200 px-3 py-2 rounded-md'
        >
          <Image
            className='w-6'
            width={25}
            height={25}
            src='/contact/call.png'
            alt='call'
          />
          <span className='text-gray-800'>+8801792063488</span>
        </a>
      </div>

      <form
        onSubmit={sendEmail}
        ref={form}
        className='flex flex-col gap-5 *:text-gray-200 *:py-3 *:px-2 *:bg-transparent *:rounded'
      >
        <input
          name='name'
          className='border border-purple-900'
          type='text'
          placeholder='Your Name'
          required
        />
        <input
          name='email'
          className='border border-purple-900'
          type='email'
          placeholder='Your Email'
          required
        />
        <input
          name='subject'
          className='border border-purple-900'
          type='text'
          placeholder='Subject'
          required
        />
        <textarea
          name='message'
          className='border border-purple-900 h-24 md:h-auto p-3 text-white'
          placeholder='Your Message'
          cols={30}
          rows={8}
          required
        ></textarea>

        <div className='flex justify-center my-8'>
          <button
            className='bg-green-500 hover:bg-green-600 text-white w-full md:max-w-max px-6 py-3 rounded-md'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
