import "../paginas/inicio.css";

import imgAnime from "../img/anime.jpg";
import imgArquitetura from "../img/arquitetura.jpg";
import imgPost from "../img/post.webp";
import imgArte from "../img/arte.jpg";
import SectionCards from "../componetes/sectionCards";
import Feed from "../componetes/feed";

const Inicio = () => {
  var titulo = ["anime", "arquitetura", "social", "arte", "Moda"];

  return (
    <main className="inicio">
      <SectionCards
        titulo="principais buscas"
        tema1={titulo[0]}
        img1={imgAnime}
        tema2={titulo[1]}
        img2={imgArquitetura}
        tema3={titulo[2]}
        img3={imgPost}
        tema4={titulo[3]}
        img4={imgArte}
      />

      <Feed texto="feed" />
    </main>
  );
};

export default Inicio;
