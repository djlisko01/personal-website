import "./other.css";
import "../../App.css";
const InfoCircle = ({ item, height, width }) => {
  return (
    <div className="infoCircle" style={{ height: height, width: width }}>
      <div>{item}</div>
    </div>
  );
};

InfoCircle.defaultProps = {
  height: "100px",
  width: "100px",
};

export default InfoCircle;
