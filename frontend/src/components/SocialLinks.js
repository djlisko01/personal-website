import InfoCircle from "./other/InfoCircle";
import {
  linkedInSVG,
  twitterSVG,
  githubSVG,
  emailSVG,
} from "../public/icons/index";

const SocialLinks = () => {
  const contactCircles = { height: "50px", width: "50px" };
  return (
    <div className="col-md-3 contactInfo" style={{ justifyContent: "center" }}>
      <InfoCircle
        item={emailSVG}
        height={contactCircles.height}
        width={contactCircles.width}
      />
      <InfoCircle
        item={twitterSVG}
        height={contactCircles.height}
        width={contactCircles.width}
      />
      <InfoCircle
        item={githubSVG}
        height={contactCircles.height}
        width={contactCircles.width}
      />
      <InfoCircle
        item={linkedInSVG}
        height={contactCircles.height}
        width={contactCircles.width}
      />
    </div>
  );
};

export default SocialLinks;
