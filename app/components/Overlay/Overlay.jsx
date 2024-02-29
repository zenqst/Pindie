'use client';
import Styles from './Overlay.module.css';

export const Overlay = ({ isOpened, closePopup }) => {
	return <div className={`${Styles['overlay']} ${isOpened && Styles['overlay_is-opened']}`} onClick={closePopup}/>;
};
