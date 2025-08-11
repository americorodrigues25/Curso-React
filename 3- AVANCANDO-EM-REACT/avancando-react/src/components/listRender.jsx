import { useState } from "react";

const ListRender = () => {
  const [listNames] = useState(["Américo", "Livia", "Carla"]);
  const [listProducts] = useState([
    "Refrigerante",
    "Fogão",
    "Televisão",
    "Celular",
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Américo", age: 27, city: "São Paulo" },
    { id: 2, name: "Livia", age: 25, city: "Rio de Janeiro" },
    { id: 3, name: "Carla", age: 30, city: "Belo Horizonte" },
  ]);

  const deleteRandow = () => {
    const randowNumber = Math.floor(Math.random() * 4);
    // Filtra o usuário com o id randômico e remove da lista
    // Utilizando o previous state para garantir que a lista seja atualizada corretamente
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randowNumber !== user.id);
    });
  };

  return (
    <div>
      <h2>Lista de nomes</h2>
      <ul>
        {listNames.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <h2>Lista de produtos</h2>
      <ul>
        {listProducts
          .filter((item) => item.length <= 7) // Filtra produtos com nome até 7 caracteres
          .map((item) => (
            <li>{item}</li> // Renderiza cada item
          ))}
      </ul>

      {/* Utilizando a propriedade key */}

      <h2>Lista de produtos com key</h2>
      <ul>
        {listProducts.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>

      {/* Lista de objetos com key e propriedades */}
      <h2>Lista de objetos com key</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.city}
          </li>
        ))}
      </ul>

      {/* Previous state */}
      <h2>Deletando item com previous state</h2>
      <button onClick={deleteRandow}>Delete randow user</button>
    </div>
  );
};

export default ListRender;
