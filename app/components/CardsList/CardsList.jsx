import Styles from './CardsList.module.css';
import { Card } from '@components/Card/Card';

import { getGamesByCategory } from '@data/data-utils';

export const CardsList = ({ category, title }) => {
	const categoryData = getGamesByCategory(category);

	return (
		<section className={Styles['list-section']}>
			<h2 className={Styles['list-section__title']} id={category}>
				{title}
			</h2>
			{categoryData ? (
				<ul className={Styles['cards-list']}>
					{categoryData.map((item, index) => (
						<Card {...item} key={index} />
					))}
				</ul>
			) : (
				<p className={Styles['errorText']}>Произошла какая-то ошибка! Мы уже пытаемся её исправить</p>
			)}
		</section>
	);
};
