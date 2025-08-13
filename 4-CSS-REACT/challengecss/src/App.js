import "./App.css";
import DetailsCars from "./components/DetailsCars";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", km: 0 },
    { id: 2, brand: "Renault", color: "Branco", km: 34343 },
    { id: 3, brand: "BMW", color: "Cinza", km: 234 },
  ];

  return (
    <div className="App">
      <h1>Lista de carros</h1>
      <div className="car-container">
      {cars.map((car) => (
        <DetailsCars cars={car}/>
      ))}
      </div>
    </div>
  );
}

export default App;
