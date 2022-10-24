import "../componetes/tabs/todastabs/tabPerfil-contato.css";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
const PerfilContato = () => {
  return (
    <div className="perfil-contato">
      <div className="redes">
        <a href="#" target="_blank">
          {" "}
          <FaWhatsapp className="icone-rede" />{" "}
        </a>
        <a href="https://pt-br.facebook.com/" target="_blank">
          {" "}
          <FaFacebook className="icone-rede" />{" "}
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          {" "}
          <FaInstagram className="icone-rede" />{" "}
        </a>
        <a href="https://github.com/" target="_blank">
          {" "}
          <FaGithub className="icone-rede" />{" "}
        </a>
      </div>
    </div>
  );
};

export default PerfilContato;
