import CampoSenha from "../moleculas/campoSenha";
import "../paginas/criarconta.css";
import "../paginas/formulario.css";

const CriarConta = () => {
  return (
    <form className="form-criar">
      {/* Titulo do formulário */}
      <div className="form-titulo">
        <h1>Cadastre-se</h1>
        <b>É fácil e rápido.</b>
      </div>

      <hr />

      {/* Campos do formulario */}
      <fieldset className="campos-form-criar">
        {/* Nome */}
        <div class="input-group row g-2 mb-3 campo-50">
          <div class="form-floating">
            <input
              type="text"
              class="form-control shadow campo"
              id="floatingInputGrid"
              placeholder="nome"
              required
            />
            <label for="floatingInputGrid">Nome</label>
          </div>
        </div>

        {/* sobrenome */}
        <div class="input-group row g-2 mb-3 campo-50">
          <div class="form-floating">
            <input
              type="text"
              class="form-control shadow campo"
              id="floatingInputGrid"
              placeholder="sobrenome"
              required
            />
            <label for="floatingInputGrid">Sobrenome</label>
          </div>
        </div>

        {/* email */}
        <div class="input-group campo-email">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control shadow campo"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Email</label>
          </div>
        </div>

        <div className="input-group row g-2 campo-50">
          <CampoSenha />
        </div>

        {/* confirmação da senha */}
        <div class="input-group row g-2 campo-50">
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control shadow campo"
              id="floatingInputGrid"
              placeholder="confirmar senha"
              required
            />
            <label for="floatingInputGrid">confirmar senha</label>
          </div>
        </div>
      </fieldset>

      <div class="col-12 btn-criar">
        <button type="submit" class="btn btn-secondary btn-lg shadow">
          criar
        </button>
      </div>
    </form>
  );
};

export default CriarConta;
