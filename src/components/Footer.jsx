import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Andre Hernandez CSE 310ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
