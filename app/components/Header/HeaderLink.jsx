import Styles from './Header.module.css';

export const HeaderLink = ({ title, category }) => {
	return (
		<li className={Styles['menu__item']}>
			<a href={`#${category}`} className={Styles['menu__link']}>
				{title}
			</a>
		</li>
	);
};
