import Cookies from 'js-cookie';

export const setJWT = (jwt) => {
	Cookies.set('jwt', jwt, { secure: true});
};

export const getJWT = () => {
	return Cookies.get('jwt');
};

export const removeJWT = () => {
	Cookies.remove('jwt');
};