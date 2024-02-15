import Styles from './Header.module.css';
import { HeaderLink } from './HeaderLink';
import { categories } from "@data/data";

export const Header = () =>  {
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
					<button className={Styles['auth__button']}>Войти</button>
				</div>
			</nav>
		</header>
	);
};
