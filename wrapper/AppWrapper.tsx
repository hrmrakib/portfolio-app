import { NavigationDots, SocialMedia } from "@/components";
import React from "react";

const AppWrapper = (Component: any, idName: any, classNames: any) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
