'use client'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import { checkIfUserVoted, isResponseOk, requestUser, vote } from '@api/api-utils'
import { endpoints } from '@api/config'
import { getJWT, removeJWT } from '@api/cookies-utils'

import Styles from './VoteButton.module.css'

export const VoteButton = ({ game, setGame }) => {
	const [isAuthorized, setIsAuthorized] = useState(false)
	const [currentUser, setCurrentUser] = useState(null)
	const [isVoted, setIsVoted] = useState(false);
	
	const router = useRouter()
	const jwt = getJWT()
	
	const handleClick = async () => {
		let usersIdArray = game.users.length ? game.users.map((user) => user.id) : [];
		console.log(usersIdArray)
		
		usersIdArray.push(currentUser.id);
		
		const response = await vote(`${endpoints.games}/${game.id}`, jwt, usersIdArray);
		console.log(response)
		
		if (isResponseOk(response)) {
			setIsVoted(true);
			setGame(() => {
				return {
					...game,
					users: [...game.users, currentUser],
				};
			});
		}
	};
	
	useEffect( () => {
		if (jwt) {
			requestUser(endpoints.me, jwt).then((userData) => {
				if (isResponseOk(userData)){
					setIsAuthorized(true)
					setCurrentUser(userData)
				} else {
					setIsAuthorized(false)
					removeJWT()
				}
			})
		}
	}, [])
	
	useEffect(() => {
		if (currentUser && game) {
			setIsVoted(checkIfUserVoted(game, currentUser.id));
		} else {
			setIsVoted(false);
		}
	}, [currentUser, game]);
	
	return (
		<button onClick={handleClick} disabled={!isAuthorized || isVoted} className={`button ${Styles.aboutVoteButton}`}>
			{isVoted ? "Ваш голос учтён" : "Голосовать"}
		</button>
	)
}