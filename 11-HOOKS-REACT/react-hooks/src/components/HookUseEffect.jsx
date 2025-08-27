import { useEffect, useState } from 'react'

const HookUseEffect = () => {

    // 1 - useEffect sem array de depêndencias
    useEffect(() => {

        console.log("Executado varias vezes")
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    }

    //  2 - useEffect com array vazio
    useEffect(() => {

        console.log("Sendo executado apenas uma vez")
    }, []);

    // 3 - useEffect com array de depêndencias
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if (anotherNumber > 0)
            console.log("É executado apenas quando o anotherNumber alterar")

    }, [anotherNumber]);

    // cleanup do useEffect
    useEffect(() => {

        const timer = setTimeout(() => {

            console.log("Hello World")

        }, 2000);

        return () => clearTimeout(timer);
    }, [anotherNumber]);

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
            <hr />
        </div>
    )
}

export default HookUseEffect
