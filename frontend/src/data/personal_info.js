import { AiFillHtml5, React, AiFillGithub } from "react-icons/ai";
import { DiReact, DiMongodb, DiCss3, DiRedis } from "react-icons/di";
import { SiNodedotjs, SiSqlite, SiJavascript } from "react-icons/si";
import { FaBootstrap, FaJira, FaPython } from "react-icons/fa";

export const MY_INFO = {
  name: "Daniel Lisko",
  myTitle: "Full Stack Web Developer",
  myDescription:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem laudantium, assumenda ducimus tempore illum mollitia esse aliquam iste minus adipisci, ex nostrum soluta placeat, beatae quos praesentium voluptatibus ad eos!",
  aboutMe:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint itaque minima expedita reiciendis dicta dolorum, quasi voluptates ut molestiae nobis possimus voluptate nesciunt sit repudiandae, veritatis officiis ab consequuntur voluptas?",
  skills: {
    frontend: [
      {
        skill: "HTML5",
        icon: <AiFillHtml5 />,
      },
      { skill: "React JS", icon: <DiReact /> },
      { skill: "Bootstrap", icon: <FaBootstrap /> },
    ],
    backend: [
      { skill: "Node JS", icon: <SiNodedotjs /> },
      { skill: "CSS", icon: <DiCss3 /> },
    ],
    databases: [
      { skill: "MongoDB", icon: <DiMongodb /> },
      { skill: "SQLite", icon: <SiSqlite /> },
      { skill: "Redis", icon: <DiRedis /> },
    ],
    other: [
      { skill: "GitHub", icon: <AiFillGithub /> },
      { skill: "Jira", icon: <FaJira /> },
      { skill: "Python", icon: <FaPython /> },
      { skill: "JavaScript", icon: <SiJavascript /> },
    ],
  },
};
