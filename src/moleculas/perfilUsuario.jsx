import "../componetes/tabs/todastabs/tabPerfil-capa.css";
import imgPerfil from "../img/perfil.jpeg";
import imgCapa from "../img/arquitetura.jpg";
import Bio from "../atomo/bio";
import Api from "../servidor/api";
import { useState } from "react";
import { useEffect } from "react";

const PerfilUsuario = () => {
  const [bio, setBio] = useState([]);

  useEffect(() => {
    async function getBio() {
      const res = await Api.get("/bio")
        .then((response) => {
          const dados = response.data;
          setBio(dados);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getBio();
  }, []);

  // async function postBio(texto) {
  //   fetch(Api.post('/bio'), {
  //     headers: {'content-Type': 'application/json'},
  //     body: JSON.stringify(texto)
  //   })
  //     .then(resposta =>{
  //       if (resposta.ok) {
  //         this.getBio();
  //       } else {
  //         alert('Sua bio não foi adicionada')
  //       }
  //     })

  // }

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
        {bio &&
          bio.map((dado) => (
            <div className="bio" key={dado._id}>
              <Bio rows="3" maxLength="200" texto={dado.texto} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PerfilUsuario;
