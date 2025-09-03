import "./Auth.css";

// components 
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// redux


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id="container_form">
            <div id="login">
                <h2>SnapGram</h2>
                <p className="subtitle">Faça login para continuar</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                    <input type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                    <button type="submit">Entrar</button>
                </form>
                <p>Não tem uma conta ? <Link to="/register">Clique aqui</Link></p>
            </div>
        </div>
    )
}

export default Login
