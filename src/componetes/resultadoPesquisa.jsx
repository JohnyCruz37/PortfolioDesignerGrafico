import Titulo from "../atomo/titulo";

const ResultadoPesquisa = (props) => {
    return (
        <article>
            <h2> {props.titulo} </h2>
           <Titulo titulo={props.titulo} />
        </article>
    )
}

export default ResultadoPesquisa;