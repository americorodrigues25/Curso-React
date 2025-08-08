const Challenge = () => {
  const a = 2;
  const b = 3;

  const sum = () => {
    alert(`A soma total é: ${a + b}`);
    // Aqui você pode fazer qualquer outra lógica que desejar
  }

  return (
    <div>
      <p>A = {a}</p>
      <p>B = {b}</p>

      <div>
        <button onClick={sum}>Calcule aqui!</button>
      </div>
    </div>
  );
};

export default Challenge;
