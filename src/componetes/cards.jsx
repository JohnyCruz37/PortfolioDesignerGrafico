

import "../componetes/card.css"

const Card = (props) => {
    return(
        <div className="col-sm-3">

        <div className="card bg-dark">
            <div className="card-img card-img-overlay">
                <img src={props.imagem} alt="imagem com vários animes famosos"/>
            </div>
            <div className="card-body">
                <h3> {props.titulo} </h3>
                <button className="btn btn-outline-dark">ver mais</button>
            </div>
        </div>
        </div>
    )
}

export default Card