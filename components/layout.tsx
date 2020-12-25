import React from "react";
import layoutStyles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      {React.Children.map(children, (component, index) =>
        index == 0 ? (
          component
        ) : (
          <div key={index} className={layoutStyles.container}>
            {component}
          </div>
        )
      )}
    </>
  );
}
