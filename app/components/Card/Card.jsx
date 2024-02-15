import Styles from './Card.module.css';

export const Card = ({ title, description, link, image, developer, users }) => {
	return (
		<li className={Styles['cards-list__item']}>
			<a href={link} target='_blank' className={Styles['card-list__link']}>
				<article className={Styles['card']}>
					<img src={image} alt={`Кадр из игры ${title}`} className={Styles['card__image']} />
					<div className={Styles['card__content-block']}>
						<h3 className={Styles['card__title']}>{title}</h3>
						<p className={Styles['card__description']}>{description}</p>
						<div className={Styles['card__info-container']}>
							<p className={Styles['card__author']}>
								Автор: <span className={Styles['card__accent']}>{developer}</span>
							</p>
							<p className={Styles['card__votes']}>
								Голосов на сайте: <span className={Styles['card__accent']}>{users.length}</span>
							</p>
						</div>
					</div>
				</article>
			</a>
		</li>
	);
};