import { data } from './data';

// export const getGamesByCategory = (filterBy) => {
// 	const filteredData = data.filter(({ category }) => category.find(({ name }) => name === filterBy));
// 	return filteredData.length ? filteredData : null;
// };

export const getGameById = (id) => {
	return data.find((game) => game.id === Number(id)) ?? null;
}
