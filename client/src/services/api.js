export async function postLogin(loginData) {
	console.trace("API : Trying to log in...");

	const loginResponse = await fetch("http://localhost:3001/api/v1/user/login", {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(loginData)
	});

	console.log(loginResponse);
    return loginResponse;
}