const ProjectCard = ({ isEditing, title, project_img, description, tools }) => {
  const tags = tools.map((tool) => {
    console.log(tool);
    return (
      <div
        className="badge badge-primary m-1"
        style={{ color: "black", border: "1px solid black" }}
      >
        {tool}
      </div>
    );
  });

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
      <div className="card-body p-0">
        <div className="p-2 mb-3 mt-3">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="tool-tags d-flex flex-wrap justify-content-center mb-1">
          {tags}
        </div>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  isEditing: false,
};
export default ProjectCard;
