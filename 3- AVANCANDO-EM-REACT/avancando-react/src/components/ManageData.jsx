import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);

  return (
    <div>
      <p>O valor é: {someData} </p>
      <button onClick={() => (someData = 15)}>Mudar variavel</button>
      <div>
          <p>O valor é: {number} </p>
          <button onClick={() => setNumber(20)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;
