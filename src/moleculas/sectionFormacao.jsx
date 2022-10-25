import Campo from "../atomo/campo";
import "./dadosNivelEscolar";

const SectionFormacao = (props) => {
  //Habilitar e desabilitar edição
  const [editar, setEditar] = useState(false);
  const habilitarEditar = () => setEditar(true);
  const cancelarEdicao = () => setEditar(false);

  const AbrirLink = () => {
    props.temaUrl;
  };
  return (
    <section>
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
      <div className="Formacao-dados">
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
            <CampoDesabilitado
              tipo="date"
              texto="Inicio"
              value={props.inicio}
            />
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
            <button
              type="button"
              className="btn btn-secondary btn-abri-certificado"
              onClick={AbrirLink}
            >
              abrir certificado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
