import { data } from './data';

export const getGamesByCategory = (filterBy) => {
	const filteredData = data.filter(({ category }) => category.find(({ name }) => name === filterBy));
	return filteredData.length ? filteredData : null;
};
