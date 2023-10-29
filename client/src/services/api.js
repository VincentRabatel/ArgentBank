import { Login } from "../data/login";
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
    
    const token = loginData.status === 200 ? loginData.body.token : ""

    const loginInfo = new Login(
        loginData.status,
        token
    )

    return loginInfo;
}

export async function getUserProfile(token){
	console.trace("API : Getting user profile...");
     
    const userProfileResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + token
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