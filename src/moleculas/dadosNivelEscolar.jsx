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

      console.log(res);
    }

    getDadosFormacao();
    console.log(dadosFormacao);
  }, []);

  return (
    <article className="Formacao">
      {editar ? (
        <>
          <FormacaoHabilitado funcao={cancelarEdicao} />
        </>
      ) : (
        <>
          <FormacaoDesabilitado funcao={habilitarEditar} />
        </>
      )}
      <div className="Formacao-dados testando">
        <h3>teste</h3>
        {dadosFormacao.map((dado) => {
          <div>
            <p>Deu certo!!!!</p>
            <p key={dado._id}> {dado.situacao} </p>;
          </div>;
        })}
      </div>
    </article>
  );
};

export default DadosNivelEscolar;
