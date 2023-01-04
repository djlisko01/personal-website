const ProjectCard = ({ isEditing, title, project_img, description }) => {
  return (
    <div
      className="card m-sm-1"
      style={{ maxWidth: "300px", minWidth: "300px" }}
    >
      {!isEditing ? (
        <img
          src={project_img}
          className="card-img-top pt-2"
          style={{ height: "200px", width: "auto" }}
          alt={title}
        />
      ) : (
        ""
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <button className="btnDetails"> Project Details </button>
    </div>
  );
};

ProjectCard.defaultProps = {
  isEditing: false,
};
export default ProjectCard;
