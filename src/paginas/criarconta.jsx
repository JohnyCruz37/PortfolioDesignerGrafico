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
        <div className="input-group row g-2 mb-3 campo-50">
          <div className="form-floating">
            <input
              type="text"
              className="form-control shadow campo"
              id="floatingInputGrid"
              placeholder="nome"
              required
            />
            <label htmlFor="floatingInputGrid">Nome</label>
          </div>
        </div>

        {/* sobrenome */}
        <div className="input-group row g-2 mb-3 campo-50">
          <div className="form-floating">
            <input
              type="text"
              className="form-control shadow campo"
              id="floatingInputGrid"
              placeholder="sobrenome"
              required
            />
            <label htmlFor="floatingInputGrid">Sobrenome</label>
          </div>
        </div>

        {/* email */}
        <div className="input-group campo-email">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control shadow campo"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
        </div>

        <div className="input-group row g-2 campo-50">
          <CampoSenha />
        </div>

        {/* confirmação da senha */}
        <div className="input-group row g-2 campo-50">
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control shadow campo"
              id="floatingInputGrid"
              placeholder="confirmar senha"
              required
            />
            <label htmlFor="floatingInputGrid">confirmar senha</label>
          </div>
        </div>
      </fieldset>

      <div className="col-12 btn-criar">
        <button type="submit" className="btn btn-secondary btn-lg shadow">
          criar
        </button>
      </div>
    </form>
  );
};

export default CriarConta;
