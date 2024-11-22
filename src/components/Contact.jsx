import React from "react";
import Heading from "./heading/Heading";
import FullArt from "./FullArt";
import HatBackground from "./HatBackground";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="h-screen black-line-border px-8 relative w-full swap-line flex items-center">
      <HatBackground />
      <div className="w-full items-center" style={{zIndex : 2}} >
        <Heading
          title="Contact ."
          cls="text-p_color"
          sx={{
            fontSize: "3.4rem",
          }}
        />
        <div>
          <p className="w-1/2 text-2xl">
            Feel free to reach out! Whether you have a question about my
            projects, want to discuss potential opportunities, or just want to
            connect, I’d love to hear from you. You can contact me through the
            form below or email me directly at
            <span className="text-p_color"> negishabnam37@gmail.com</span>.
          </p>
          <Heading
            title="Let’s talk!"
            sx={{
              fontSize: "2rem",
            }}
          />

          <span className="flex gap-4 my-3 text-4xl items-center">
            <a
              className="text-p_color hover:text-s_color cursor-pointer icon"
              href="https://github.com/shabnamnegi2001"
            >
              <FaGithub />
            </a>
            <a
              className=" text-p_color hover:text-s_color cursor-pointer icon"
              href="https://www.linkedin.com/in/shabnam-negi-b25743338/"
            >
              <BsLinkedin />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
