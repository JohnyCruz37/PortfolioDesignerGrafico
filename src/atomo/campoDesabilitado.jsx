import "./campo.css";

const CampoDesabilitado = (props) => {
  return (
    <div class="form-floating">
      <input
        type={props.tipo}
        class="form-control shadow campo"
        id={props.texto}
        placeholder={props.texto}
        key={props.key}
        value={props.value}
        size={props.size}
        disabled
      />
      <label for={props.texto}>{props.texto}</label>
    </div>
  );
};

export default CampoDesabilitado;