import { useState, useEffect } from "react";
import BiggerContainer from "./components/BiggerContainer";
import CardContainer from "./components/CardContainer";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const numbers = seconds.toString().padStart(6, "0").split("");
  console.log(numbers);
  return (
    <>
      <BiggerContainer>
        <CardContainer>
          <i className="fa-solid fa-clock fs-1"></i>
        </CardContainer>
        {numbers.map((number, index) => (
          <CardContainer key={index}>{number}</CardContainer>
        ))}
      </BiggerContainer>
    </>
  );
}

export default App;
