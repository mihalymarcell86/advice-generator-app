import diceIcon from "../images/icon-dice.svg";
import scss from "../styles/DieButton.module.scss";

function DieButton() {
  return (
    <button className={scss.die_button}>
      <img src={diceIcon} alt="display new advice" />
    </button>
  );
}

export default DieButton;
