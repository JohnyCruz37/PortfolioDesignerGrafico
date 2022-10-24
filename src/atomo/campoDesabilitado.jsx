import "./campo.css";

const CampoDesabilitado = (props) => {
  return (
    <div className="form-floating">
      <input
        type={props.tipo}
        className="form-control shadow campo"
        id={props.texto}
        placeholder={props.texto}
        key={props.key}
        value={props.value}
        size={props.size}
        disabled
      />
      <label htmlFor={props.texto}>{props.texto}</label>
    </div>
  );
};

export default CampoDesabilitado;
