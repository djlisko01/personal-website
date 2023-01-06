import ProjectCard from "../other/ProjectCard";
import { PROJECTS } from "../../data/projects_data";

const ProjectsView = () => {
  const cardsList = PROJECTS.map((project, index) => {
    console.log(index);
    return (
      <ProjectCard
        title={project.project_title}
        project_img={project.img_url}
        description={project.description}
        tools={project.tools}
        gitUrl={project.github}
        index={index}
        key={index}
      />
    );
  });

  return (
    <div id="projects">
      <div className="container my-5 pt-5">
        <h2>Check out some of my projects...</h2>
        <div className="row cardList">{cardsList}</div>
      </div>
    </div>
  );
};

export default ProjectsView;
