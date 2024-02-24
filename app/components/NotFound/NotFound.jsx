import Styles from './NotFound.module.css';
import {NotFoundImage} from './not-found.jsx';

export const NotFound = ({ text }) => {
  return (
    <div className={Styles["not-found"]}>
      <NotFoundImage />
      <h2 className={Styles["not-found__text"]}>{text}</h2>
    </div>
  )
};