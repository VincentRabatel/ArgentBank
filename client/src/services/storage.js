const ls = window.localStorage;

// Set and get connected status from the localStorage
// this item is a simple bool telling is a user is connected or not
const connectedStorageId = "connected";
export function setConnected(connected){
    ls.setItem(connectedStorageId, connected);
}

export function getConnected(){
	const connected = ls.getItem(connectedStorageId);

	return connected;
}

export function clearConnected(){
	ls.removeItem(connectedStorageId);
}

// Set and get login token from the localStorage
// this item is set during the first connexion in the Sign In page
const loginTokenStorageId = "loginToken";
export function storeLoginToken(token){
    ls.setItem(loginTokenStorageId, JSON.stringify(token));
}

export function getLoginToken(){
	const loginToken = JSON.parse(ls.getItem(loginTokenStorageId));

	return loginToken;
}

export function clearLoginToken(){
	ls.removeItem(loginTokenStorageId);
}