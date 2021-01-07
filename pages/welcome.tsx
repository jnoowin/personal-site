import React from "react";
import { IconContext } from "react-icons";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { IoDocumentText } from "react-icons/io5";
import Background from "../components/background";
import layoutStyles from "../styles/layout.module.css";
import utilStyles from "../styles/util.module.css";

export default function Welcome() {
  return (
    <>
      <div
        className={`${layoutStyles.container} ${utilStyles.welcome}`}
        style={{ height: "100vh" }}
        id="home"
      >
        <h3>Hi! My name is</h3>
        <h1>Jared Nguyen.</h1>
        <p>
          I'm an aspiring software engineer. Currently, I am a second-year
          pursuing a BS in Computer Science at the University of Virginia. Feel
          free to connect with me!
        </p>
        <section>
          <IconContext.Provider
            value={{
              style: {
                color: "white",
                fontSize: "clamp(2rem, 8vw, 3rem)",
                marginRight: "1rem",
              },
            }}
          >
            <a href="https://github.com/blarghnog" target="_blank">
              <GrGithub />
            </a>
            <a href="https://www.linkedin.com/in/jared-nguyen/" target="_blank">
              <GrLinkedin />
            </a>
            <a href="mailto:jtn2km@virginia.edu" target="_blank">
              <GrMail />
            </a>
            <a href="" target="_blank">
              <IoDocumentText />
            </a>
          </IconContext.Provider>
        </section>
      </div>
      <Background />
    </>
  );
}
