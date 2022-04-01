import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://drive.google.com/file/d/1z0taAhjwk3MVt3oJdaJ2YQawmgF519XN/view?usp=sharing"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         kajsFHksjdfhalsdkjfhSLKFHASLDFHosfkhl
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididDKujsfb cIUSHd9jd0pjopokslFUDLKFHaj SKDJQW a;sldjQe.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              NeldsFKB;.KJSDVBiusbdfosilkfj;OISJF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;