import React from "react";
import "./About.scss";
import { getAbouts } from "@/sanity/sanity.utils";
import Box from "./Box";
import { AppWrapper } from "@/wrapper";

const About = async () => {
  const abouts = await getAbouts();

  return (
    <div>
      <h2 className='head-text'>
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <Box abouts={abouts} />
    </div>
  );
};

export default AppWrapper(About, "about", "app__whitebg");
