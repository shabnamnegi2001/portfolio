import React from "react";
import Heading from "./heading/Heading";
import HatBackground from "./HatBackground";
import {projects} from "../assets/data/project"
import ProjectCard from "./ProjectCard";

const Projects = () => {

  return (

    <div className="h-auto  black-line-border px-8 w-full flex relative swap-line">
      <HatBackground />
      <div className="w-full h-auto">
        <Heading
          title="Projects."
          cls="text-p_color"
          sx={{
            fontSize: "3.4rem",
            transform : "translateY(300px)"
          }}
        />
        <div className="px-4" 
        style={{
          scrollSnapType : "y mandatory"
        }}
        >
          {
            projects?.map((project) => {

                return (
                    <ProjectCard {...project} key={project.name}/>
                )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
