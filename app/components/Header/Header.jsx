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
	const [authPopupIsOpened, setAuthPopupIsOpened] = useState(false);
	const pathName = usePathname();

	const openAuthPopup = () => {
		setAuthPopupIsOpened(true);
	};

	const closeAuthPopup = () => {
		setAuthPopupIsOpened(false);
	};
	
	return (
		<header className={Styles['header']}>
			{pathName === "/" ? (
				<img className={`${Styles['logo__image']} ${Styles['logo']}`} src='/images/logo.svg' alt='Логотип Pindie' />
			) : (
				<Link href='/' className={Styles['logo']}>
					<img className={Styles['logo__image']} src='/images/logo.svg' alt='Логотип Pindie' />
				</Link>
			)}
					<nav className={Styles['menu']}>
						<ul className={Styles['menu__list']}>
							{categories.map((item, index) => (
						<HeaderLink {...item} key={index} />
					))}
				</ul>
				<div className={Styles['auth']}>
					<button onClick={openAuthPopup} className={Styles['auth__button']}>
						Войти
					</button>
				</div>
			</nav>
			<Overlay isOpened={authPopupIsOpened} closePopup={closeAuthPopup} />
			<Popup isOpened={authPopupIsOpened} closePopup={closeAuthPopup}>
				<AuthForm />
			</Popup>
		</header>
	);
};