'use client';
import { AuthForm } from '@components/AuthForm/AuthForm'
import { Overlay } from '@components/Overlay/Overlay'
import { Popup } from '@components/Popup/Popup'
import Styles from './Header.module.css';
import { HeaderLink } from './HeaderLink';
import { categories } from "@data/data";
import { useState } from 'react';

export const Header = () =>  {
	const [popupIsOpened, setPopupIsOpened] = useState(false)
	
	const openPopup = () => {
		setPopupIsOpened(true)
	}
	
	const closePopup = () => {
		setPopupIsOpened(false)
	}
	
	return (
		<header className={Styles['header']}>
			<a href='/' className={Styles['logo']}>
				<img className={Styles['logo__image']} src='./images/logo.svg' alt='Логотип Pindie' />
			</a>
			<nav className={Styles['menu']}>
				<ul className={Styles['menu__list']}>
					{categories.map((item, index) => (
						<HeaderLink {...item} key={index} />
					))}
				</ul>
				<div className={Styles['auth']}>
					<button onClick={openPopup} className={Styles['auth__button']}>Войти</button>
				</div>
			</nav>
			<Overlay isOpened={popupIsOpened}/>
			<Popup isOpened={popupIsOpened} closePopup={closePopup}>
				<AuthForm/>
			</Popup>
		</header>
	);
};
