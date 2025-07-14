import React, { useEffect } from "react";
import "../css/TrollButton.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Troller: React.FC = () => {
  const navigate = useNavigate();
  const [initialized, setInitialized] = React.useState(false);

  useEffect(() => {
    const btn = document.getElementById("troll-btn");
    const simpleBtn = document.getElementById("simple-btn");

    const handover = () => {
      if (!btn) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      const minX = screenWidth * 0.25;
      const maxX = screenWidth * 0.75 - btn.offsetWidth;

      const minY = screenHeight * 0.25;
      const maxY = screenHeight * 0.75 - btn.offsetHeight;

      const x = Math.random() * (maxX - minX) + minX;
      const y = Math.random() * (maxY - minY) + minY;

  
      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;
    };
    btn?.addEventListener("mouseenter", handover);


    //Xử lý với btn "không"
    const rect = simpleBtn?.getBoundingClientRect();
    if (simpleBtn) {
    
      const btnWidth = simpleBtn.offsetWidth;
      const btnHeight = simpleBtn.offsetHeight;

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      simpleBtn.style.left = `${centerX - btnWidth / 2}px`;
      simpleBtn.style.top = `${centerY - btnHeight / 2}px`;

      const randomX = Math.random() * ( window.innerWidth - btnWidth);
      const randomY = Math.random() * ( window.innerHeight - btnWidth);

      // set random position "No" btn
      simpleBtn.style.left = `${randomX}px`;
      simpleBtn.style.top = `${randomY}px`;

      document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const closeThreshold = 2;

        if (distance < closeThreshold) {
          // 🔥 Gán luôn vào đúng chuột khi quá gần
          centerX = mouseX;
          centerY = mouseY;
        } else {
          const speed = Math.min(10, distance / 2);
          centerX += (dx / distance) * speed;
          centerY += (dy / distance) * speed;
        }

        // Cập nhật lại vị trí style cho button
        simpleBtn.style.left = `${centerX - btnWidth / 2}px`;
        simpleBtn.style.top = `${centerY - btnHeight / 2}px`;

        setInitialized(true);
      });
    }
   
    return () => {
      btn?.removeEventListener("mouseenter", handover);
    };
  }, []);
  return (
    <div>
      <button id="simple-btn" onClick={() => navigate("/happyBirthDay")} style={{ visibility: initialized ? "visible" : "hidden" }}>Không</button>
      <button id="troll-btn">Có</button>
    </div>
  );
};

export default Troller;
