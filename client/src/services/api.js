import { Login } from "../data/login";
import { UserProfile } from "../data/userProfile";

// todo: add error managment
export async function postLogin(userInfos) {
    console.trace("DEPRECATED API CALL: Trying to log in...");
    
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
     
// todo: add error managment
export async function getUserProfile(token){
    console.trace("DEPRECATED API CALL: Trying to log in...");
     
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

// todo: add error managment
export async function setUserName(token, userName){
	console.trace("DEPRECATED API CALL: Setting username with " + userName + "...");
     
    const setUserNameResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
		method: 'PUT',
		headers: {
			'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
		},
		body: JSON.stringify({ userName: userName })
	});

    return setUserNameResponse;
}