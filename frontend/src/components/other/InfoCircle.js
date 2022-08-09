import "./other.css";
import "../../App.css";
const InfoCircle = ({ item, height, width, bgColor }) => {
  return (
    <div
      className="infoCircle"
      style={{ height: height, width: width, backgroundColor: bgColor }}
    >
      <div>{item}</div>
    </div>
  );
};

InfoCircle.defaultProps = {
  height: "100px",
  width: "100px",
  bgColor: undefined,
};

export default InfoCircle;
