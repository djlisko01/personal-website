import { IconContext } from "react-icons";

const Skill = ({ skillName, skillIcon }) => {
  return (
    <div className="skill me-5 mt-auto">
      <IconContext.Provider value={{ size: "6em" }}>
        {skillIcon}
      </IconContext.Provider>
      <p className="text-center font-weight-bold">{skillName}</p>
    </div>
  );
};

export default Skill;
