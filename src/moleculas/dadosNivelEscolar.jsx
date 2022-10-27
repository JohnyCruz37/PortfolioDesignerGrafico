import { useState } from "react";
import { useEffect } from "react";
import "./dadosNivelEscolar.css";
import FormacaoDesabilitado from "./formacaoDesabilitado";
import FormacaoHabilitado from "./formacaoHabilitado";
import Api from "../servidor/api";

const DadosNivelEscolar = () => {
  //Habilitar e desabilitar edição
  const [editar, setEditar] = useState(false);
  const Editar = () => setEditar(true)
  const cancelar = () => setEditar(false)

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

  return (
    <div>
      {dadosFormacao &&
        dadosFormacao.map((dado) => (
          <article className="Formacao" key={dado._id}>
            {editar ? (
              <>
                <FormacaoHabilitado
                  funcao = {cancelar}
                  situacao={dado.situacao}
                  nivel={dado.nivel}
                  instituicao={dado.instituicao}
                  curso={dado.curso}
                  inicio={dado.inicio}
                  conclusao={dado.conclusao}
                  tema={dado.tema}
                  temaUrl={dado.temaUrl}
                />
              </>
            ) : (
              <>
                <FormacaoDesabilitado
                  funcao={Editar}
                  situacao={dado.situacao}
                  nivel={dado.nivel}
                  instituicao={dado.instituicao}
                  curso={dado.curso}
                  inicio={dado.inicio}
                  conclusao={dado.conclusao}
                  tema={dado.tema}
                  temaUrl={dado.temaUrl}
                />
              </>
            )}
          </article>
        ))}
    </div>
  );
};

export default DadosNivelEscolar;
