import scss from "../../styles/Card.module.scss";

function Card(props) {
  return <main className={scss.card}>{props.children}</main>;
}

export default Card;
