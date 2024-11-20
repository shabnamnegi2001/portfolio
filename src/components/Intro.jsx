import React from "react";
import IntroArt from "./IntroArt";
import Heading from "./heading/Heading";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {HatA, HatB, HatC} from './Hats';

export default function Intro() {
  return (
    <div className="flex w-full h-screen  px-8 relative">
      <div className="flex-none w-1/2 h-1/4 relative p-2.5 items-center justify-center m-auto  ">
        <p className="text-2xl">Hi, there</p>
        <Heading
          title="Shabnam Negi"
          cls="text-p_color"
          sx={{
            fontSize: "3.6rem",
          }}
        />
        <p className="text-4xl my-2">I'm a Learner</p>

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
      <div className='absolute w-full h-full '>
            {/* <HatA sx={{transform : 'translate(-200px, 120px)'}} /> */}
            {/* <HatB sx={{transform : 'translate(-200px, 120px)'}} /> */}
            {/* <HatC sx={{transform : 'translate(100px, -20px)'}} /> */}
            <HatB sx={{transform : 'translate(100px, 2260px)'}} />
            <HatB sx={{transform : 'translate(-650px, 660px)'}} />

        </div>

    </div>
  );
}
