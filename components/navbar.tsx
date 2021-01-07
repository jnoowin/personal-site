import React, { useEffect, useState } from "react";
import utilStyles from "../styles/util.module.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY >= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={utilStyles.navbar}
      style={{
        top: scroll ? "0" : "100vh",
        position: scroll ? "fixed" : "absolute",
      }}
    >
      <ul>
        <li style={{ flex: 1 }}>
          <img src="/static/logo.svg" alt="logo"></img>
        </li>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
}
