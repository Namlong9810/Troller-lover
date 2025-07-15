import React, {useEffect, useRef} from "react";        

export default function SoundEffect() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

//   const playSound = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pauseSound = () => {
//     if (audioRef.current) {
//         audioRef.current.pause();
//     }
//   };

    useEffect(() => {
        if (audioRef.current) { 
            audioRef.current.volume = 0.5; // Set volume to 50%
            audioRef.current.play().catch(error => {
                console.error("Error playing sound:", error);
            });
        }
    }, []);

  return (
    // <audio src="/birthday.mp3" ref={audioRef} loop autoPlay></audio>
    <audio src="birthday.mp3" ref={audioRef} loop autoPlay></audio>
  );
}