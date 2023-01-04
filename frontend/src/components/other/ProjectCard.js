const ProjectCard = ({ isEditing, title, project_img, description }) => {
  return (
    <div
      className="card col-md-3 m-md-1 d-flex align-content-end"
      style={{ width: "18rem" }}
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
