import React from "react";
import Heading from "./heading/Heading";
import FullArt from "./FullArt";
import HatBackground from "./HatBackground";

export default function About() {
  return (
    <div className="h-screen black-line-border px-8 relative w-full swap-line">
      <HatBackground />
      <div className="flex w-full items-center" style={{zIndex : 10}} >
        <div style={{zIndex : 10}}>
          <Heading
            title="About me."
            cls="text-p_color"
            sx={{
              fontSize: "3.4rem",
            }}
          />
          <p className="text-2xl text-s_color">
            Hi, I'm a freshly minted web developer who's spent more time
            debugging than sleeping (and oddly, I kind of enjoy it). Armed with
            HTML, CSS, and JavaScript, I’m on a mission to make the web
            prettier, faster, and maybe just a little less broken. When I'm not
            wrestling with code or Googling error messages, you’ll find me
            pretending to understand Stack Overflow memes. Let’s build something
            cool (and hope it works on the first try)!
          </p>
        </div>
        <div>
          <FullArt />
        </div>
      </div>
    </div>
  );
}
