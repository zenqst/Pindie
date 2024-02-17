import Styles from "./Overlay.module.css";

export const Overlay = ({ isOpened }) => {
  return (
    <div
      className={`${Styles["overlay"]} ${isOpened && Styles["overlay_is-opened"]}`}
    ></div>
  );
};
