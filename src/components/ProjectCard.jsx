import React, {useRef} from "react";
import Heading from "./heading/Heading";
import Figpro from "../assets/figpro.png";


const ProjectCard = (props) => {
  const { name, description, stack, image } = props;

  const img_ref = useRef()

  const openProject = (e) =>{
    console.log('clicked')
    if(img_ref && img_ref.current){
        img_ref.current.classList.add('animate_project')
    }
  }
  const removeAnimation = (e) =>{
    if(img_ref && img_ref.current){
      img_ref.current.classList.remove('animate_project')
    }
  }
  
  return (
    <div className=" h-screen flex  items-center relative">
      <div className="w-full" >
        <Heading
          title={name}
          cls="text-s_color"
          sx={{
            fontSize: "2rem",
            
          }}
        />
        <p  className="w-3/5 text-gray-800 text-xl">{description}</p>
      </div>

      <img
        src={image}
        ref={img_ref}
        className="absolute right-[-800px] project-image"
        style={{ 
            height: "700px", 
            width: "1200px", 
            // zIndex: 0, 
            opacity : 0.3, 
            filter : 'grayscale(1)' 
        }}
      />

    </div>
  );
};

export default ProjectCard;
