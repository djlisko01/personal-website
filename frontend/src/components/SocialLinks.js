import InfoCircle from "./other/InfoCircle";
import { linkedInSVG, twitterSVG, githubSVG, emailSVG } from "../public/icons";



const SocialLinks = ({ inlineStyle }) => {
  const contactCircles = { height: "3em", width: "3em" };
  return (
    <div className="contactInfo" id="social-links" style={inlineStyle}>
      <a href="mailto: djlisko01@gmail.com" rel="noopener noreferrer">
        <InfoCircle
          className="#emailLink"
          item={emailSVG}
          height={contactCircles.height}
          width={contactCircles.width}
        />
      </a>
      <a
        href="https://twitter.com/danDaCoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InfoCircle
          className="twitterLink"
          item={twitterSVG}
          height={contactCircles.height}
          width={contactCircles.width}
        />
      </a>

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
      <a
        className="downloadResume social"
        href="Lisko_Resume_20230205.pdf"
        download="lisko_resume.pdf"
      >
        <button className="sendBtn">Resume</button>
      </a>
    </div>
  );
};

SocialLinks.defaultProps = {
  inlineStyle: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};

export default SocialLinks;
