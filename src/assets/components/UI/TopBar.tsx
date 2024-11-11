import React, { useEffect, useRef, useState } from "react";
import "./TopBar.css";

interface TopBarProps {
  onSectionChange?: (section: string) => void;
}


const TopBar: React.FC<TopBarProps> = (props) => {
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
        <a href="#nosotros" onClick={() => props?.onSectionChange?.('us')} >Nosotros</a>
        <a href="#principios" onClick={() => props?.onSectionChange?.('values')}>Principios</a>
        <a href="#contactanos" onClick={() => props?.onSectionChange?.('contact')}>Acompáñanos</a>
      </div>
    </div>
  );
};

export default TopBar;
