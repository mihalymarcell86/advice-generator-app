import scss from "../styles/Advice.module.scss";

function Advice() {
  return (
    <>
      <p className={scss.advice_id}>Advice # 117</p>
      <p className={scss.advice_text}>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </p>
    </>
  );
}

export default Advice;
