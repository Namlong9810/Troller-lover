import "../styles.css";
import Fireworks from "../confettiEffect/Firework";
import SchoolPride from "../confettiEffect/SchoolPride";

export default function surprisePage() {
  return (
    <div className="App">
      <h1>Chúc mừng sinh nhật🤗</h1>
      <h2></h2>

      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhianNjY3hmY2ZwY2l3c21ya2J4cTV3c3B2a29lNGVnZnA3bGJheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FAFo1M7EC4gRZ4HETH/giphy.gif"
        alt="Con chó"
      ></img>
    <Fireworks/>
    <SchoolPride/>
    </div>
  );
}
