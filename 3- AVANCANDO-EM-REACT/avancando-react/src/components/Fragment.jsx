const Fragment = ({ propFragmentTest }) => {
  return (
    <>
      <h2>Primeiro titulo</h2>
      <h3>Segundo titulo</h3>
      <p>{propFragmentTest}</p>
    </> // Usando fragment para agrupar elementos sem adicionar nós extras ao DOM
  );
};

export default Fragment;
