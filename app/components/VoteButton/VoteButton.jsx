'use client'
import { useEffect, useState } from 'react';
import { useStore } from "@store/app-store";

import { checkIfUserVoted, isResponseOk, vote } from '@api/api-utils';
import { endpoints } from '@api/config';

import Styles from './VoteButton.module.css';

export const VoteButton = ({ game, setGame }) => {
    const [isVoted, setIsVoted] = useState(false);
    const { token, user, isAuth } = useStore();

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
        user && game ? setIsVoted(checkIfUserVoted(game, user.id)) : setIsVoted(false);
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
