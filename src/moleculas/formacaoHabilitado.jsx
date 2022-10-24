import Campo from "../atomo/campo";
import "./dadosNivelEscolar.css";

const FormacaoHabilitado = (props) => {
  return (
    <div className="Formacao-dados">
      <div className="dados-status">
        <div className="campo-situacao">
          <Campo
            tipo="text"
            texto="Situação"
            size="20"
            value={props.situacao}
          />
        </div>
        <div className="botoes">
          <div className="botoes-btn-editar">
            <div className="botoes-dinamicos">
              <button type="button" className="btn btn-secondary btn-editar">
                salvar
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-editar"
                onClick={props.funcao}
              >
                cancelar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* habilitado */}
      <div className="dados-campos">
        <div className="dados-texto dados-nivel">
          <Campo tipo="text" texto="Nível" size="20" value={props.nivel} />
        </div>

        <div className="dados-texto">
          <Campo
            tipo="text"
            texto="Instituição"
            size="50"
            value={props.instituicao}
          />
        </div>

        <div className="dados-texto">
          <Campo tipo="text" texto="Curso" size="80" value={props.curso} />
        </div>

        <div className="dados-data">
          <Campo tipo="date" texto="Inicio" value={props.inicio} />
        </div>

        <div className="dados-data">
          <Campo tipo="date" texto="Conclusão" value={props.conclusao} />
        </div>

        <div className="dados-certificado">
          <div className="dados-texto">
            <Campo tipo="text" texto="Titulo" size="50" value={props.tema} />
          </div>

          <div className="dados-texto">
            <Campo
              tipo="text"
              texto="Link do Certificado"
              size="100"
              value={props.temaUrl}
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

export default FormacaoHabilitado;
