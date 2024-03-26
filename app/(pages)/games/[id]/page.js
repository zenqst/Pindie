'use client'
import { VoteButton } from '@components/VoteButton/VoteButton'
import { useEffect, useState } from 'react'
import { endpoints } from '@api/config'

import { NotFound } from '@components/NotFound/NotFound'
import { Preloader } from '@components/Preloader/Preloader'

import { getGameByID } from '@api/api-utils'

import Styles from "./Game.module.css";

export default function GamePage({ params }) {
	const [gameData, setGameData] = useState(null)
	
	useEffect(() => {
		const req = async () =>  setGameData(await getGameByID(endpoints.games, params.id))
		req()
	}, [])
	
	if (gameData === null){
		return <Preloader/>
	} else if (gameData === undefined) {
		return  <NotFound text={'Страница не найдена...'}/>
	}
	
	return (
		<main className="main">
				<section className={Styles.game}>
					{/* Вынести в отдельный компонент */}
				<iframe
					className={Styles.gameIframe}
					src={gameData.link}
				></iframe>
			</section>
				<section className={Styles.about}>
				<h2 className={Styles.aboutTitle}>{gameData.title}</h2>
				<div className={Styles.aboutContent}>
					<p className={Styles.aboutDescription}>
						{gameData.description}
					</p>
					<div className={Styles.aboutAuthor}>
						<p>
							Автор: <span className={Styles.aboutAccent}>{gameData.developer}</span>
						</p>
					</div>
				</div>
				<div className={Styles.aboutVote}>
					<p className={Styles.aboutVoteAmount}>
						За игру уже проголосовали: <span className={Styles.aboutAccent}>{gameData.users.length}</span>
					</p>
					<VoteButton game={gameData} setGame={setGameData}/>
				</div>
			</section>
		</main>
	);
}
