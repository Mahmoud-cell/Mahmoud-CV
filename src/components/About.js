import React from "react";
import "./about.css";
const About = () => {
  return (
    <div class="section about-section bounce-right">
      <h1 className="decore">About.</h1>
      <h1> <i className="fa fa-user-o"></i>About Me</h1>
      <p>Hello I am mahmoud taher, I am addicted proffesional web developer.</p>
      <p>
        I had made a lot of designs and web pages design and development (front&back end). also I had marketed 2 page as marketer (digital markting)
      </p>
      <div className="hire-me">
        <i className="fa fa-file-image-o"></i>
        <span>
          Many Years In The game
          <br />
          With More Than 100 Projects Successfully Done!
        </span>
        <span>
          <i className="fa fa-envelope-o"></i> <a href="mailto:mtmkcell@gmail.com">Hire Me</a>
        </span>
      </div>
    </div>
  );
};

export default About;
