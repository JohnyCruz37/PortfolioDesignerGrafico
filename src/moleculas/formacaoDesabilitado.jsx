import CampoDesabilitado from "../atomo/campoDesabilitado";
import "./dadosNivelEscolar.css";

const FormacaoDesabilitado = (props) => {

  const AbrirLink = () => {}

  return (
    <div className="Formacao-dados">
      <div className="dados-status">
        <div className="campo-situacao">
          <CampoDesabilitado
            tipo="text"
            texto="Situação"
            value="Cursando"
            size="20"
          />
        </div>
        <div className="botoes">
          <div className="botoes-btn-editar">
            <button
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
            value="Superior"
            size="20"
          />
        </div>

        <div className="dados-texto">
          <CampoDesabilitado
            tipo="text"
            texto="Instituição"
            value="Nome da escola"
            size="50"
          />
        </div>

        <div className="dados-texto">
          <CampoDesabilitado
            tipo="text"
            texto="Curso"
            value="Nome do curso"
            size="80"
          />
        </div>

        <div className="dados-data">
          <CampoDesabilitado tipo="date" texto="Inicio" />
        </div>

        <div className="dados-data">
          <CampoDesabilitado tipo="date" texto="Conclusão" />
        </div>

        <div className="dados-certificado">
          <div className="dados-texto">
            <CampoDesabilitado
              tipo="text"
              texto="Titulo"
              value="Titulo do certificado"
              size="50"
            />
          </div>

          <div className="dados-texto">
            <CampoDesabilitado
              tipo="url"
              texto="Link do Certificado"
              value="http://www.linkdoseucertificado/aqui"
              size="100"
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-abri-certificado"
          >
            abrir certificado
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormacaoDesabilitado;
