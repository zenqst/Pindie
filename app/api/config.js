export const BASE_URL = 'https://api-code-2.practicum-team.ru';

export const endpoints = {
	games: `${BASE_URL}/games`,
	category: `${BASE_URL}/games?categories.name`,
	auth: `${BASE_URL}/auth`,
	me: `${BASE_URL}/users/me`,
	// register: `${BASE_URL}/auth/local/register`
};