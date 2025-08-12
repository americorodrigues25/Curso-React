import "./App.css";
import img2 from "./assets/img-2.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/listRender";
import CondicionalRender from "./components/condicionalRender";
import ShowUserName from "./components/showUserName";

function App() {

  // Variaveis que serão utilizadas no componente ShowUserName
  const name = "Americo";
  const age = 30;
  const city = "Suzano";

  // Função para mostrar alert, por meio de props
  const mostrarAlert = (message) => {
    alert("Mensagem recebida: " + message)
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

      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* Componente que recebe props */}
      <ShowUserName name={name} age={age} city={city} enviarMensagem={mostrarAlert} />
    </div>
  );
}

export default App;
