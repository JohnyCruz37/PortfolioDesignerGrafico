import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";

import CriarConta from "../paginas/criarConta";
import Entrar from "../paginas/entrar";
import BtnFechar from "../atomo/btn-fechar";
import CadastroTrabalho from "../paginas/cadastro-trabalho";

import "../componetes/header.css";
import "../moleculas/modal.css";

Modal.setAppElement("#root");

const Header = () => {
  //modal criar conta
  const [criarConta, setCriarConta] = useState(false);
  const modalCriarAbrir = () => setCriarConta(true);
  const modalCriarFechar = () => setCriarConta(false);

  //modal entrar
  const [ModalEntrar, setModalEntrar] = useState(false);
  const modalEntrarAbrir = () => setModalEntrar(true);
  const modalEntrarFechar = () => setModalEntrar(false);

  //modal postar trabalho
  const [ModalPostarTrabalho, setModalPostarTrabalho] = useState(false);
  const modalPostarTrabalhoAbrir = () => setModalPostarTrabalho(true);
  const modalPostarTrabalhoFechar = () => setModalPostarTrabalho(false);

  //fecha o modal que estiver aberto
  function fecharmodal() {
    setModalEntrar(false);
    setCriarConta(false);
    setModalPostarTrabalho(false);
  }

  return (
    <header className="header fixed-top">
      <nav
        className="navbar navbar-dark bg-dark"
        aria-label="Dark offcanvas navbar"
      >
        {/* botoes externos */}
        <div className="container-fluid">
          <Link
            className="navbar-brand header-titulo"
            to={"/"}
            onClick={modalCriarFechar}
          >
            inicio
          </Link>

          {/* Menu suspenso Entrar ou criar conta */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={fecharmodal}
            >
              acesso
            </button>
            <ul class="dropdown-menu">
              {/* modal para login */}
              <li>
                <button class="dropdown-item" onClick={modalEntrarAbrir}>
                  entrar
                </button>
                <Modal
                  isOpen={ModalEntrar}
                  onRequestClose={modalEntrarFechar}
                  overlayClassName="modal-overlay"
                  className="modal-entrar"
                >
                  <BtnFechar fechar={modalEntrarFechar} />
                  <Entrar />
                </Modal>
              </li>

              {/* modal para criar conta */}
              <li>
                <button class="dropdown-item" onClick={modalCriarAbrir}>
                  criar conta
                </button>
                <Modal
                  isOpen={criarConta}
                  onRequestClose={modalCriarFechar}
                  overlayClassName="modal-overlay"
                  className="modal-criar"
                >
                  <BtnFechar fechar={modalCriarFechar} />
                  <CriarConta />
                </Modal>
              </li>
            </ul>
          </div>

          {/* Icone que abre o menu lateral */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarDark"
            aria-controls="offcanvasNavbarDark"
            onClick={fecharmodal}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* menu lateral */}
          <div
            className="offcanvas offcanvas-end text-bg-dark container custom"
            tabindex="-1"
            id="offcanvasNavbarDark"
            aria-labelledby="offcanvasNavbarDarkLabel"
          >

            {/* Titulo do menu lateral */}
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title menu-titulo"
                  id="offcanvasNavbarDarkLabel"
                >
                  saiba mais
                </h5>

                {/* Botão fechar do menu lateral */}
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>

              {/* Corpo do menu lateral menu e pesquisar */}
              <div className="offcanvas-body nav-bar nav-bar-expand-sm">

                {/* Lista menu */}
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="true" to={"/"}>
                      home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      aria-current="true"
                      to={"portfolio"}
                    >
                      portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <div
                      type="button"
                      className="nav-link"
                      aria-current="true"
                      onClick={modalPostarTrabalhoAbrir}
                    >
                      novo trabalho
                    </div>
                    <Modal
                      isOpen={ModalPostarTrabalho}
                      onRequestClose={modalPostarTrabalhoFechar}
                      overlayClassName="modal-overlay"
                      className="modal-postarTrabalho"
                    >
                      <BtnFechar fechar={modalPostarTrabalhoFechar} />
                      <CadastroTrabalho />
                    </Modal>
                  </li>
                </ul>

                {/* Pesquisar */}
                <form className="d-flex mt-3 pesquisar" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="procurar"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    encontrar
                  </button>
                </form>
              </div>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
