import "./App.css";

import { useState, useEffect } from "react";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando dados
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   };

  //   fetchData();
  // }, []); // executa apenas 1 vez

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita que a página recarregue quando o formulário é enviado

    const product = {
      name,
      price,
    }; // cria um objeto com os valores que o usuário digitou

    // const res = await fetch(url, {
    //   method: "POST", // diz que queremos enviar (criar) algo no servidor
    //   headers: {
    //     "Content-Type": "application/json", // avisa que estamos mandando dados em JSON
    //   },
    //   body: JSON.stringify(product), // transforma o objeto JS em JSON para poder enviar
    // });

    // // 3 - carregamento dinâmico
    // const data = await res.json(); // pego o produto salvo no servidor

    // // atualizo o array de produtos, colocando o novo no final
    // setProducts([...products, data]);

    // 5 - refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button
                className="btn-delete"
                onClick={() => httpConfig(product.id, "DELETE")}
              >
                Deletar
              </button>
            </li>
          ))}
      </ul>
      {loading && <p>Carregando dados...</p>}
      {/* tratamento de erros */}
      {error && <p>{error}</p>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - loading no post */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
