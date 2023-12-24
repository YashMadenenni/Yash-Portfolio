import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "../Tech.css";

import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* <div className='flex flex-row flex-wrap justify-center gap-10'>
       {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div> */}

      <motion.div variants={textVariant()} className="">
        <p className={`${styles.sectionHeadText} text-center`}>Skills</p>
      </motion.div>
      <div className=" flex sm:flex-col flex-col">
        <TechCircle type={"front-end"} delay={0.5} />
        <TechCircle type={"back-end"} delay={1} />
        <TechCircle type={"Databases"} delay={1.5} />
        <TechCircle type={"tools"} delay={2} />
        <TechCircle type={"practices"} delay={2.5} />
      </div>
    </>
  );
};

const TechCircle = ({ type, delay }) => {
  return (
    <div>
      <motion.div variants={fadeIn("up", "spring", delay, 1)} className="mt-5">
        <p className={`${styles.sectionSubText} text-center my-auto mb-5 `}>
          {type}
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-9 px-2">
        {technologies.map((tech, index) =>
          tech.type === type ? (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.1, 1)}
              className="w-12"
              key={index}
            >
              <div className=" h-12  bg-white rounded-3xl ">
                <img
                  src={tech.icon}
                 
                  className=" p-1 w-full rounded-2xl h-12"
                ></img>
              </div>
              <p 
              className={`  text-center text-[12px] text-secondary `}> 
              {/* ${type === "front-end" ? "blue-text-gradient":
              (type === "back-end" ?"green-text-gradient":
              (type === "Databases" ? "pink-text-gradient":""))} */}
                {tech.name}
              </p>
            </motion.div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
