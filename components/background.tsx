import React from "react";
import Particles from "react-particles-js";
export default function Background() {
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
            value: 200,
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
