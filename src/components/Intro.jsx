import React from "react";
import IntroArt from "./IntroArt";
import Heading from "./heading/Heading";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {HatB} from './Hats';
import ParticleHeading from "./heading/ParticleHeading";

export default function Intro() {
  return (
    <div className="flex w-full h-screen  px-8 relative swap-line">
       <div className='absolute w-full h-full '>
            <HatB sx={{transform : 'translate(100px, 2260px)'}} />
            <HatB sx={{transform : 'translate(-650px, 660px)'}} />

        </div>
      <div className="flex-none w-1/2 h-1/3 relative p-2.5 items-center justify-center m-auto  ">
        <p className="heading2" style={{fontSize : '2rem', color : 'grey', fontWeight : 'normal'}}>Hey!, </p>
        
        <Heading
          width={1000}
          height={20}
          title="It's Shabnam"
          cls="text-p_color"
          color="#FAED55"
          // size="14rem"
          scale={5}
          
          sx={{
            fontSize: "5rem",
            position : "relative",

          }}
        />
        <p className="heading2 " style={{fontSize : '3rem'}}>I&apos;m a Web Developer</p>

        <span className="flex gap-4 my-3 text-4xl items-center">
          <a className="text-p_color hover:text-s_color cursor-pointer icon" href="https://github.com/shabnamnegi2001">
            <FaGithub />
          </a>
          <a className=" text-p_color hover:text-s_color cursor-pointer icon" href="https://www.linkedin.com/in/shabnam-negi-b25743338/">
            <BsLinkedin />
          </a>
        </span>
      </div>

      <div>
        <IntroArt />
      </div>
    </div>
  );
}
