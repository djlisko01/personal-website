import InfoCircle from "../other/InfoCircle";
import SocialLinks from "../SocialLinks";
import { useState, useEffect } from "react";
import {
  computerSVG,
  dataBaseSVG,
  codeSVG,
  forkLinkSVG,
} from "../../public/icons";

const AboutView = () => {
  const test = {
    frontEnd: { p: "Front End", color: "rgba(255, 89, 94, 0.3)" },
    backEnd: { p: "Back end", color: "#ffca3a" },
  };
  const [currentSkill, setCurrentSkill] = useState("frontEnd");
  const [showSkill, setShowSkill] = useState(test[currentSkill]);

  useEffect(() => {
    const test = {
      frontEnd: { p: "Front End", color: "rgba(255, 89, 94, 0.3)" },
      backEnd: { p: "Back end", color: "rgba(255, 202, 58, 0.3)" },
      dataBases: { p: "Data Bases", color: "rgba(25, 130, 196, 0.3)" },
      other: { p: "other", color: "rgba(106, 76, 147, 0.3)" },
    };

    setShowSkill(test[currentSkill]);
  }, [currentSkill]);

  return (
    <div className="container aboutMe mt-5">
      <div className="row">
        <SocialLinks />
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            assumenda porro, sed harum aliquid similique blanditiis! Assumenda
            quod commodi aliquam, debitis fugit eius provident minima placeat
            optio! Fuga perspiciatis dolore error enim tempore atque nam
            pariatur ea molestias dolorem hic vitae eligendi laboriosam, sed
            sequi ipsam consequatur. Est, consequatur? Voluptatibus?
          </p>

          <div id="skills">
            <h2 className="mt-5">Full Stack Skills</h2>
            <div className="skillCircleBlock mt-3 col-lg-8">
              <InfoCircle
                item={computerSVG}
                bgColor="#ff595e"
                newState="frontEnd"
                setState={setCurrentSkill}
              />
              <InfoCircle
                item={dataBaseSVG}
                bgColor="#ffca3a"
                newState="backEnd"
                setState={setCurrentSkill}
              />
              <InfoCircle
                item={codeSVG}
                bgColor="#1982c4"
                newState="dataBases"
                setState={setCurrentSkill}
              />
              <InfoCircle
                newState="other"
                setState={setCurrentSkill}
                item={forkLinkSVG}
                bgColor="#6a4c93"
              />
            </div>
            <div
              className="skillDescription mt-3 p-4"
              style={{ backgroundColor: showSkill.color }}
            >
              {showSkill.p}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
