let user_id = localStorage.getItem("user_id")
let token = localStorage.getItem("token")

export const isTokenAlive = () => {
    if(token == null || token == undefined || token == ""){
        return false;
    }
    return true;
}

export const postRequestWithHeader = (url) => {
    return fetch("http://localhost:8080/" + url + user_id,
        {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'user_id': user_id,
                'token': token
            },
        })
}

export const postRequestWithoutHeader = (url, anObj) => {
    return fetch("http://localhost:8080/" + url,
    {
        method:"POST",
        body:JSON.stringify(anObj),
        headers:{
            'Content-Type': 'application/json'
        },
    })
}