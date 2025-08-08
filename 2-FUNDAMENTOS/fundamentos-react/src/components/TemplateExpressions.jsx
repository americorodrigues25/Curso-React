const TemplateExpressions = () => {
  // Variáveis para demonstração de expressões
  const name = "Americo";
  const age = 27;
  // Objeto com dados adicionais
  const data = {
    age: 27,
    job: "Programador",
    location: "Brasil",
    adress: ["Rua Exemplo, 123"],
  };

  return (
    <div>
      <p>Olá, meu nome é: {name}</p>
      <p>Tenho: {age} anos.</p>
      <p>
        Você atua como {data.job}, seu pais de origem é o {data.location} e seu
        endereço é {data.adress}
      </p>
      {/* Executando JS no jsx */}
      <p>{4 + 4}</p>
    </div>
  );
};

export default TemplateExpressions;
