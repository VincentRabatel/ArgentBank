export async function postLogin() {
	console.trace("API : Trying to log in...");

    // TEST
    const loginData = {
        "email": "tony@stark.com",
        "password": "password123"
    }

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