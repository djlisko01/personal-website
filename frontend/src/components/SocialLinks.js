import InfoCircle from "./other/InfoCircle";
import { linkedInSVG, twitterSVG, githubSVG, emailSVG } from "../public/icons";

const SocialLinks = () => {
  const contactCircles = { height: "50px", width: "50px" };
  return (
    <div className="contactInfo" style={{ justifyContent: "center" }}>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InfoCircle
          className="emailLink"
          item={emailSVG}
          height={contactCircles.height}
          width={contactCircles.width}
        />
      </a>

      <InfoCircle
        className="twitterLink"
        item={twitterSVG}
        height={contactCircles.height}
        width={contactCircles.width}
      />

      <a
        href="https://github.com/djlisko01"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InfoCircle
          className="gitHubLink"
          item={githubSVG}
          height={contactCircles.height}
          width={contactCircles.width}
        />
      </a>
      <a
        href="http://www.linkedin.com/in/daniel-lisko"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InfoCircle
          item={linkedInSVG}
          height={contactCircles.height}
          width={contactCircles.width}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
