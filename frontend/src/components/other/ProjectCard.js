import tmpImg from "../../public/imgs/water_sprite_lake.JPG";

const ProjectCard = () => {
  return (
    <div className="card col-md-3 m-md-3" style={{ width: "18rem;" }}>
      <img src={tmpImg} className="card-img-top pt-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btnDetails"> Project Details </button>
      </div>
    </div>
  );
};

export default ProjectCard;
