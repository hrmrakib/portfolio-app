"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Work.scss";
import Image from "next/image";
import Link from "next/link";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const WorkBox = ({ works }: any) => {
  const [animateCard, setAnimateCard] = useState([{ y: 0, opacity: 1 }]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    setFilterWork(works);
  }, []);

  const handleWorkFilter = (item: any) => {
    setActiveFilter(item);

    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work: any) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <div className='app__work-filter'>
        {["UI/UX", "Web App", "MERN App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__work-portfolio'
        >
          {filterWork.map((work, index) => (
            <div className='app__work-item' key={index}>
              <div className='app__work-img app__flex'>
                <Image
                  src={work.imgUrl}
                  width={300}
                  height={290}
                  alt={`${work.name} - img`}
                />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className='app__work-hover app__flex'
                >
                  <Link href={work.projectLink} target='_blank'>
                    <motion.div
                      whileInView={{ scale: [1, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        staggerChildren: 0.5,
                      }}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </Link>
                  <Link href={work.codeLink} target='_blank'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        staggerChildren: 0.5,
                      }}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              <div className='app__work-content app__f'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default WorkBox;
