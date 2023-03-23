// 13.0 create skills component .jsx and .css and copy the experience component and change the name
import React from 'react'
import './Skills.css'
import { BsFillPatchCheckFill } from "react-icons/bs";


const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
          </div>


          
        </div>

        {/* END OF BACKEND */}

        <div className="skills__backend">
          <h3>Others</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills__details">
              <BsFillPatchCheckFill className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
          </div>


          
        </div>
      </div>
    </section>
  )
}

export default Skills