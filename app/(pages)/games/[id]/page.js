'use client'
import { useRouter } from 'next/navigation'

import { NotFound } from '@components/NotFound/NotFound'
import { getGameById } from '@data/data-utils'

import Styles from "./Game.module.css";

export default function GamePage({ params }) {
	if (getGameById(params.id) === null){
		return <NotFound text={'Мы пытались, но не смогли найти такую игру :('}/>
	}
	
	const { link, title, description, developer, users } = getGameById(params.id)
	
	const router = useRouter()
	
	const handleClick = () => router.push('/login')
	
	return (
		<main className="main">
				<section className={Styles.game}>
					{/* Вынести в отдельный компонент */}
				<iframe
					className={Styles.gameIframe}
					src={link}
				></iframe>
			</section>
				<section className={Styles.about}>
				<h2 className={Styles.aboutTitle}>{title}</h2>
				<div className={Styles.aboutContent}>
					<p className={Styles.aboutDescription}>
						{description}
					</p>
					<div className={Styles.aboutAuthor}>
						<p>
							Автор:
							<span className={Styles.aboutAccent}>{developer}</span>
						</p>
					</div>
				</div>
				<div className={Styles.aboutVote}>
					<p className={Styles.aboutVoteAmount}>
						За игру уже проголосовали:
						<span className={Styles.aboutAccent}>{users.length}</span>
					</p>
					{/* Вынести в отдельный компонент */}
					<button onClick={handleClick} className={`button ${Styles.aboutVoteButton}`}>
						Голосовать
					</button>
				</div>
			</section>
		</main>
	);
}
