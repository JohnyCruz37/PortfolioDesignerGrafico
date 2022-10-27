import Campo from "../atomo/campo";

import "./formCursandoConcluido.css";

const FormCursandoConcluido = (props) => {

  return (
    <fieldset className="formCursandoConcluido">
      <legend className="legend"> {props.titulo} </legend>
      <Campo className="campo" tipo="text" texto="Instituição" />
      <Campo className="campo" tipo="text" texto="Curso" />
      <Campo className="campo data" tipo="date" texto="Data de inicio" />
      <Campo
        className="campo data"
        tipo="date"
        texto="Previsão de conclusão / conclusão"
      />
    </fieldset>
  );
};

export default FormCursandoConcluido;
