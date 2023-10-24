import React from "react";
import "./Work.scss";
import { AppWrapper } from "@/wrapper";
import { getWorks } from "@/sanity/sanity.utils";
import WorkBox from "./WorkBox";

const Work = async () => {
  const works = await getWorks();

  return (
    <div>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span> Section
      </h2>

      <WorkBox works={works} />
    </div>
  );
};

export default AppWrapper(Work, "work", "app__primarybg");
