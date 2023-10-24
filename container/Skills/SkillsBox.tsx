"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Skills.scss";

const SkillsBox = ({ skills }: any) => {
  return (
    <>
      <div>
        <h2 className='head-text'>My Skills</h2>

        <div className='app__skills-container'>
          <motion.div className='app__skills-list'>
            {skills?.map((skill: any) => (
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

export default SkillsBox;
