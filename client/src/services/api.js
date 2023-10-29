import { UserProfile } from "../data/userProfile";

export async function postLogin(userInfos) {
	console.trace("API : Trying to log in...");

    const loginResponse = await fetch("http://localhost:3001/api/v1/user/login", {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(userInfos)
	});

    const loginData = await loginResponse.json();

    return loginData;
}

// todo: add token managment
export async function getUserProfile(){
	console.trace("API : Getting user profile...");
     
    const userProfileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2E4NDM4ZGQwYjBjYmI1NjAxMmIyZiIsImlhdCI6MTY5ODU4MzYxNywiZXhwIjoxNjk4NjcwMDE3fQ.IUlxrilGF_h9bqGL1UX-bSAFVNbpFw0jUhi5xhzq74Y"
		}
	});

    const userProfileData = await userProfileResponse.json();
    
    const userProfile = new UserProfile(
        userProfileData.body.createdAt,
        userProfileData.body.email,
        userProfileData.body.firstName,
        userProfileData.body.id,
        userProfileData.body.lastName,
        userProfileData.body.updatedAt,
        userProfileData.body.userName
    );
        
    return userProfile;
}