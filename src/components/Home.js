import React from "react";
import person from "../me.png";
import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const route = useNavigate();
  return (
    <div className="home-section">
      <div className="left-side tracking-in-expand">
        <h1 className="decore">Home.</h1>
        <div className="bio">
          <h2>Hi, I am mahmoud </h2>
          <section class="animation">
            <div>
              <div>[ Mahmoud Taher ]</div>
            </div>
            <div>
              <div>[ Web Developer ]</div>
            </div>
            <div>
              <div> 👋 </div>
            </div>
          </section>
          <p>I am addicted proffesional web developer</p>
          <ul>
            <li>
              <button onClick={() => route("Port")}>Portfolio</button>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1l0FylKoiWHDey2WT-5xvAYKY-IF9D8tg/view?usp=share_link">
                Download CV
              </a>
            </li>
          </ul>
        </div>
        <ul class="icons">
          <li>
            <a href="https://github.com/Mahmoud-cell">
              
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/mahmoudtah35e3">
              <i class="fa fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@computer_science_cs">
              <i class="fa fa-youtube-play"></i>
            </a>
          </li>
          <li>
            <a href="mailto:mtmkcell@gmail.com">
              <i class="fa fa-google"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mahmoud-taher-khattab/">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="right-side bounce-right">
        <a>
          <img src={person}></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
