import { useState } from "react";
import "./Lottery.css";

export default function LotteryNumberGenerator() {
  const [lotteryNumber, setLotteryNumber] = useState(null);
  const [message, setMessage] = useState("");

  const generateLotteryNumber = () => {
    const number = Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
    setLotteryNumber(number);
    checkSum(number);
  };

  const checkSum = (number) => {
    const digits = number.toString().split("").map(Number);
    const sum = digits.reduce((acc, curr) => acc + curr, 0);
    if (sum === 15) {
      setMessage("Congratulations, you won!");
    } else {
      setMessage("Try again!");
    }
  };

  return (
    <div className="lottery">
      <h1>Lottery Game!</h1>
      {lotteryNumber !== null && (
        <p className="ticket">
          Ticket <br></br> <span className="ticketNum">{lotteryNumber}</span>
        </p>
      )}
      <br></br>
      <button onClick={generateLotteryNumber}>Buy New Ticket</button>
      {message && <p className="msg">{message}</p>}
    </div>
  );
}
