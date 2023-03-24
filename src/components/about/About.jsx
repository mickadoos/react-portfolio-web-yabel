// 3.0 create all components folders with .jsx file and .css --- then on .jsx file type racfe, press tab and import the .css file
import React from "react";
import "./About.css";
import ME from "../../assets/foto-yabel.JPG";
import CTA from "../header/CTA.jsx"; // 7.0 import the CTA component and use it
// import HeaderSocial from "../header/HeaderSocials.jsx";
// import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";
import DPLANIMG from "../../assets/dplan-project-image.png";
import GameProjectIMG from '../../assets/game-project-x-image.png';

const About = () => {
  const data = [
    {
      title: "DPLAN",
      image: DPLANIMG,
      subtitle: "Full Stack Web App",
      demo: "https://famous-brioche-240d75.netlify.app/",
    },
    {
      title: "Game Project",
      image: GameProjectIMG,
      subtitle: "Frontend Web App",
      demo: "https://mickadoos.github.io/game-project-x/",
    },
  ];
  return (
    // 10.2 chanmge all components to a section parent container with his correspondent id
    <section id="about">
      <h5>Hi I'm</h5>
      <h2>Yabel Rodríguez</h2>
      <h2>Full Stack Developer</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            {/* <FaAward className="about__icon" /> */}
            {data.map(({ title, image, subtitle, demo }) => {
              return (
                <a href={demo} target='_blank' rel="noreferrer">
                <article className="about__card">
                  <div className="about__card-image">
                    <img src={image} alt="" />
                  </div>
                  <h5>{title}</h5>
                  <small>{subtitle}</small>
                </article>
                </a>
              );
            })}
            {/* <article className="about__card">
              <div className="about__card-image">
                <img src={DPLANIMG} alt="" />
              </div>
              <h5>Experience</h5>
              <small>Full Stack Project</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article> */}
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            veritatis doloribus eligendi qui inventore eum ex similique culpa
            facilis, nam officiis saepe tempora excepturi aspernatur itaque
            reiciendis molestiae, ea magni?
          </p>

          {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
          <CTA />
          {/* <HeaderSocial /> */}

          {/* <a href="#contact" className="scroll__down">
            Scroll Down
          </a> */}
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
            <h2>
              Yabel Rodriguez<br></br>
              <span>Full Stack Developer</span>
            </h2>
            <a href="#contact">Hire me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
