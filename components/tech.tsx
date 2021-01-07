import React from "react";
import utilStyles from "../styles/util.module.css";

export default function Tech({ icons }) {
  return (
    <div className={utilStyles.tech}>
      {icons.map((icon, index) => (
        <img key={index} src={`/icons/${icon}`} alt={icon} />
      ))}
    </div>
  );
}
