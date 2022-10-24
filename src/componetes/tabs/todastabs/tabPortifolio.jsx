import Bio from "../../../atomo/bio";
import Titulo from "../../../atomo/titulo";
import Feed from "../../../componetes/feed";

import "./tabPortfolio.css";

const TabPortfolio = () => {
  return (
    <article className="TabPortfolio">
      <div className="portfolio-titulo">
        <Titulo texto="Veja aqui meus trabalhos" />
        <h3>Apresentação</h3>
        <Bio
          cols="170"
          rows="5"
          maxLength="1000"
          placeholder="Fale mais sobre você, seu trabalho. Impressione!"
        />
      </div>
      <div className="filtro-projetos">
        {/* area de pesquisa */}
        <form className="d-flex mt-3" role="search">
          <select
            className="form-select form-select-sm example me-2"
            aria-label=".form-select-sm"
          >
            <option selected>Escolha a tecnologia</option>
            <option value="1">PhotoShop</option>
            <option value="2">Corel Drawn</option>
            <option value="3">Illustrator</option>
            <option value="4">Canvas</option>
            <option value="5">Figma</option>
          </select>
        </form>
      </div>
      <Feed texto="projetos" />
    </article>
  );
};

export default TabPortfolio;
