import React, { useEffect } from "react";
import Tech from "../components/tech";
import pageStyles from "../styles/page.module.css";

export default function About({ icons }) {
  return (
    <div className={`${pageStyles.about}`} id="about">
      <h1>ABOUT</h1>
      <section>
        <div>
          <p>Hey there! I'm Jared. </p>
          <p>
            I am a student studying Computer Science at the University of
            Virginia. Currently, I have been really digging into the React and
            Node.js ecosystem. Regardless, I am always looking to explore and
            adopt new technologies to expand my skillset.
          </p>
          <p>
            Here are some of the languages and technologies I am familiar with!
          </p>
        </div>
        <img src="/static/me.jpg" alt="Picture of me!"></img>
      </section>

      <Tech icons={icons} />
    </div>
  );
}
