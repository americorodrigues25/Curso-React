import "./App.css";
import img2 from "./assets/img-2.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/listRender";
import CondicionalRender from "./components/condicionalRender";

function App() {
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
      
    </div>
  );
}

export default App;
