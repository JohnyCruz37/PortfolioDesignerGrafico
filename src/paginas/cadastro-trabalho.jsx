import "../paginas/formulario.css";
import "../paginas/cadastro.css";
import { useState } from "react";
import Campo from "../atomo/campo";

const CadastroTrabalho = () => {
  // mostrar campo outros
  const [outros, setOutros] = useState(false);

  return (
    <form className="form-postagem">
      {/* titulo */}
      <div className="form-titulo">
        <h1>Mostre ao mundo</h1>
        <b>Compartilhe o seu potencial.</b>
      </div>

      <hr />

      {/* CAMPO TITULO E DETALHES */}
      <div className="form">
        <div class="mb-3">
          <Campo texto="Titulo" tipo="text" size="90" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Detalhes:
          </label>
          <textarea
            class="form-control campo"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
        </div>
      </div>

      {/* CHECK DAS TECNOLOGIAS */}
      <div className="d-flex justify-content-around flex-wrap opcoes-check">
        <div class="form-check">
          <label class="form-check-label" for="photoshop">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="photoshop"
            />
            PhotoShop
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="illustrator">
            Illustrator
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="illustrator"
            />
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="corel">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="corel"
            />
            Corel Drawn
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="canvas">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="canvas"
            />
            Canvas
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="outras"
            onChange={(e) => setOutros(e.target.checked)}
          />
          <label class="form-check-label" for="outras">
            Outros
          </label>
          {outros ? (
            <Campo texto="Outras tecnologias" tipo="text" size="30" />
          ) : null}
        </div>
      </div>

      {/* INPUT PARA ADICIONAR ARQUIVO */}
      <fieldset className="arquivo-btn-compartilhar">
        <legend className="arquivo-legend">Adicione seu trabalho</legend>
        <div className="arquivo-campos">
          <div className="add-arquivo">
            <label for="formFileLg" class="form-label">
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </label>
          </div>

          {/* BOTÃO COMPARTILHAS */}
          <div class="col-12 btn-compartilhar">
            <button type="submit" class="btn btn-outline-dark btn-lg shadow">
              compartilhar
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default CadastroTrabalho;
