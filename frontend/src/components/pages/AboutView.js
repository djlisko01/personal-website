import InfoCircle from "../other/InfoCircle";
import SocialLinks from "../SocialLinks";
import {
  computerSVG,
  dataBaseSVG,
  codeSVG,
  forkLinkSVG,
} from "../../public/icons";

const AboutView = () => {
  return (
    <div className="container aboutMe mt-5">
      <div className="row">
        <SocialLinks />
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            assumenda porro, sed harum aliquid similique blanditiis! Assumenda
            quod commodi aliquam, debitis fugit eius provident minima placeat
            optio! Fuga perspiciatis dolore error enim tempore atque nam
            pariatur ea molestias dolorem hic vitae eligendi laboriosam, sed
            sequi ipsam consequatur. Est, consequatur? Voluptatibus?
          </p>

          <div id="skills">
            <h2 className="mt-5">Full Stack Skills</h2>
            <div className="skillCircleBlock mt-3 col-lg-8">
              <InfoCircle item={computerSVG} bgColor="#ff595e" />
              <InfoCircle item={dataBaseSVG} bgColor="#ffca3a" />
              <InfoCircle item={codeSVG} bgColor="#1982c4" />
              <InfoCircle item={forkLinkSVG} bgColor="#6a4c93" />
            </div>
            <div className="skillDescription mt-3">Logos go here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
