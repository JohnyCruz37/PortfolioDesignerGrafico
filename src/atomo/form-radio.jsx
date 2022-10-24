import "./form-radio.css";

const FormRadio = (props) => {
  return (
    <fieldset class="nivel">
      <legend> {props.titulo} </legend>

      <div class="form-check">
        <label class="form-check-label" for={props.id}>
          <input
            class="form-check-input"
            type="radio"
            name={props.nome}
            id={props.id}
          />
          <p>{props.estado1}</p>
        </label>

        <label class="form-check-label" for={props.id2}>
          <input
            class="form-check-input"
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
