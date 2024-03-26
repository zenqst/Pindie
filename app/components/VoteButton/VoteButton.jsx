import { useContext, useEffect, useState } from 'react';
import { checkIfUserVoted, isResponseOk, vote } from '@api/api-utils';
import { endpoints } from '@api/config';
import { AuthContext } from '@context/app-context';
import Styles from './VoteButton.module.css';

export const VoteButton = ({ game, setGame, router }) => {
    const [isVoted, setIsVoted] = useState(false);
    const { token, user, isAuth } = useContext(AuthContext);

    const handleVote = async () => {
        const jwt = token;
        let usersIdArray = game.users.length ? game.users.map((user) => user.id) : [];
        usersIdArray.push(user.id);
        const response = await vote(`${endpoints.games}/${game.id}`, jwt, usersIdArray);
        if (isResponseOk(response)) {
            setGame((prevGame) => ({
                ...prevGame,
                users: [...prevGame.users, user],
            }));
            setIsVoted(true);
        }
    };

    useEffect(() => {
        if (user && user.id && game) {
            setIsVoted(checkIfUserVoted(game, user.id));
        }
    }, [game, user]);

    return (
        <button
            onClick={handleVote}
            disabled={!isAuth || isVoted}
            className={`button ${Styles.aboutVoteButton}`}>
            {isVoted ? 'Ваш голос учтён' : 'Голосовать'}
        </button>
    );
};
