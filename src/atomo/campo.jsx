import "./campo.css";

const Campo = (props) => {
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
      />
      <label htmlFor={props.texto}>
        {props.icone} {props.texto}
      </label>
    </div>
  );
};

export default Campo;
