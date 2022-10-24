import "../paginas/formulario.css";
import "../paginas/entrar.css";
import {RiLockPasswordLine} from "react-icons/ri"

import React from "react";
import Campo from "../atomo/campo";

import { AiOutlineMail } from "react-icons/ai";
import CampoSenha from "../moleculas/campoSenha";

const Entrar = () => {
  return (
    <form className="formulario">
      {/* Titulo do formulário */}
      <div className="form-titulo">
        <h1>Seja bem-vindo!</h1>
        <b>Que bom que voltou!</b>
      </div>

      <hr />
      <fieldset className="formulario">
        {/* Campo email */}
        <div class="input-group">
          <div class="form-floating mb-3">
            <Campo tipo="email" texto="E-mail" icone={<AiOutlineMail />} />
          </div>
        </div>

        <CampoSenha icone={ <RiLockPasswordLine/> }/>

        <div class="col-12 btn-criar">
          <button type="submit" class="btn btn-outline-dark btn-lg shadow">
            entrar
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Entrar;
