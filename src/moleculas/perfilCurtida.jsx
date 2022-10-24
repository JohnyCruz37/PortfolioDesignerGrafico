// usar o 'FcLike' para quando o post receber uma curtida
import { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import LinkPerfil from "../atomo/LinkPerfil";

const PerfilCurtida = () => {
  const [curtida, setCurtida] = useState(false);
  const curtiu = () => setCurtida(true);
  const naoCurtiu = () => setCurtida(false);

  return (
    <div className="imgPost-info">
      <div className="imgPost-usuario">
        <LinkPerfil />
        {/* ação de curtir ou descurtir */}
        {curtida ? (
          <div className="like">
            <FcLike className="like-icon" onClick={naoCurtiu}/>
          </div>
        ) : (
          <div className="like">
            <FcLikePlaceholder className="like-icon" onClick={curtiu}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfilCurtida;
