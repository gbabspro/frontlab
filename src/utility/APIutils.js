import { API_BASE_URL, POLL_LIST_SIZE, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function resetPassword(passwordRequest) {
    return request({
        url: API_BASE_URL + "/auth/resetPassword",
        method: 'POST',
        body: JSON.stringify(passwordRequest)
    });
}

export function changerPassword(changerPasswordRequest) {
    return request({
        url: API_BASE_URL + "/auth/changePassword",
        method: 'POST',
        body: JSON.stringify(changerPasswordRequest)
    });
}

export function register(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}


export function updateProfile(profileRequest) {
    return request({
        url: API_BASE_URL + "/user/updateProfil",
        method: 'POST',
        body: JSON.stringify(profileRequest)
    });
}

export function updatePersonnelProfile(profileRequest) {
    return request({
        url: API_BASE_URL + "/personnel/updateProfil/"+profileRequest.id,
        method: 'POST',
        body: JSON.stringify(profileRequest)
    });
}

export function lockPersonnel(id) {
    return request({
        url: API_BASE_URL + "/personnel/lock/"+id,
        method: 'PUT'
    });
}

export function unlockPersonnel(id) {
    return request({
        url: API_BASE_URL + "/personnel/unlock/"+id,
        method: 'PUT'
    });
}

export function deletePersonnel(id) {
    return request({
        url: API_BASE_URL + "/personnel/delete/"+id,
        method: 'DELETE'
    });
}

export function updatePassword(passwordRequest) {
    return request({
        url: API_BASE_URL + "/user/updatePassword",
        method: 'POST',
        body: JSON.stringify(passwordRequest)
    });
}

export function updateEmail(emailRequest) {
    return request({
        url: API_BASE_URL + "/user/updateEmail",
        method: 'POST',
        body: JSON.stringify(emailRequest)
    });
}

export function newCommande(commandeRequest) {
    return request({
        url: API_BASE_URL + "/commande/new/service",
        method: 'POST',
        body: JSON.stringify(commandeRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function serviceGetListAgent(idService) {
    return request({
        url: API_BASE_URL + "/service/list/agent/" + idService,
        method: 'GET'
    });
}

export function newPersonnel(idService, personnelRequest) {
    return request({
        url: API_BASE_URL + "/agent/" + idService+"/new",
        method: 'POST',
        body: JSON.stringify(personnelRequest)
    });
}

export function getService(idService) {
    return request({
        url: API_BASE_URL + "/service/" + idService,
        method: 'GET'
    });
}

export function updateService(idService, updateServiceRequest) {
    return request({
        url: API_BASE_URL + "/service/" + idService,
        method: 'PUT',
        body: JSON.stringify(updateServiceRequest)
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}


export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}


export function getServices() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/service/list",
        method: 'GET'
    });
}

export function getUserProfile(username) {
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    });
}