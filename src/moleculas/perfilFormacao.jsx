//HOOKS E PACOTES
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {  } from "react-router-dom";

//Componentes

import DadosNivelEscolar from "./dadosNivelEscolar";
import Titulo from "../atomo/titulo";

//consumindo API
import Api from "../servidor/api";

//CSS
import "../componetes/tabs/todastabs/tabPerfil-formacao.css";
import "../atomo/campo.css";

const PerfilFormacao = () => {
  //ABRIR FORMULÁRIO//
  const [formulario, setFormulario] = useState(false);

  const AbriFormulario = () => setFormulario(true);
  const ocultarFormulario = () => setFormulario(false);

  //controle do formulário
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Redirecionamento da página caso requisição feita com sucesso


  //API
  const EnviarFormacao = (dados) =>
    Api.post("/formacao", dados)
      .then(() => console.log('Deu certo'))
      .catch(() => console.log("Deu errado"));

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
              <ErrorMessage errors={errors} name="nivel" />
              <ErrorMessage
                className="error-menssage"
                errors={errors}
                name="nivel"
                render={({ message }) => {
                  <p>{message}</p>;
                }}
              />
              <select
                className="form-select"
                aria-label="Default select example"
                name="nivel"
                {...register("nivel", {
                  required: "Em que nível está essa nova formação?",
                })}
              >
                <option value="1" name="nivel">
                  Escolha uma opção
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
                <div
                  {...register("situacao", {
                    required:
                      "Você não selecionou a situação atual da sua nova formação!",
                  })}
                >
                  <div>
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
                  </div>

                  <div>
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
                  </div>
                </div>
              </div>
              <ErrorMessage errors={errors} name="situacao" />
              <ErrorMessage
                className="error-menssage"
                errors={errors}
                name="situacao"
                render={({ message }) => {
                  <p>{message}</p>;
                }}
              />
            </fieldset>

            {/* Informações sobre o curso */}
            <div className="form-curso">
              <fieldset>
                <legend> Informações sobre o curso </legend>

                {/* escola ou instituição */}
                <ErrorMessage errors={errors} name="instituicao" />
                <ErrorMessage
                  errors={errors}
                  name="instituicao"
                  render={({ message }) => {
                    <p>{message}</p>;
                  }}
                />
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control shadow campo"
                    id="Instituicao"
                    placeholder="Instituição de ensino"
                    size="30"
                    name="instituicao"
                    {...register("instituicao", {
                      required: "Conte-nos onde estudou/estuda!",
                    })}
                  />

                  <label htmlFor="Instituicao">Instituição</label>
                </div>

                {/* curso */}
                <ErrorMessage errors={errors} name="curso" />
                <ErrorMessage
                  errors={errors}
                  name="curso"
                  render={({ message }) => {
                    <p>{message}</p>;
                  }}
                />
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control shadow campo"
                    id="Curso"
                    placeholder="Tema do meu curso"
                    size="30"
                    name="curso"
                    {...register("curso", {
                      required: "Eai?! O que você estudou/estuda",
                    })}
                  />

                  <label htmlFor="Curso">Curso</label>
                </div>

                {/* inicio */}
                <ErrorMessage errors={errors} name="inicio" />
                <ErrorMessage
                  errors={errors}
                  name="inicio"
                  render={({ message }) => {
                    <p>{message}</p>;
                  }}
                />
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control shadow campo"
                    id="Inicio"
                    size="30"
                    name="inicio"
                    {...register("inicio", {
                      required: "Quando iniciou essa formação?",
                    })}
                  />

                  <label htmlFor="Inicio">Inicio</label>
                </div>

                {/* Conclusão*/}
                <ErrorMessage errors={errors} name="conclusao" />
                <ErrorMessage
                  errors={errors}
                  name="conclusao"
                  render={({ message }) => {
                    <p>{message}</p>;
                  }}
                />
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control shadow campo"
                    id="conclusao"
                    size="30"
                    name="conclusao"
                    {...register("conclusao", {
                      required:
                        "Se não souber quando terminou/terminará coloque uma data aproximada.",
                    })}
                  />
                  <label htmlFor="conclusao">
                    Finalizado ou previsão de conclusao do curso
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
                      name="tema"
                      {...register("tema")}
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
                      name="temaUrl"
                      {...register("temaUrl")}
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
