import scss from "../styles/Advice.module.scss";

function Advice(props) {
  if (!props.error) {
    return (
      <>
        <p className={scss.advice_id}>Advice #{props.advice.id}</p>
        <p className={scss.advice_text}>
          <q>{props.advice.advice}</q>
        </p>
      </>
    );
  } else
    return (
      <>
        <p className={`${scss.advice_id} ${scss.error}`}>An error occurred!</p>
        <p className={scss.advice_text}>Failed to get new advice.</p>
      </>
    );
}

export default Advice;
