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
	
	const handleClick = () => router.push('/auth-form')
	
	return (
		<main className="main">
				<section className={Styles["game"]}>
					{/* Вынести в отдельный компонент */}
				<iframe
					className={Styles["game__iframe"]}
					src={link}
				></iframe>
			</section>
				<section className={Styles["about"]}>
				<h2 className={Styles["about__title"]}>{title}</h2>
				<div className={Styles["about__content"]}>
					<p className={Styles["about__description"]}>
						{description}
					</p>
					<div className={Styles["about__author"]}>
						<p>
							Автор:
							<span className={Styles["about__accent"]}>{developer}</span>
						</p>
					</div>
				</div>
				<div className={Styles["about__vote"]}>
					<p className={Styles["about__vote-amount"]}>
						За игру уже проголосовали:
						<span className={Styles["about__accent"]}>{users.length}</span>
					</p>
					{/* Вынести в отдельный компонент */}
					<button onClick={handleClick} className={`button ${Styles["about__vote-button"]}`}>
						Голосовать
					</button>
				</div>
			</section>
		</main>
	);
}
