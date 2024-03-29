"use client"
import { useState } from 'react';
import { useStore } from "@store/app-store";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import Styles from './Header.module.css';
import { HeaderLink } from './HeaderLink';

import { categories } from '@data/data';

import { AuthForm } from '@components/AuthForm/AuthForm';
import { Overlay } from '@components/Overlay/Overlay';
import { Popup } from '@components/Popup/Popup';

export const Header = () => {
	const [authPopupIsOpened, setAuthPopupIsOpened] = useState(false);
	const { isAuth, logout } = useStore();
	const pathName = usePathname();
	const router = useRouter()

	const openAuthPopup = () => {
		setAuthPopupIsOpened(true);
	};

	const closeAuthPopup = () => {
		setAuthPopupIsOpened(false);
	};

	const handleLogout = () => {
		router.push('/')
		logout()
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
					{isAuth ? (
						<>
							<Link href={'/profile'} className={Styles.profileButton}>
								Профиль
							</Link>
							<button onClick={handleLogout} className={Styles['auth__button']}>
								Выйти
							</button>
						</>
					) : (
						<button onClick={openAuthPopup} className={Styles['auth__button']}>
							Войти
						</button>
					)}
				</div>
			</nav>
			<Overlay isOpened={authPopupIsOpened} closePopup={closeAuthPopup} />
			<Popup isOpened={authPopupIsOpened} closePopup={closeAuthPopup}>
				<AuthForm closePopup={closeAuthPopup}/>
			</Popup>
		</header>
	);
};
