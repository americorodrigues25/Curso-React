// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <h2>About</h2>
      <p>Valor novamente do contexto vindo da pagina about: {contextValue}</p>
    </div>
  );
};

export default About;
