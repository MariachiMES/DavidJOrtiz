import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={require("../../assets/AboutMeCropped.png")}
              alt="About Image"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>3200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Stuff</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            tempora, soluta aliquam pariatur reiciendis esse porro incidunt
            delectus. Libero maxime repudiandae minus unde vel excepturi
            asperiores eligendi praesentium, cum modi, rerum et. Ea fuga quo
            est, ipsam nisi quas porro maxime, eaque sunt nostrum dicta
            eligendi, dolores unde molestias cumque ullam consequuntur labore
            voluptates architecto? Quam non repudiandae quibusdam, enim earum
            alias. Magnam id ut porro hic qui, sint possimus exercitationem.
            Iste neque quis at nisi magnam. Architecto a unde, quibusdam quod at
            eligendi? Temporibus, voluptas quod veniam, maxime molestias
            tempore, deserunt esse dignissimos facilis odio at sequi culpa. Non.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
