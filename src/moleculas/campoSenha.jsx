import { React, useState } from "react";
import Campo from "../atomo/campo";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const CampoSenha = (props) => {
  // visualiar ou ocultar a senha digitada
  const [ver, setVer] = useState(false);
  const verSenha = () => setVer(true);
  const ocultarSenha = () => setVer(false);
  return <>
            {/* Campo senha */}
            {ver ? (
          <div className="input-group">
            <div className="form-floating campo-senha">
              <Campo
                tipo="text"
                texto="Senha"
                size="10"
                icone={props.icone}
                required
              />
            </div>
            <div className="icone-senha">
              <BsFillEyeFill onClick={ocultarSenha} />
            </div>
          </div>
        ) : (
          <div className="input-group">
            <div className="form-floating campo-senha">
              <Campo
                tipo="password"
                texto="Senha"
                size="10"
                icone={props.icone}
                required
              />
            </div>
            <div className="icone-senha">
              <BsFillEyeSlashFill onClick={verSenha} />
            </div>
          </div>
        )}
  </>;
};

export default CampoSenha;
