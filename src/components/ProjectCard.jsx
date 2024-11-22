import React, { useEffect, useRef, useState, useMemo } from "react";
import Heading from "./heading/Heading";
import Figpro from "../assets/figpro.png";
import { CgPlayButtonR } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { SiRadixui } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";




const ProjectCard = (props) => {
  const { name, description, stack, image, live, source } = props;

  const img_ref = useRef();

  const [isPlaying, setPlaying] = useState(false);
  const is_playing = useRef(false)

  const openProject = (e) => {
    if (img_ref && img_ref.current) {
      img_ref.current.classList.add("animate_project");
    }
  };

  const stackMap = useMemo(() => {

    return{
    "Next JS" : <SiNextdotjs title="Next JS"  className="icon"/>,
    "Javascript" : <FaJs className="icon" title="Javascript" />,
    "CSS" : <IoLogoCss3  className="icon" title="CSS"/>,
    "HTML" : <IoLogoHtml5 className="icon" title="HTML" />,
    "Radix UI" : <SiRadixui  className="icon" title="Radix UI" />
  }

  }, [])

  const handleProjectClose = (e) => {
    console.log('12 handle project', e.target)

    if( is_playing.current &&   !e.target.closest('.play-btn') && ! e.target.closest('.project-image')
    ){
      
      console.log('handle project', e.target.closest('.project-image'))
      img_ref.current.classList.remove("play-project-position")
      setPlaying(false)
      window.removeEventListener('click', this)
    }
  }
  // const removeAnimation = (e) => {
  //   if (img_ref && img_ref.current) {
  //     img_ref.current.classList.remove("animate_project");
  //     img_ref.current.classList.add("project-image");

  //     window.addEventListener('click', handleProjectClose)

  //   }
  // };

  useEffect(( ) => {
    is_playing.current = isPlaying

  }, [isPlaying])
  
  const moveProject = (e) => {

    if (img_ref.current) {
      img_ref.current.classList.add("play-project-position");
      window.addEventListener('click', handleProjectClose)
      setPlaying(() => {
        return true
      })

    }
  };
  
  return (
    <div className=" h-screen flex  items-center relative swap-line">
      <div className="w-full">
        <Heading
          title={name}
          cls="text-s_color"
          sx={{
            fontSize: "3.2rem",
            display : 'inline-flex'
          }}
        />
        <a  className="text-p_color" style={{display : 'inline-flex'}} href={source}>
        <FaExternalLinkAlt />
        </a>
        <p className="w-3/5 text-gray-800 text-xl">{description}</p>
        <p>
        </p>
        <p className="flex text-4xl m-2 py-4 gap-4 text-p_color  item-center">

        {
         stack?.map((val) => stackMap[val]) 
        }
        </p>

      </div>

      <div
        className="text-p_color absolute right-[-800px] project-image"
        ref={img_ref}
      >
        {
          <CgPlayButtonR
          className="absolute play-btn"
          onClick={moveProject}
          style={{
            top: "40%",
            left: "5%",
            fontSize: "10rem",
            cursor: "pointer",
            zIndex: 100,
            transitionDelay : "1",
            visibility: isPlaying ? "hidden" : "visible"
          }}
        />
        }
        
        {isPlaying ? (
          <iframe src={live} style = {{height : "700px", width : "1200px", border : "1px solid", borderRadius: "16px",}} />
        ) : (
          <img
            src={image}
            className=" "
            style={{
              height: "700px",
              width: "1200px",
              borderRadius: "16px",
              border: "1px solid",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
