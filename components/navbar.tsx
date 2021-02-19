import React, { useEffect, useRef } from "react";
import navbarStyles from "../styles/navbar.module.css";

export default function Navbar() {
  const navRef = useRef(null);
  let prevScroll;

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      navRef.current.style.position = "fixed";
      navRef.current.style.transition = "transform 0.3s ease";
      navRef.current.style.top = 0;
      window.scrollY >= prevScroll
        ? (navRef.current.style.transform = "translateY(-3rem)")
        : (navRef.current.style.transform = "translateY(0px)");
    } else {
      navRef.current.style.position = "absolute";
      navRef.current.style.transition = "none";
      navRef.current.style.top = "inherit";
    }
    prevScroll = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className={navbarStyles.navbar}>
      <ul>
        <li className={navbarStyles.title}>
          <img src="/static/logo.svg" alt="logo"></img>
        </li>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="/static/Resume - Jared Nguyen.pdf" target="_blank">RESUME</a>
        </li>
      </ul>
    </nav>
  );
}
