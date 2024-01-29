import React from "react";
import { styles } from "../styles";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";


import { textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Skills I have learned 
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Prowess
        </h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-40 h-40 rounded-full dark:md:hover:bg-amber-400 text-transparent dark:md:hover:text-amber-950 "  key={technology.name}>
          
          <div className="w-32 h-32 mt-7 ml-8  "  key={technology.icon}> 
          
            <img src={technology.icon}  />
            {technology.name}
            
           </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");