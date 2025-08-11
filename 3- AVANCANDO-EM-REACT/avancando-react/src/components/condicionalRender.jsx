import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Livia");
  const [age] = useState(17);

  return (
    <div>
      <div>
        <h2>Condicional Render</h2>
        {x && <p>Renderizando isso porque x é true</p>}
        {!x && <p>Agora x é falso</p>}
      </div>
      {/* Renderiza na tela dependendo do valor booleano (true ou false) */}

      <div>
        <h2>Renderização condicional (if/else)</h2>
        {name === "Americo" ? (
          <div>
            <p>O nome é Americo</p>
          </div>
        ) : (
          <div>
            <p>O nome não é Americo</p>
            <div>
                <button onClick={() => setName("Americo")}>Clique para alterar o nome</button>
            </div>
          </div>
        )}
      </div>
      {age >= 18 ? (
        <div>
          <p>Você é maior de idade {name}</p>
        </div>
      ) : (
        <div>
          <p>Você é menor de idade {name}</p>
        </div>
      )}
      {/*Escrevemos jsx sempre dentro dos ()*/}
    </div>
  );
};

export default CondicionalRender;
