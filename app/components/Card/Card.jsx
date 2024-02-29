import Link from 'next/link'
import Styles from './Card.module.css';

export const Card = ({ id, title, description, image, developer, users }) => {
	return (
		<li className={Styles.cardsListItem}>
			<Link href={`games/${id}`} className={Styles.cardListLink}>
				<article className={Styles.card}>
					<img src={image} alt={`Кадр из игры ${title}`} className={Styles.cardImage} />
					<div className={Styles.cardContentBlock}>
						<h3 className={Styles.cardTitle}>{title}</h3>
						<p className={Styles.cardDescription}>{description}</p>
						<div className={Styles.cardInfoContainer}>
							<p className={Styles.cardAuthor}>
								Автор: <span className={Styles.cardAccent}>{developer}</span>
							</p>
							<p className={Styles.cardVotes}>
								Голосов на сайте: <span className={Styles.cardAccent}>{users.length}</span>
							</p>
						</div>
					</div>
				</article>
			</Link>
		</li>
	);
};