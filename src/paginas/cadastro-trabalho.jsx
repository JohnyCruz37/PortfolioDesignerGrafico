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
        <div className="mb-3">
          <Campo texto="Titulo" tipo="text" size="90" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Detalhes:
          </label>
          <textarea
            className="form-control campo"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
        </div>
      </div>

      {/* CHECK DAS TECNOLOGIAS */}
      <div className="d-flex justify-content-around flex-wrap opcoes-check">
        <div className="form-check">
          <label className="form-check-label" htmlFor="photoshop">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="photoshop"
            />
            PhotoShop
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="illustrator">
            Illustrator
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="illustrator"
            />
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="corel">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="corel"
            />
            Corel Drawn
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="canvas">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="canvas"
            />
            Canvas
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="outras"
            onChange={(e) => setOutros(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="outras">
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
            <label htmlFor="formFileLg" className="form-label">
              <input
                className="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
            </label>
          </div>

          {/* BOTÃO COMPARTILHAS */}
          <div className="col-12 btn-compartilhar">
            <button
              type="submit"
              className="btn btn-outline-dark btn-lg shadow"
            >
              compartilhar
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default CadastroTrabalho;
