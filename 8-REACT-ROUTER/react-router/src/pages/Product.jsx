import "./Product.css";

import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4 - rota dinâmica
  const { id } = useParams();

  const url = `http://localhost:3000/products/${id}`;
  const { data: product, loading, error } = useFetch(url);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-details">
      {product && (
        <>
          <h2>{product.name}</h2>
          <p>Preço: R$ {product.price}</p>
          <p>ID do produto: {product.id}</p>
        {/* 6 - nested route */}
        <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </>
      )}
    </div>
  );
};

export default Product;
