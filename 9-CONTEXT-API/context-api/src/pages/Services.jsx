import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Services = () => {
  const { counter } = useContext(CounterContext);

  const { color } = useTitleColorContext();
  return (
    <div>
      <h2 style={{ color: color }}>Serviços</h2>
      Valor do contador a página serviços
      <p>{counter}</p>
    </div>
  );
};

export default Services;
