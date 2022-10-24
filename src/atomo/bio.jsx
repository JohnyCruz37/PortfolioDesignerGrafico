import "./bio.css";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
const Bio = (props) => {
  const [editar, setEditar] = useState(true);
  const Editar = () => setEditar(false);
  const Salvar = () => setEditar(true);

  return (
    <div className="bio">
      {editar === false ? (
        <>
          <div className="bio">
            <textarea
              cols={props.cols}
              rows={props.rows}
              maxLength={props.maxLength}
              placeholder="Escreva agora!"
            ></textarea>
          </div>
          <button
            className="btn btn-secondary editar-textarea-salvar"
            type="button"
            onClick={Salvar}
          >
            Salvar
          </button>
        </>
      ) : (
        <>
        <div className="bio">
          <textarea 
            cols={props.cols}
            rows={props.rows}
            maxLength={props.maxLength}
            disabled
          ></textarea>
          <AiOutlineEdit className="editar-textarea" onClick={Editar} />
        </div>
        </>
      )}
    </div>
  );
};

export default Bio;
