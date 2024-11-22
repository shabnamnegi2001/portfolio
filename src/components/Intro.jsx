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
      <div className="flex-none w-1/2 h-1/4 relative p-2.5 items-center justify-center m-auto  ">
        <p className="text-2xl">Hi, there</p>
        
        <Heading
          width={1000}
          height={210}
          title="Shabnam Negi"
          cls="text-p_color"
          color="#FAED55"
          size="134rem"
          scale={5}
          
          sx={{
            fontSize: "4.6rem",
            position : "relative",

          }}
        />
        <p className="text-4xl my-2">I&apos;m a Learner</p>

        <span className="flex gap-4 my-3 text-4xl items-center">
          <a className="hover:text-p_color cursor-pointer">
            <FaGithub />
          </a>
          <a className="hover:text-p_color cursor-pointer">
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
