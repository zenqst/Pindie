'use client'
import { NotFound } from '@components/NotFound/NotFound'
import { getGameById } from '@data/data-utils'
import Styles from "./Game.module.css";
import { useRouter } from 'next/navigation'

export default function GamePage({ params }) {
	const game = getGameById(params.id)
	const router = useRouter()
	
	return (
		<main className="main">
			{
				game ? (
			<>
				<section className={Styles["game"]}>
				<iframe
					className={Styles["game__iframe"]}
					src={game.link}
				></iframe>
			</section>
				<section className={Styles["about"]}>
				<h2 className={Styles["about__title"]}>{game.title}</h2>
				<div className={Styles["about__content"]}>
					<p className={Styles["about__description"]}>
						{game.description}
					</p>
					<div className={Styles["about__author"]}>
						<p>
							Автор:
							<span className={Styles["about__accent"]}>{game.developer}</span>
						</p>
					</div>
				</div>
				<div className={Styles["about__vote"]}>
					<p className={Styles["about__vote-amount"]}>
						За игру уже проголосовали:
						<span className={Styles["about__accent"]}>{game.users.length}</span>
					</p>
					<button onClick={() => router.push('/auth-form')} className={`button ${Styles["about__vote-button"]}`}>
						Голосовать
					</button>
				</div>
			</section>
			</>
				) : <NotFound text={'Мы пытались, но не смогли найти такую игру :('}/>}
		</main>
	);
}
