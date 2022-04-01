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
         Full Stack Developer
        </p>
        <p className="a-desc">
        Hi im Jude Collins born in Orlando Fl, and raised in Atlanta georgia. I am a student brand new to coding. I am very excited to start my journey and become a full stack dev. This site will become my platform to display my work to possible employers.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Rafting the Nantahala river</h4>
            <p className="a-award-desc">
             I love the outdoors, and enjoy to raft in my packraft during the summers in GA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;