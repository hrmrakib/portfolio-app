"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Footer.scss";
import Image from "next/image";
import { images } from "@/constants";
import { AppWrapper } from "@/wrapper";
import Link from "next/link";

const Footer = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nnlrt3q",
        "template_uxyu9sn",
        {
          form_name: form.name,
          to_name: "Rakibul",
          from_email: form.email,
          to_email: "hrmrakibs@gmail.com",
          message: form.message,
        },
        "Gs7Fv_51aJE_q29ue"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          console.log(err);

          alert("Something happen wrong");
        }
      );
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <Image src={images.email} alt='email' />
          <Link href='mailto:hrmrakibs@gmail.com' className='p-text'>
            hrmrakibs@gmail.com
          </Link>
        </div>
        <div className='app__footer-card'>
          <Image src={images.mobile} alt='phone' />
          <Link href='tel:+8801792-063488' className='p-text'>
            +8801792063488
          </Link>
        </div>
      </div>

      <form
        className='app__footer-form app__flex'
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className='app__flex'>
          <input
            className='p-text'
            type='text'
            placeholder="What's Your Name?"
            name='name'
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className='app__flex'>
          <input
            className='p-text'
            type='email'
            placeholder='Your Email'
            name='email'
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={form.message}
            name='message'
            required
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='p-text' value='Send'>
          {!loading ? "Send Message" : "Sending..."}
        </button>
      </form>
    </>
  );
};

export default AppWrapper(Footer, "contact", "");
