import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

import React from "react";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background:   `#1d1836`, color: "#fff" }}
    contentArrowStyle={{ broadRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg,  }} //width: "40px", height: "40px",  marginLeft:"-20px"
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[70%] h-[70%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
      <h5 className=" text-[14px] text-right font-normal italic">
        {experience.job_type ? experience.job_type : ""}
      </h5>
      <h3 className="text-secoundary text-[15px] !important ">{experience.company_name}</h3>
    </div>

    {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul> */}
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience <span className=" font-normal sm:text-[75px] text-[40px] sm:italic">|</span>{" "}
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
