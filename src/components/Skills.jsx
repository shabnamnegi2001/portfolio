import React from "react";
import Heading from "./heading/Heading";
import HatBackground from "./HatBackground";

export default function Skills() {
  return (
    <div className="h-screen black-line-border px-8 w-full flex items-center relative">
      <div className="w-full h-auto">
      <Heading
        title="Skills."
        cls="text-p_color"
        sx={{
          fontSize: "3.4rem",
        }}
      />
      <div className="grid grid-cols-[30%_30%_30%] w-full text-2xl gap-4">
        <span size="1rem" type="s">
          Javascript, &nbsp;&nbsp;Node JS&nbsp;, &nbsp;&nbsp;Express JS
        </span>
        <span size="1rem" type="s">
          React&nbsp;JS, &nbsp;&nbsp;Next JS
        </span>
        <span size="1rem" type="s">
          HTML, &nbsp;&nbsp;&nbsp;SVG
        </span>
        <span size="1rem" type="s">
          CSS3, &nbsp;Tailwind
        </span>
        <span size="1rem" type="s">
          Liveblocks, &nbsp;&nbsp;Fabric, &nbsp;&nbsp;Radix UI
        </span>
        <span size="1rem" type="s">
          Git, &nbsp;&nbsp;Git-bash
        </span>
        <span size="1rem" type="s">
          Figma
        </span>
      </div>
      </div>
      <HatBackground />
    </div>
  );
}
