import "./form-radio.css";

const FormRadio = (props) => {
  return (
    <fieldset className="nivel">
      <legend> {props.titulo} </legend>

      <div className="form-check">
        <label className="form-check-label" for={props.id}>
          <input
            className="form-check-input"
            type="radio"
            name={props.nome}
            id={props.id}
          />
          <p>{props.estado1}</p>
        </label>

        <label className="form-check-label" for={props.id2}>
          <input
            className="form-check-input"
            type="radio"
            name={props.nome}
            id={props.id2}
          />
          <p>{props.estado2}</p>
        </label>
      </div>
    </fieldset>
  );
};

export default FormRadio;
