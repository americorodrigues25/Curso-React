const Events = () => {
  const handleClick = () => {
    alert("Button 2 clicked!");
  };

  const handleClick2 = () => {
    alert("Button 3 clicked automatic!");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Rendered!</h1>;
    } else {
      return <h1>Not Rendered!</h1>;
    }
  };

  return (
    <div>
      {/* Função anônima inline (dentro do JSX) */}
      {/* Simples e direto. */}
      <div>
        <button onClick={() => alert("Button 1 clicked!")}>Click Me</button>
      </div>

      {/* Função definida fora do JSX */}
      {/* Mais organizada, reutilizável em vários lugares., especialmente se a lógica for complexa. */}
      <div>
        <button onClick={handleClick}>Click Me 2</button>
      </div>

      {/* Função definida fora do JSX, mas chamada imediatamente */}
      {/* Útil para executar código sem precisar de um evento de clique. */}
      <div>
        <button onClick={handleClick2()}>Click Me 3</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
