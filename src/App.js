import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Edu from "./components/Edu";
import Exp from "./components/Exp";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <>
    {/* 
    <div class="txt-img">
    <div class="content">
<ul class="flex-container">
  <li class="flex-item"><img src="media/img_lisa.jpg">
      <ul>
          <li>Lisa</li>
          <li>lisa@gtd.co</li>
      </ul>
 </li>
  <li class="flex-item"><img src="media/img_danielle.jpg">
      <ul>
          <li>Danielle</li>
          <li>danielle@gtd.co</li>
          <li style="display:table">(123) 456-7890</li>
      </ul>
  </li>
</ul>
    </div>    
</div>
    */}
      <Router>
        <div className="sideNav">
          <div className="container">
            <div className="logo tracking-in-expand">
              <NavLink to="/" exact>
                M
              </NavLink>
              <div className="after-logo">
                <span>
                  Mahmoud Taher <br />
                </span>
                <span>Web Developer</span>
              </div>
            </div>
            <div className="navlist-bg tracking-in-expand">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                  <NavLink to="/edu">Education</NavLink>
                </li>
                <li>
                  <NavLink to="/exp">Experience</NavLink>
                </li>
                <li>
                  <NavLink to="/port">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>

            <div className="navlist-xs tracking-in-expand">
              <ul>
                <li>
                  <NavLink to="/">
                    <i className="fa fa-home"></i> <br /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">
                    <i className="fa fa-black-tie"></i> <br /> About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/skills">
                    <i className="fa fa-address-card-o"></i> <br /> Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/edu">
                    <i className="fa fa-university"></i> <br /> Edu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exp">
                    <i className="fa fa-briefcase"></i> <br />  Exp
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/port">
                    <i className="fa fa-coffee"></i> <br />  Work
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <i className="fa fa-send-o"></i> <br />  Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sections">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/mahmoud-cv" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/edu" exact element={<Edu />} />
            <Route path="/exp" exact element={<Exp />} />
            <Route path="/port" exact element={<Portfolio />} />
            <Route path="/mahmoud-cv/port" exact element={<Portfolio />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
