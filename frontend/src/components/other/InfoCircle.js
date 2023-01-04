import "./other.css";
import "../../containers/App";
const InfoCircle = ({ item, height, width, bgColor, newState, setState }) => {
  const onHover = () => {
    setState(newState);
  };

  return (
    <div
      className="infoCircle"
      style={{ height: height, width: width, backgroundColor: bgColor }}
    >
      {setState && newState ? (
        <div onMouseOver={() => onHover()}>
          <div>{item}</div>
        </div>
      ) : (
        <div>{item}</div>
      )}
    </div>
  );
};

InfoCircle.defaultProps = {
  height: "100px",
  width: "100px",
  bgColor: undefined,
};

export default InfoCircle;
