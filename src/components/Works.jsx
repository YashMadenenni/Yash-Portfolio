import React from "react";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 3)} viewport={{ once: true, amount: 0.3}}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gradient-to-r
        from-[#527886a3] via-[#4a7c8c8e] to-[#3e648ee2]  p-5 rounded-2xl sm:w-[360px] w-full h-[530px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 
              rounded-full flex justify-center 
              items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px] text-justify">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 h-10 items-end">
          { tags.map((tag) => (
            <p key={tag.name} 
            className={`text-[16px] ${tag.color}`}>
              #{tag.name}</p>
          ))

          }
          
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>

      <div className="w-full  justify-center sm:flex hidden ">
        <motion.p
          variants={fadeIn("up", "spring", 0.3, 2)}
          className="mt-1 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is brefly described with
          links to code repositories. It refelects my ability to work with a
          wide range of languages and frameworks, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// export default Works;

 export default SectionWrapper(Works, "works");
