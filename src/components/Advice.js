import scss from "../styles/Advice.module.scss";

function Advice(props) {
  if (!props.error) {
    return (
      <>
        <p className={scss.advice_id}>Advice #{props.advice.id}</p>
        <h1 className={scss.advice_text}>
          <q>{props.advice.advice}</q>
        </h1>
      </>
    );
  } else
    return (
      <>
        <p className={`${scss.advice_id} ${scss.error}`}>An error occurred!</p>
        <h1 className={scss.advice_text}>Failed to get new advice.</h1>
      </>
    );
}

export default Advice;
