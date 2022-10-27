//Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";

//Componentes

import DadosNivelEscolar from "./dadosNivelEscolar";
import Titulo from "../atomo/titulo";

//CSS
import "../componetes/tabs/todastabs/tabPerfil-formacao.css";
import "../atomo/campo.css";

const PerfilFormacao = () => {
  //ABRIR FORMULÁRIO//
  const [formulario, setFormulario] = useState(false);

  const AbriFormulario = () => setFormulario(true);
  const ocultarFormulario = (dados) => {
    setFormulario(false);
  };

  //controle do formulário
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const EnviarFormacao = (dados) => console.log(dados);

  return (
    <div className="perfil-formacao">
      {/* botão para abrir o formulario que adiciona uma nova formação */}

      {/* condicional que abre ou oculta o formulario */}
      {formulario ? (
        <>
          <div className="botao-formulario">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={ocultarFormulario}
            >
              Sair
            </button>
          </div>
          {/* // formulário de formação */}
          <form
            className="form-formacao"
            onSubmit={handleSubmit(EnviarFormacao)}
          >
            {/* nível de estudo */}
            <fieldset className="mb-3 nivel-estudo">
              <legend>Nível de estudo</legend>
              <select
                className="form-select"
                aria-label="Default select example"
                required
                defaultValue="1"
                name="nivel"
                {...register("nivel")}
              >
                <option value="Ensino" name="nivel">
                  Ensino
                </option>
                <option value="Médio" name="nivel">
                  Médio
                </option>
                <option value="complementar ou especialização" name="nivel">
                  Complementar / especialização
                </option>
                <option value="Técnico" name="nivel">
                  Técnico
                </option>
                <option value="Superior" name="nivel">
                  Superior
                </option>
                <option value="Pós-graduação" name="nivel">
                  Pós-Graduação
                </option>
              </select>
            </fieldset>

            {/* status do curso */}
            <fieldset className="status">
              <legend> Situação da Formação </legend>

              <div className="form-check">
                <label {...register("situacao")}>
                  <label className="form-check-label" htmlFor="cursando">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="situacao"
                      value="Cursando"
                      id="cursando"
                    />
                    <p>Cursando</p>
                  </label>

                  <label className="form-check-label" htmlFor="concluido">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="situacao"
                      value="Concluido"
                      id="concluido"
                    />
                    <p>Concluido</p>
                  </label>
                </label>
              </div>
            </fieldset>

            {/* Informações sobre o curso */}
            <div className="form-curso">
              <fieldset>
                <legend> Informações sobre o curso </legend>

                {/* escola ou instituição */}
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control shadow campo"
                    id="Instituicao"
                    placeholder="Instituição de ensino"
                    size="30"
                    name="instituicao"
                    {...register("instituicao")}
                  />
                  <label htmlFor="Instituicao">Instituição</label>
                </div>

                {/* curso */}
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control shadow campo"
                    id="Curso"
                    placeholder="Tema do meu curso"
                    size="30"
                    name="curso"
                    {...register("curso")}
                  />
                  <label htmlFor="Curso">Curso</label>
                </div>

                {/* inicio */}
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control shadow campo"
                    id="Inicio"
                    size="30"
                    name="Inicio"
                    {...register("Inicio")}
                  />
                  <label htmlFor="Inicio">Inicio</label>
                </div>

                {/* Conclusão*/}
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control shadow campo"
                    id="Termino"
                    size="30"
                    name="Termino"
                    {...register("Termino")}
                  />
                  <label htmlFor="Termino">
                    Finalizado ou previsão de termino do curso
                  </label>
                </div>
              </fieldset>

              {/* setor para adicionar certificado */}
              <fieldset className="certificado">
                <legend>Certificado</legend>
                {/* titulo para o certificado */}
                <div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control shadow campo"
                      id="Tema"
                      placeholder="Assunto do meu certificado"
                      size="30"
                      name="certificado"
                      {...register("certificado")}
                    />
                    <label htmlFor="Tema">Titulo</label>
                  </div>

                  {/* link para acessar o certificado */}
                  <div className="form-floating">
                    <input
                      type="url"
                      className="form-control shadow campo"
                      id="url"
                      placeholder="link do meu certificado"
                      size="30"
                      name="url"
                      {...register("url")}
                    />
                    <label htmlFor="url">Link</label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* enviar as informações do formulário */}
            <div className="btn-formacao mb-3">
              <button
                type="submit"
                className="btn btn-outline-dark btn-lg shadow"
              >
                Salvar
              </button>
            </div>
          </form>
        </>
      ) : (
        // botão que mostra com a página atualizada
        <>
          <div className="botao-formulario">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={AbriFormulario}
            >
              adicionar formação
            </button>
          </div>
        </>
      )}

      <section className="nivel-escolar-dados">
        <Titulo texto="Formação" />
        <DadosNivelEscolar />
      </section>
    </div>
  );
};

export default PerfilFormacao;
