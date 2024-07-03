// Author: Tushardeep Singh

import { Fragment } from "react";
import "./About.css";

export const About = ({ contactEmail }) => {
  // Function that opens a new default window to email
  const handleOnClick = () => (window.location.href = `mailto:${contactEmail}`);

  return (
    <Fragment>
      <section className="AboutPage">
        <section className="about-me">
          I am a Seneca College graduate actively seeking a 12-month internship
          to enhance my skills and contribute effectively to a team. Although I
          may not always excel in interviews, my strength lies in thoroughly
          reading and understanding documentation, allowing me to grasp new
          concepts. I have a strong portfolio of C++ projects and am a beginner
          in data structures, algorithms, and the front-end. While I am still
          growing in my expertise, I am eager to join a junior-level position
          where I can develop my skills and make valuable contributions.
        </section>
        <section className="mailMe">
          <button onClick={handleOnClick} className="mailMeBtn">E-Mail Me</button>
        </section>
      </section>
    </Fragment>
  );
};
