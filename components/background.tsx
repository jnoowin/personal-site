import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";

export default function Background() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Particles
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        zIndex: -1,
      }}
      params={{
        particles: {
          number: {
            value: width / 8,
          },
          color: {
            value: "#fff",
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            speed: 0.6,
          },
        },
      }}
    />
  );
}
