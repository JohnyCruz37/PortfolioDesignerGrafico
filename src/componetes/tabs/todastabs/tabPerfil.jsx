import PerfilUsuario from "../../../moleculas/perfilUsuario";
import PerfilContato from "../../../moleculas/perfilContato";
import PerfilFormacao from "../../../moleculas/perfilFormacao";

const TabPerfil = () => {
  return (
    <article className="perfil">
      <PerfilUsuario />
      <PerfilContato />
      <PerfilFormacao />
      <div className="perfil-certificado"></div>
      <div className="perfil-carreira"></div>
    </article>
  );
};

export default TabPerfil;
