import "../styles.css";
import "../css/SurPage.css"
import Fireworks from "../confettiEffect/Firework";
import SchoolPride from "../confettiEffect/SchoolPride";
import SoundEffect from "../sound/soundEffect";
import BirthdayCard from "../component/TypeEffect";

export default function surprisePage() {
  return (
    <div className="App">
      <h1>Chúc mừng sinh nhật🤗</h1>
      {/* <h4>Happy birthday 🎁<br />
      Chúc anh sinh nhật vui vẻ nè <br />
      Chúc anh tuổi mới lun vui vẻ hạnh phúc <br /> 
      Chúc anh lunn may mắn, thành công thuận lợi trong cuộc sống!! <br />
      Em khum biết tặng anh gì cho ý nghĩa <br />
      Thui em gói gém món quà nhỏ này tặng anh vậy thuii 🎁💝</h4> */}

      <div className="flex flex-col items-center">
        <h4 className="typed-container"><BirthdayCard /></h4>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjZ0emlibXZudmlpNmIzcThvd3VvOXcwaDNtMnZ6eHk0b3h2MHptcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/V2JgPXdvuCKrDo9uem/giphy.gif"
          alt="Con chó" style={ { width: "500px", height: "500px"} }
        ></img>
      </div>
      <Fireworks/>
      <SchoolPride/>
      <SoundEffect/>
    </div>
  );
}
