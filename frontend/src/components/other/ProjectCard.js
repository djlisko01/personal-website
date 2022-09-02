import tmpImg from "../../public/imgs/water_sprite_lake.JPG";

const ProjectCard = ({ isEditing }) => {
  return (
    <div className="card col-md-3 m-md-1" style={{ width: "18rem" }}>
      {!isEditing ? (
        <img src={tmpImg} className="card-img-top pt-2" alt="..." />
      ) : (
        ""
      )}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {!isEditing ? (
          <button className="btnDetails"> Project Details </button>
        ) : (
          <div>
            <button className="editBtn"> Edit </button>
            <button className="deleteBtn"> Delete </button>
            <button className="previewBtn"> Preview </button>
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  isEditing: false,
};
export default ProjectCard;
