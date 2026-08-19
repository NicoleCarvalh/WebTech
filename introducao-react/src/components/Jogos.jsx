const Jogos = (props) => {
  const statusClass = props.status === "Derrota" ? "bg-red" : "bg-green";


  return (
    <section className={`secao-jogos ${statusClass}`}>
      <h1 className="titulo">Lista de jogos - {props.time}</h1>

      <h2>Quantidade de jogos: {props.quantJogos}</h2>

      <h3>Ganhou ou perdeu?</h3>

      <p>{props.status}</p>
    </section>
  );
};

export default Jogos;
