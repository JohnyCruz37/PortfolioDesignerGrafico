import { useState } from "react";
import { useEffect } from "react";
import "./dadosNivelEscolar.css";
import FormacaoDesabilitado from "./formacaoDesabilitado";
import FormacaoHabilitado from "./formacaoHabilitado";
import Api from "../servidor/api";

const DadosNivelEscolar = () => {
  //Habilitar e desabilitar edição
  const [editar, setEditar] = useState(false);
  const habilitarEditar = () => setEditar(true);
  const cancelarEdicao = () => setEditar(false);

  //Pegando dados de Formação da API
  const [dadosFormacao, setDadosFormacao] = useState([]);

  useEffect(() => {
    async function getDadosFormacao() {
      const res = await Api.get("/formacao")
        .then((response) => {
          const dados = response.data;
          setDadosFormacao(dados);
        })
        .catch((error) => console.log(error));
    }

    getDadosFormacao();
  }, []);
  {
    dadosFormacao.map((dado) => {
      return (
        <article className="Formacao" key={dado._id}>
          {editar ? (
            <>
              <FormacaoHabilitado funcao={cancelarEdicao} />
            </>
          ) : (
            <>
              <FormacaoDesabilitado funcao={habilitarEditar} />
            </>
          )}
        </article>
      );
    });
  }
};

export default DadosNivelEscolar;
