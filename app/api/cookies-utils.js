export function getJWT() {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; jwt=`);
	return parts.pop()?.split(';').shift();
}

export function setJWT(jwt) {
	document.cookie = `jwt=${jwt}; Secure; path=/; domain=pindie-js.vercel.app;`;
}

export function removeJWT() {
	document.cookie = 'jwt=; Max-Age=0; Secure; path=/; domain=pindie-js.vercel.app;';
}