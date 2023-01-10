import InfoCircle from "../other/InfoCircle";
import { useState, useEffect } from "react";
import {
  computerSVG,
  dataBaseSVG,
  codeSVG,
  forkLinkSVG,
} from "../../public/icons";


import { MY_INFO } from "../../data/personal_info";
import Skill from "../other/Skill";

const AboutView = () => {
  const skills = MY_INFO.skills;
  const test = {
    frontend: { p: "Front End", color: "rgba(255, 89, 94, 0.3)" },
    backend: { p: "Back end", color: "#ffca3a" },
  };

  const [currentSkill, setCurrentSkill] = useState("frontend");
  const [showSkill, setShowSkill] = useState(test[currentSkill]);

  useEffect(() => {
    const test = {
      frontend: { p: "Front End", color: "rgba(255, 89, 94, 0.1)" },
      backend: { p: "Back end", color: "rgba(255, 202, 58, 0.1)" },
      databases: { p: "Data Bases", color: "rgba(25, 130, 196, 0.1)" },
      other: { p: "other", color: "rgba(106, 76, 147, 0.1)" },
    };
    setShowSkill(test[currentSkill]);
  }, [currentSkill]);

  const skillsListComponent = skills[currentSkill].map((skill) => {
    return <Skill skillName={skill.skill} skillIcon={skill.icon} />;
  });

  return (
    <div className="container mt-5 pt-5" id="about-me">
      <h2>About Me</h2>
      <div className="row">
        {MY_INFO.aboutMe}

        <div id="skills" className="row">
          <h2 className="mt-5">Full Stack Skills</h2>
          <div className="fullStackBlock d-flex justify-content-around mt-3 col-lg-8">
            <InfoCircle
              item={computerSVG}
              bgColor="#ff595e"
              newState="frontend"
              setState={setCurrentSkill}
            />

            <InfoCircle
              item={codeSVG}
              bgColor="#ffca3a"
              newState="backend"
              setState={setCurrentSkill}
            />
            <InfoCircle
              item={dataBaseSVG}
              bgColor="#1982c4"
              newState="databases"
              setState={setCurrentSkill}
            />
            <InfoCircle
              newState="other"
              setState={setCurrentSkill}
              item={forkLinkSVG}
              bgColor="#6a4c93"
            />
          </div>
          <div className=" mt-3 font-weight-bold" style={{ fontSize: "1.4em" }}>
            {currentSkill.toUpperCase()}
          </div>
          <div
            className="skillBlock mt-2 p-4 d-flex flex-row justify-content-center ml-3"
            style={{ backgroundColor: showSkill.color }}
          >
            {skillsListComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
