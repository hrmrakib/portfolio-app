"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Box = ({ abouts }: any) => {
  return (
    <div className='app__profiles'>
      {abouts?.map((about: any, index: any) => (
        <motion.div
          className='app__profile-item'
          key={about.title + index}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <Image
            src={about.imgUrl}
            width={300}
            height={280}
            alt={about.title}
          />
          <h2 className='bold-text' style={{ marginTop: 20 }}>
            {about.title}
          </h2>
          <p className='p-text' style={{ marginTop: 10 }}>
            {about.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Box;
