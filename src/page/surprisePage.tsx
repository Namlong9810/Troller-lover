import "../styles.css";
import Fireworks from "../confettiEffect/Firework";
import SchoolPride from "../confettiEffect/SchoolPride";

export default function surprisePage() {
  return (
    <div className="App">
      <h1>Chúc mừng sinh nhật🤗</h1>
      <h2></h2>

      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjZ0emlibXZudmlpNmIzcThvd3VvOXcwaDNtMnZ6eHk0b3h2MHptcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/V2JgPXdvuCKrDo9uem/giphy.gif"
        alt="Con chó"
      ></img>
    <Fireworks/>
    <SchoolPride/>
    </div>
  );
}
