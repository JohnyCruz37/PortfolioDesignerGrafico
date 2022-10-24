import PerfilCurtida from "./perfilCurtida";

import "./comentario.css"


const Comentario = () => {
    return(
        <div className="comentario">
              <div className="comentario-perfil">
                <PerfilCurtida />
              </div>
                <div className="comentario-texto">
                    <p> ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorum sequi molestias aspernatur aut officiis suscipit excepturi debitis a delectus enim impedit odit earum voluptate quas, labore modi et sint. </p>
                </div>
            </div>
    )
}

export default Comentario;