import ProjectCard from "../other/ProjectCard";

const ProjectsView = () => {
  return (
    <div id="projects">
      <div className="container my-5">
        <h2>Check out some of my projects...</h2>
        <div className="row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
