import "./campo.css";

const Campo = (props) => {
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
      />
      <label for={props.texto}> {props.icone} {props.texto}</label>
    </div>
  );
};

export default Campo;
