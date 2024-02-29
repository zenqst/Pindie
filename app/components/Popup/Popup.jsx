import Styles from "./Popup.module.css";

export const Popup = ({ isOpened, closePopup, children }) => {
  return (
      <div className={`${Styles["popup"]} ${isOpened && Styles["popup_is-opened"]}`}>
        <button className={Styles["close"]} onClick={closePopup}>
          <img src='/images/close.svg' className={Styles["close-icon"]} alt='Закрыть окно' />
        </button>
        <div className={Styles.content}>{children}</div>
      </div>
  );
};
