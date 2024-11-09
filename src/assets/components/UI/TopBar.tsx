import React, { useEffect } from "react";
import "./TopBar.css";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="topBar">
      <div className="linksContainer">
        <a href="#nosotros">Nosotros</a>
        <a href="#principios">Principios</a>
        <a href="#contactanos">Acompáñanos</a>
      </div>
    </div>
  );
};

export default TopBar;