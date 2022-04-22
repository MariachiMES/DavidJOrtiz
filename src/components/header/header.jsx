import React from "react";
import "./header.css";
import CTA from "./CTA";

export default function Header() {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>David Ortiz</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
        </div>
      </header>
    </div>
  );
}
