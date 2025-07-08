import React, { useEffect } from "react";
import "../css/TrollButton.css";

const Troller: React.FC = () => {
  useEffect(() => {
    const btn = document.getElementById("troll-btn");

    const handover = () => {
      if (!btn) return;
      const maxX = window.innerHeight - btn.offsetHeight;
      const maxY = window.innerWidth - btn.offsetWidth;
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      btn.style.transform = `translate(${x}px, ${y}px)`;
    };
    btn?.addEventListener("mouseenter", handover);

    return () => {
      btn?.removeEventListener("mouseenter", handover);
    };
  }, []);
  return (
    <div>
      <button id="simple-btn">Không</button>
      <button id="troll-btn">Có</button>
    </div>
  );
};

export default Troller;
