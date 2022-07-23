import scss from "../styles/Attribution.module.scss";

function Attribution() {
  return (
    <footer className={scss.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/mihalymarcell86">Marcell Mihály</a>
      .
    </footer>
  );
}

export default Attribution;
