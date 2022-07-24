import diceIcon from "../../images/icon-dice.svg";
import scss from "../../styles/DieButton.module.scss";

function DieButton(props) {
  return (
    <button
      className={`${scss.die_button} ${props.error ? scss.error : ""}`}
      onClick={props.onClick}
    >
      <img src={diceIcon} alt="display new advice" />
    </button>
  );
}

export default DieButton;
