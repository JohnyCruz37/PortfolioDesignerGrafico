import { Link } from "react-router-dom";
import CampoDesabilitado from "../atomo/campoDesabilitado";
import "./dadosNivelEscolar.css";

const FormacaoDesabilitado = (props) => {
  return (
    <div className="Formacao-dados" >
      <div className="dados-status">
        <div className="campo-situacao">
          <CampoDesabilitado
            tipo="text"
            texto="Situação"
            value={props.situacao}
            size="20"
          />
        </div>
        <div className="botoes">
          <div className="botoes-btn-editar">
            <button
              key={props.key}
              type="button"
              className="btn btn-secondary btn-editar"
              onClick={props.funcao}
            >
              Editar
            </button>
          </div>
        </div>
      </div>

      <div className="dados-campos">
        <div className="dados-texto dados-nivel">
          <CampoDesabilitado
            tipo="text"
            texto="Nível"
            value={props.nivel}
            size="20"
          />
        </div>

        <div className="dados-texto">
          <CampoDesabilitado
            tipo="text"
            texto="Instituição"
            value={props.instituicao}
            size="50"
          />
        </div>

        <div className="dados-texto">
          <CampoDesabilitado
            tipo="text"
            texto="Curso"
            value={props.curso}
            size="80"
          />
        </div>

        <div className="dados-data">
          <CampoDesabilitado tipo="date" texto="Inicio" value={props.inicio} />
        </div>

        <div className="dados-data">
          <CampoDesabilitado
            tipo="date"
            texto="Conclusão"
            value={props.conclusao}
          />
        </div>

        <div className="dados-certificado">
          <div className="dados-texto">
            <CampoDesabilitado
              tipo="text"
              texto="Titulo"
              value={props.tema}
              size="50"
            />
          </div>

          <div className="dados-texto">
            <CampoDesabilitado
              tipo="url"
              texto="Link do Certificado"
              value={props.temaUrl}
              size="100"
            />
          </div>
          <Link to={`${props.temaUrl}`} target="_blank">
            <button
              type="button"
              className="btn btn-secondary btn-abri-certificado"
            >
              abrir certificado
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormacaoDesabilitado;
