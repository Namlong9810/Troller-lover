import "./styles.css";
import Troller from "./component/TrollButton.tsx";

export default function App() {
  return (
    <div className="App">
      <h1>Câu hỏi 🤗</h1>
      <h2>Note: </h2>

      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhianNjY3hmY2ZwY2l3c21ya2J4cTV3c3B2a29lNGVnZnA3bGJheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FAFo1M7EC4gRZ4HETH/giphy.gif"
        alt="Con chó"
      ></img>
      <Troller />
    </div>
  );
}
