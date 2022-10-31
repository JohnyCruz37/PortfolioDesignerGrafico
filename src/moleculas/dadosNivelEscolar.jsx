// HOOKS
import { useState } from "react";
import { useEffect } from "react";

//COMPONENTES
import FormacaoDesabilitado from "./formacaoDesabilitado";
import FormacaoHabilitado from "./formacaoHabilitado";

//CONSUMINDO API
import Api from "../servidor/api";

//CSS
import "./dadosNivelEscolar.css";

const DadosNivelEscolar = () => {
  //Habilitar e desabilitar edição
  const [editar, setEditar] = useState(false);

  const Editar = () => setEditar(true);
  const cancelar = () => setEditar(false);


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
      {dadosFormacao.map((dado, id) => (
          <article className="Formacao" key={id._id}>
            {editar ? (
              <>
                <FormacaoHabilitado
                  key={dado._id}
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
                  key={id._id}
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
