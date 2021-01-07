import React from "react";
import Navbar from "../components/navbar";
import layoutStyles from "../styles/layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children[0]}
      <Navbar />
      <div>
        {React.Children.map(children, (component, index) =>
          index == 0 ? null : (
            <div key={index} className={layoutStyles.container}>
              {component}
            </div>
          )
        )}
      </div>
    </>
  );
}
