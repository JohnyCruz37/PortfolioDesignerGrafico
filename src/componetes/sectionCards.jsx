import Titulo from "../atomo/titulo";
import "../componetes/sectionCards.css";
import Card from "./cards";

const SectionCards = (props) => {
  return (
    <section className="section">
      <Titulo texto={props.titulo} />
      <div className="section-cards">
        <Card imagem={props.img1} titulo={props.tema1} />
        <Card imagem={props.img2} titulo={props.tema2} />
        <Card imagem={props.img3} titulo={props.tema3} />
        <Card imagem={props.img4} titulo={props.tema4} />
      </div>
    </section>
  );
};

export default SectionCards;
