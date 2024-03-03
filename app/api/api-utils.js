const normalizeDataObject = (obj) => {
	return {
		...obj,
		category: obj.categories,
		users: obj.users_permissions_users,
	};
};

export const getGameByID = async (url, id) => {
	const response = await fetch(url)
		.then(response => response.json())
	
	const filteredResult = await response.find((game) => game.id === Number(id))
	if (filteredResult) {
		return normalizeDataObject(filteredResult)
	}
	return undefined
}

export const getGamesByCategory = async (url) => {
	const response = await fetch(url)
		.then(async response => await response.json())
	return await response
}

export const authorize = async (url, data) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		
		if (response.status !== 200) {
			throw new Error("Ошибка авторизации");
		}
		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
};

export const requestUser = async (url, jwt) => {
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: { Authorization: `Bearer ${jwt}` },
		});
		if (response.status !== 200) {
			throw new Error("Ошибка получения данных");
		}
		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
};

export const vote = async (url, jwt, usersArray) => {
	try {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
			body: JSON.stringify({ users_permissions_users: usersArray }),
		})
		if (response.status !== 200) {
			throw new Error('Ошибка голосования')
		}
		const result = await response.json()
		return result
	} catch (error) {
		return error
	}
}

export const setJWT = (jwt) => {
	localStorage.setItem("jwt", jwt);
};

export const getJWT = () => {
	return localStorage.getItem("jwt");
};

export const removeJWT = () => {
	localStorage.removeItem("jwt");
};

export const isResponseOk = (response) => {
	return response.user ?? response.username;
}

export const checkIfUserVoted = (game, userId) => {
	return game.users.find((user) => user.id === userId);
};