// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando context
import { useContext } from "react";
import { useCounterContext } from "../hooks/useCounterContext";
import { CounterContext } from "../context/CounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  // const { counter } = useContext(CounterContext);

  // 4 - refatorando context
  const { counter } = useCounterContext();

  const {color} = useTitleColorContext();
  return (
    <div>
      <h2 style={{color:color}}>Sobre</h2>
      Valor do contador na página sobre
      <p>{counter}</p>
    </div>
  );
};

export default About;
