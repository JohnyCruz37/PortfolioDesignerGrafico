import "./modalPostagem.css";
import Anime from "../img/anime.jpg";
import PerfilCurtida from "../moleculas/perfilCurtida";
import Comentario from "../moleculas/comentario";

const ModalPostagem = () => {
  return (
    <div className="body-modal">
      <div className="postagem">
        <img src={Anime} alt="Anime" />
      </div>
      <div className="post-info">
        <div className="info-perfil-curtida">
          <div className="perfil">
            <PerfilCurtida className="info-perfil-curtida" />
          </div>
        </div>

        <div className="post-descricao">
          <p>
            ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            laudantium dolorem, vitae commodi error voluptates asperiores,
            repellat id non modi sapiente a quibusdam nam rerum maiores et
            doloribus veniam perferendis!
          </p>
        </div>

        <div className="comentarios">
          <Comentario />
          <Comentario />
          <Comentario />
          <Comentario />
          <Comentario />
          <Comentario />
        </div>
      </div>
    </div>
  );
};

export default ModalPostagem;
