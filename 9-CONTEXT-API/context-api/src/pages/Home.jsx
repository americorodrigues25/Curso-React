// import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  //   const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  // 5 - context complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterar state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h2 style={{ color: color }}>Home</h2>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor com texto */}
      <ChangeCounter />
      <div>
        {/* 6 - gerando contexto complexo */}
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
