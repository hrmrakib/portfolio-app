"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Learning.scss";

const Learning = ({ learning }: any) => {
  return (
    <>
      <div className='app__learning'>
        <h3>I am Learning .... </h3>
        <div className='app__skills-container'>
          <motion.div className='app__skills-list'>
            {learning?.map((skill: any) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ opacity: [0, 2] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={skill.name}
              >
                <div
                  className='app__flex'
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <Image
                    src={skill.icon}
                    width={80}
                    height={80}
                    className='app__skills-img'
                    alt={skill.name}
                  />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Learning;
