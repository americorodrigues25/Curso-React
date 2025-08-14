import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // 6 - controlled inputs

  // 3 - Gerênciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name, email, bio);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que o formulario recarregue a página

    // 7 - Limpar formulario
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/*5 - envio de form*/}
      {/*1 - Criação de form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/*2 - label envolvendo input*/}
        <label>
          <span>E-mail</span>
          {/*simplificação de manipulação com state*/}
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/*8 - input textarea*/}
        <label>
          <span>Bio</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuario"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/*input select*/}
        <label>
          <span>Cargo na empresa</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled selected>
              Selecione seu cargo
            </option>
            <option value="Dev Junior Front">Dev Junior Front-End</option>
            <option value="Dev Junior Back">Dev Junior Back-End</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
        <p>Cargo selecionado: {role}</p>
      </form>
    </div>
  );
};

export default MyForm;
