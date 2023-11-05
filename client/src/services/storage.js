const ls = window.localStorage;

// Set and get connected status from the localStorage
// this item is a simple bool telling is a user is connected or not
const connectedStorageId = "connected";
export function setConnected(connected){
    console.trace("DEPRECATED STORAGE CALL: Setting connected...");

    ls.setItem(connectedStorageId, connected);
}

export function getConnected(){
    console.trace("DEPRECATED STORAGE CALL: Getting connected...");

	const connected = ls.getItem(connectedStorageId);

	return connected;
}

export function clearConnected(){
    console.trace("DEPRECATED STORAGE CALL: Clearing connected...");

	ls.removeItem(connectedStorageId);
}

// Set and get login token from the localStorage
// this item is set during the first connexion in the Sign In page
const loginTokenStorageId = "loginToken";
export function storeLoginToken(token){
    console.trace("DEPRECATED STORAGE CALL: Storing login token...");

    ls.setItem(loginTokenStorageId, JSON.stringify(token));
}

export function getLoginToken(){
    console.trace("DEPRECATED STORAGE CALL: Getting login token...");

	const loginToken = JSON.parse(ls.getItem(loginTokenStorageId));

	return loginToken;
}

export function clearLoginToken(){
    console.trace("DEPRECATED STORAGE CALL: Getting login token...");

	ls.removeItem(loginTokenStorageId);
}