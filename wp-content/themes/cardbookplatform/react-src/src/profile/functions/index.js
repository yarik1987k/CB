
export const getUserNameById = (id) =>{
    let name;
    return name;
}

export const getUserBySlug = () =>{
    let currentUrl = window.location.pathname.split('/').slice(1);
    let userId = currentUrl.includes('profile', 0) ?  currentUrl[1] : '';
    if(userId) return userId;
}