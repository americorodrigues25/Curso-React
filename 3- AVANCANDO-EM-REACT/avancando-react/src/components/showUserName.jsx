const ShowUserName = (props) => {
    return (
        <div>
            <h2>O nome do usuario: {props.name}</h2>
            <p>Idade: {props.age}</p>
            <p>Cidade: {props.city}</p>
            {/* recebendo uma props de mensagem */}
            <button onClick={() => (props.enviarMensagem("Ola mundooooo!"))}>Enviar mensagem</button>
        </div>
    )
}

export default ShowUserName
