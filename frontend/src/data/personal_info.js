import { AiFillHtml5, React, AiFillGithub } from "react-icons/ai";
import { DiReact, DiMongodb, DiCss3, DiRedis } from "react-icons/di";
import { SiNodedotjs, SiSqlite, SiJavascript } from "react-icons/si";
import { FaBootstrap, FaJira, FaPython } from "react-icons/fa";

export const MY_INFO = {
  name: "Daniel Lisko",
  myTitle: "Full Stack Web Developer",
  myDescription:
    "Hi there! My name is Daniel, and I'm a full-stack software developer based in San Francisco. I have recently received my master's degree in Computer Science from Northeastern University and I am passionate about building and designing web applications that help improve people's lives.",
  aboutMe: (
    <div className="about-paragraph" style={{ maxWidth: "800px" }}>
      <p>
        Hi there! My name is Daniel, and I'm a computer science major with a
        background in biology. During my time in college, I had the opportunity
        to do some research in the field of bioinformatics, which is the
        application of computer science techniques to the management and
        analysis of biological data. I quickly discovered that I had a natural
        aptitude for programming and a strong interest in the field.
      </p>
      <p>
        After completing my master's degree in biology and completing my Ph.D.
        comprehensive exams, I decided to switch careers and pursue a master's
        degree in computer science. I'm now excited to combine my passion for
        biology with my newfound love for computer science. I look forward to
        the endless possibilities and opportunities that this combination can
        bring.
      </p>
      <p>
        Thank you for visiting my site. I hope you enjoy learning more about my
        background and my journey into the world of computer science. If you
        have any questions or are interested in working with me, please don't
        hesitate to reach out.
      </p>
    </div>
  ),

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

export const EXPERIENCE = [
  {
    jobTitle: "Master's of Computer Science",
    company: "Northeastern University",
    startDate: "Aug. 2020",
    endDate: "Dec. 2022",
    description: (
      <p>
        Graduated with a Master's in Computer Science from Northeastern
        University, with a 3.70 GPA. As a graduate student, I learned
        Object-Oriented Design, Algorithms, Database Management, Web
        Development, Found of Software Engineering, Mobile App Development, the
        Foundations of Artificial Intelligence and Data Mining.
      </p>
    ),
  },
  {
    jobTitle: "Research Associate II",
    company: "Pact Pharma Inc.",
    startDate: "Jul. 2020",
    endDate: "Feb. 2022",
    description: (
      <p>
        As a Research Associate II, I processed clinical blood samples to
        identify specific T cells from cancer patients and routinely analyzed
        sequencing data. Additionally, I designed and developed a Python program
        to auto-generate study reports, drastically reducing processing time.
      </p>
    ),
  },
  {
    jobTitle: "Ph.D. Candidate",
    company: "University of British Columbia",
    startDate: "Aug. 2017",
    endDate: "Sept. 2020",
    description: (
      <p>
        As a Ph.D. candidate, I provided bioinformatics and performed
        statistical analysis work using R programming to identify bacterial
        species most abundant in patients with inflammatory bowel disease (IBD).
        I was also responsible for designing and studying the therapeutic
        potential of Type 1 regulatory T cells for treating IBD.
      </p>
    ),
  },
  {
    jobTitle: "Research Associate",
    company: "Ohio State University",
    startDate: "Sept. 2016",
    endDate: "Aug. 2017",
    description: (
      <p>
        As a Master of Biology, I examined the effects of probiotics on
        microbial communities on volunteers consuming probiotic pills daily and
        investigated the roles of these communities on stress. I also performed
        high-throughput microbiome analyses to identify and characterize 16s
        rDNA sequences from bacteria using QIIME2 (microbiome bioinformatics
        platform) and R programming.
      </p>
    ),
  },
  {
    jobTitle: "Master's of Biology",
    company: "Youngstown State University",
    startDate: "Sept. 2013",
    endDate: "Aug. 2015",
    description: (
      <p>
        As a Research Associate, I provided bioinformatics support for analyzing
        oral bacterial and fungal sequences from the Illumina MiSeq platform.
        Using R programming, I identified conserved regions in multiple fungal
        genomes to characterize all fungal species better. I also provided
        statistical analysis of an oral microbiome and mycobiome sequences using
        the R and Python programs.
      </p>
    ),
  },
];