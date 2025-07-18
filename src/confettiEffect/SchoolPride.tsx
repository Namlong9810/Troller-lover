import confetti from "canvas-confetti";
import { useEffect } from "react";

const SchoolPride: React.FC = () => {
    useEffect(() => {
        const end = Date.now() + (20 * 1000);

        // go Buckeyes!
        const colors = ['#2196f3', '#bb3e03'];

        (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        }());
    }, []);

    return null;
}

export default SchoolPride;