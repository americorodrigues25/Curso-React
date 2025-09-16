import React from "react";

type Props = {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];
  // 8 - enun
  category: Category;
};

export enum Category {
  JS = "JavaScript",
  TS = "Typescript",
  PY = "Python",
}

const Destructuring = ({
  title,
  content,
  commentQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentarios: {commentQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag} </span>
        ))}
      </div>
      <hr />
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default Destructuring;
