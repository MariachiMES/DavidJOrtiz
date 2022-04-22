import React from "react";
import CV from "../../assets/davidortizresume.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download>
        Download CV
      </a>
      <a href="#contact">Let's Talk</a>
    </div>
  );
}
