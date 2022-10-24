import "./imgPosts.css";
import "../moleculas/modal.css";

import Modal from "react-modal";

import Anime from "../img/anime.jpg";


import { useState } from "react";
import BtnFechar from "../atomo/btn-fechar";
import ModalPostagem from "./modalPostagem";
import PerfilCurtida from "../moleculas/perfilCurtida";

Modal.setAppElement("#root");

const ImgPost = () => {
  const [ModalPost, setModalPost] = useState(false);

  function AbrirPost() {
    setModalPost(true);
  }

  function FecharPost() {
    setModalPost(false);
  }

  return (
    <article className="imgPost">
      <img
        src={Anime}
        alt="anime"
        className="imgPost-img"
        onClick={AbrirPost}
      />
      <PerfilCurtida />

      <Modal
        isOpen={ModalPost}
        onRequestClose={FecharPost}
        overlayClassName="modal-overlay"
        className="modal-post"
      >
        <ModalPostagem />
        <BtnFechar fechar={FecharPost} />
      </Modal>
    </article>
  );
};

export default ImgPost;
