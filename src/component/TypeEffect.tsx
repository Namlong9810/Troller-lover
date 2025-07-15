import { useRef } from "react";
import Typed from "typed.js";
import { useEffect } from "react";
import "../styles.css";

export default function TypeEffect() {
    const el = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
    const typed = new Typed(el.current!, {
        strings: [
        "Chúc mừng sinh nhật🤗 </br>",
        "Happy birthday 🎁 </br>",
        "Chúc anh sinh nhật vui vẻ nè </br>",
        "Chúc anh tuổi mới lun vui vẻ hạnh phúc </br>",
        "Chúc anh lunn may mắn, thành công thuận lợi trong cuộc sống!! </br>",
        "Em khum biết tặng anh gì cho ý nghĩa </br>",
        "Thui em gói gém món quà nhỏ này tặng anh vậy thuii 🎁💝"
        ],
        typeSpeed: 50,
        // backSpeed: 30,
        loop: true,
        showCursor: false
        // cursorChar: "|", 
    });
    return () => {
        typed.destroy();
    };
    }, []);

    return (
        <div ref={el} className="typed-container" style={{fontSize: "20px"}}></div>
    );
}
