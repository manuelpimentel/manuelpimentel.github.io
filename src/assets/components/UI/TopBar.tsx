import React, { useEffect, useRef, useState } from "react";
import "./TopBar.css";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const topBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`topBar   
 ${isScrolled ? "scrolled" : ""}`} ref={topBarRef}>
      <div className="linksContainer">
        {/*<a href="#home">
          <img src="public/logo.svg" alt="Home Icon" className="homeIcon"/>
        </a>*/}
        <a href="#nosotros">Nosotros</a>
        <a href="#principios">Principios</a>
        <a href="#contactanos">Acompáñanos</a>
      </div>
    </div>
  );
};

export default TopBar;
