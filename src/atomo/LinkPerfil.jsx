import "../componetes/imgPosts.css";
import { Link } from "react-router-dom";
import Usuario from "../img/perfil.webp";

const LinkPerfil = () => {
  return (
    <Link to="/portfolio" className="info">
      <img src={Usuario} alt="perfil" className="usuario-img" />
      <h6 className="usuario-nome">Godofredo</h6>
    </Link>
  );
};

export default LinkPerfil;
