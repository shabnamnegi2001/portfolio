import React, { useEffect } from "react";
// import Darkreader from "react-darkreader";
import { Switch, useDarkreader } from "react-darkreader";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const LeftLine = () => {
  const [isDark, { toggle }] = useDarkreader(true);
 

  return (
    <div className="w-full h-full relative">
      <div className=" fixed top-left-option" style={{zIndex : 10000}}>
        {/* <div className="change-theme-bubble">
        </div> */}
        <span className="flex flex-col gap-2 px-8 text-4xl items-center">
            <div className="v-line"></div>
          <a className="text-p_color hover:text-s_color cursor-pointer icon" href="https://github.com/shabnamnegi2001">
            <FaGithub />
          </a>
          <div className="v-line"></div>

          <a className=" text-p_color hover:text-s_color cursor-pointer icon" href="https://www.linkedin.com/in/shabnam-negi-b25743338/" >
            <BsLinkedin />
          </a>
          <div className="v-line"></div>

          <a className=" text-p_color hover:text-s_color cursor-pointer icon" onClick={toggle} >
            {isDark ? <MdDarkMode /> : <MdLightMode />}
          </a>
        </span>
      </div>
      <div className="left-line bg-p_color"></div>
    </div>
  );
};

export default LeftLine;
