import React from "react";
import ProjectCard from "../other/ProjectCard";

function EditProjects() {
  return (
    <div id="edit-projects">
      <h2>Displayed Content</h2>
      <ProjectCard isEditing={true} />
    </div>
  );
}

export default EditProjects;
