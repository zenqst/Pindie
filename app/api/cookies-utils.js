export function getJWT() {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; jwt=`);
	return parts.pop()?.split(';').shift();
}

export function setJWT(jwt) {
	document.cookie = `jwt=${jwt}; Max-Age=999999999; Secure; path=/; domain=pindie-js.vercel.app;`;
}

export function removeJWT() {
	document.cookie = 'jwt=; Max-Age=-1; Secure; path=/; domain=pindie-js.vercel.app;';
}