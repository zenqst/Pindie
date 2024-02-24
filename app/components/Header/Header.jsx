'use client';
import { AuthForm } from '@components/AuthForm/AuthForm';
import { Overlay } from '@components/Overlay/Overlay';
import { Popup } from '@components/Popup/Popup';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Styles from './Header.module.css';
import { HeaderLink } from './HeaderLink';

import { categories } from '@data/data';

import { useState } from 'react';

export const Header = () => {
	const [popupIsOpened, setPopupIsOpened] = useState(false);
	const pathName = usePathname();

	const openPopup = () => {
		setPopupIsOpened(true);
	};

	const closePopup = () => {
		setPopupIsOpened(false);
	};
	
	return (
		<header className={Styles['header']}>
			{pathName === "/" ? (
				<img className={`${Styles['logo__image']} ${Styles['logo']}`} src='./images/logo.svg' alt='Логотип Pindie' />
			) : (
				<Link href='/' className={Styles['logo']}>
					<img className={Styles['logo__image']} src='./images/logo.svg' alt='Логотип Pindie' />
				</Link>
			)}
					<nav className={Styles['menu']}>
						<ul className={Styles['menu__list']}>
							{categories.map((item, index) => (
						<HeaderLink {...item} key={index} />
					))}
				</ul>
				<div className={Styles['auth']}>
					<button onClick={openPopup} className={Styles['auth__button']}>
						Войти
					</button>
				</div>
			</nav>
			<Overlay isOpened={popupIsOpened} closePopup={closePopup} />
			<Popup isOpened={popupIsOpened} closePopup={closePopup}>
				<AuthForm />
			</Popup>
		</header>
	);
};
