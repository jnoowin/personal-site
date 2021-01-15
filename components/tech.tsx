import React from "react";
import techStyles from "../styles/tech.module.css";

export default function Tech({ icons }) {
  return (
    <div className={techStyles.tech}>
      {icons.map((icon, index) => (
        <img key={index} src={`/icons/${icon}`} alt={icon} />
      ))}
    </div>
  );
}
