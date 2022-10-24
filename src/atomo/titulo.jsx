import "./titulo.css";

const Titulo = (props) => {
  return (
    <div className="titulo">
      <h2>{props.texto}</h2>
    </div>
  );
};

export default Titulo;
