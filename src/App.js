import { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  let [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <h1> {advice}</h1>
      <button onClick={getAdvice} className="btn">
        Get Advice
      </button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
