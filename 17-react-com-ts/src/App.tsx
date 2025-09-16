import React, { createContext } from "react";
import "./App.css";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5- desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 9 - type
type textOrNull = string | null;

// 10 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Americo";
  const age: number = 27;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `ola, ${name}`;
  };

  // 9 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "opa";

  // 10 - context
  const contextValue: IAppContext = {
    language: "javascript",
    framework: "express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com Typescript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking ? (
          <p>Esta trabalhando...</p>
        ) : (
          <p>Não esta trabalhando...</p>
        )}
        <h3>{userGreeting(name)}</h3>
        {/* <h3>{userGreeting(age)}</h3> */}
        <FirstComponent />
        <SecondComponent name="João" age={30} />
        <Destructuring
          title="Primeiro post"
          content="Conteudo"
          commentQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
