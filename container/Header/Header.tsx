"use client";

import React from "react";

import { motion } from "framer-motion";
import "./Header.scss";
import Image from "next/image";
import { images } from "@/constants";
import { AppWrapper } from "@/wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className='app__header app__flex'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__header-info'
    >
      <div className='app__header-badge'>
        <div className='badge-cmp app__flex'>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className='p-text'>Hello, I am</p>
            <h1 className='head-text'>Rakibul</h1>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <p className='p-text'>Web Developer</p>
          <p className='p-text'>Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className='app__header-img'
    >
      <Image
        src={images.profile}
        width={200}
        height={200}
        priority={true}
        alt='profile_bg'
        className='profile'
      />
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
    >
      {[images.react, images.next, images.redux].map((circle, index) => (
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <Image src={circle} className='tech' alt='profile_bg' />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrapper(Header, "home", "");
