"use client";

import Link from "next/link";
import React, { useState } from "react";

const NavigationDots = ({ active }: any) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='app__navigation'>
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <Link
            key={index}
            className='app__navigation-dot'
            href={`#${item}`}
            onClick={() => setToggle(false)}
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          ></Link>
        )
      )}
    </div>
  );
};

export default NavigationDots;
