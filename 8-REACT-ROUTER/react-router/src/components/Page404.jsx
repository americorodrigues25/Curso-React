import "./Page404.css";

const Page404 = () => {
  return (
    <div className="page-404">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A página que você procura não existe ou foi movida.</p>
      <a href="/" className="btn-home">
        Voltar para a Home
      </a>
    </div>
  );
};

export default Page404;
