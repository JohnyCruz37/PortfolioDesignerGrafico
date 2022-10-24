import "../componetes/tabs/todastabs/tabPerfil-capa.css";
import imgPerfil from "../img/perfil.jpeg";
import imgCapa from "../img/arquitetura.jpg";
import Bio from "../atomo/bio";

const PerfilUsuario = () => {
  return (
    <div className="perfil-img">
      <img className="capa-perfil" src={imgCapa} alt="" />
      <div className="img d-flex align-items-end">
        <div className="foto-nome d-flex flex-column align-items-center justify-content-end">
          <div className="foto ">
            <img className="foto-perfil" src={imgPerfil} alt="" />
          </div>
          <div className="nome">
            <h3>Johny Cruz</h3>
          </div>
        </div>
        <div className="bio">
          <Bio
            rows="3"
            maxLength="200"
          />
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
