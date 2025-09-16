import React from "react";

type Props = {
  name: string;
  age: number;
};

const SecondComponent = (props: Props) => {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>
        O nome dele é: {props.name}, tem {props.age} anos.
      </p>
      <hr />
    </div>
  );
};

export default SecondComponent;
