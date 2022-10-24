import FormRadio from "../atomo/form-radio";
import DadosNivelEscolar from "./dadosNivelEscolar";
import { useState } from "react";
import FormCursandoConcluido from "./formCursandoConcluido";
import Campo from "../atomo/campo";
import Titulo from "../atomo/titulo";
import "../componetes/tabs/todastabs/tabPerfil-formacao.css";

const PerfilFormacao = () => {
  //ABRIR FORMULÁRIO//
  const [formulario, setFormulario] = useState(false);

  const AbriFormulario = () => setFormulario(true);
  const ocultarFormulario = () => setFormulario(false);
  
  return (
    <div className="perfil-formacao">
      <div className="botao-formulario">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={AbriFormulario}
        >
          adicionar formação
        </button>
      </div>
      {formulario ? (
        <form className="form-formacao">
          {/* nível de estudo */}
          <fieldset className="mb-3 nivel-estudo">
            <legend>Nível de estudo</legend>
            <select
              class="form-select"
              aria-label="Default select example"
              required
            >
              <option selected>Ensino</option>
              <option value="1">Médio</option>
              <option value="2">Complementar / especialização</option>
              <option value="3">Técnico</option>
              <option value="4">Superior</option>
              <option value="5">Pós-Graduação</option>
            </select>
          </fieldset>

          {/* status do curso */}
          <div className="status">
            <FormRadio
              titulo="Status"
              estado1="Cursando"
              estado2="Concluído"
              nome="status"
              id="cursando"
              id2="concluido"
            />
          </div>

          {/* Informações sobre o curso */}
          <div className="form-curso">
            <FormCursandoConcluido titulo="Informações sobre o curso" />
            <fieldset className="certificado">
              <legend>Certificado</legend>
              <div>
                <div className="mb-3">
                  <Campo tipo="texto" texto="Tema" key="tema" />
                </div>
                <Campo tipo="url" texto="URL" key="url" />
              </div>
            </fieldset>
          </div>

          {/* enviar as informações do formulário */}
          <div className="btn-formacao mb-3">
            <button
              type="submit"
              className="btn btn-outline-dark btn-lg shadow btn-cancelar"
              onClick={ocultarFormulario}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="btn btn-outline-dark btn-lg shadow"
              onClick={ocultarFormulario}
            >
              Salvar
            </button>
          </div>
        </form>
      ) : null}

      <section className="nivel-escolar-dados">
        <Titulo texto="Formação" />
        <DadosNivelEscolar />
      </section>
    </div>
  );
};

export default PerfilFormacao;
