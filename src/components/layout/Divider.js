import scss from "../../styles/Divider.module.scss";

import dividerMobile from "../../images/pattern-divider-mobile.svg";
import dividerDesktop from "../../images/pattern-divider-desktop.svg";

function Divider() {
  return (
    <div className={scss.divider_wrapper}>
      <picture>
        <source media="(min-width: 376px)" srcSet={dividerDesktop} />
        <img src={dividerMobile} alt="" />
      </picture>
    </div>
  );
}

export default Divider;
