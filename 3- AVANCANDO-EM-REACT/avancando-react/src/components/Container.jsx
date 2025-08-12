const Container = ({ children, value }) => {
  return (
    <div>
      <h2>Este é o titulo do container</h2>
        {children}
        <p>O valor é: {value}</p>
    </div>
  );
};

export default Container;
