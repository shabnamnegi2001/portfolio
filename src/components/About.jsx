import React from "react";
import Heading from "./heading/Heading";
import FullArt from "./FullArt";
import HatBackground from "./HatBackground";

export default function About() {
  return (
    <div className="h-screen black-line-border px-8 relative w-full swap-line">
      <HatBackground />
      <div className="flex w-full items-center">
        <div>
          <Heading
            title="About me."
            cls="text-p_color"
            sx={{
              fontSize: "3.4rem",
            }}
          />
          <p className="text-2xl text-s_color">
            Hey 👋, my name is Shabnam Negi , a self-taught passionate Full
            stack developer from India, based in Uttarakhand with proven
            technical, organizational, and communication skills, working with
            Agile and designing software solutions. Offering strong React skills
            and working experience with SQL, Python, Django, JavaScript
            frameworks, and many more.
          </p>
        </div>
        <div>
          <FullArt />
        </div>
      </div>
    </div>
  );
}
