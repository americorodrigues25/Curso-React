import { useState } from "react";

import "./App.css";

import img2 from "./assets/img-2.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/listRender";
import CondicionalRender from "./components/condicionalRender";
import ShowUserName from "./components/showUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  // Variaveis que serão utilizadas no componente ShowUserName
  const name = "Americo";
  const age = 30;
  const city = "Suzano";

  const cars = [
    {
      id: 1,
      brand: "VW",
      color: "Azul",
      km: 56000,
      newCar: true,
    },
    {
      id: 2,
      brand: "Fiat",
      color: "Preto",
      km: 30000,
      newCar: false,
    },
    {
      id: 3,
      brand: "Chevrolet",
      color: "Vermelho",
      km: 120000,
      newCar: true,
    },
    {
      id: 4,
      brand: "Ford",
      color: "Branco",
      km: 80000,
      newCar: false,
    },
  ];

  // Função para mostrar alert, por meio de props
  const mostrarAlert = (message) => {
    alert("Mensagem recebida: " + message);
  };

  // Função para ser executada no componente ExecuteFunction
  function showMessage() {
    alert("Função executada com sucesso!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img-1.jpg" alt="Technology" style={{ width: 300 }} />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={img2} alt="Techonology 2" style={{ width: 300 }} />
      </div>

      {/* Componente que gerencia dados */}
      <ManageData />
      {/* Componente que renderiza uma lista */}
      <ListRender />
      {/* Componente condicional */}
      <CondicionalRender />
      {/* Componente que recebe props */}
      <ShowUserName
        name={name}
        age={age}
        city={city}
        enviarMensagem={mostrarAlert}
      />
      {/* Destructing de props */}
      <CarDetails brand="VW" km={56000} color="Azul" newCar={true} />
      {/* Reaproveitamento */}
      <CarDetails brand="Fiat" km={30000} color="Preto" newCar={false} />
      <CarDetails
        brand="Chevrolet"
        km={120000}
        color="Vermelho"
        newCar={true}
      />

      <h2>Loop com map</h2>
      {/* loop em arrays de objeto com map */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragment propFragmentTest="Testando props" />

      {/* Children */}
      <Container value={500}>
        <p>Este é o conteudo</p>
      </Container>

      {/* Executar função dentro de props */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
