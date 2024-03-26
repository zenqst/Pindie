export function getJWT() {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; jwt=`);
	return parts.pop()?.split(';').shift();
}

export function setJWT(jwt) {
	document.cookie = `jwt=${jwt}; Secure`;
}

export function removeJWT() {
	document.cookie = 'jwt=; Max-Age=-0';
}