import ProjectCard from "../other/ProjectCard";
import { PROJECTS } from "../../data/projects_data";

const ProjectsView = () => {
  const cardsList = PROJECTS.map((project) => {
    return (
      <ProjectCard
        title={project.project_title}
        project_img={project.img_url}
        description={project.description}
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
