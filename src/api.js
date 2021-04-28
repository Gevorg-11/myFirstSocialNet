import * as axios from "axios";
const instance=axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '3001e6aa-55af-4f97-b4e8-bed7c327d6ab'
    }

});
export const usersApi={
    requestUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followed(id){
        return instance.post(`follow/${id}`,{})
            .then(response=>response.data)
        },
    unfollowed(id){
        return instance.delete(`follow/${id}`)
            .then(response=>response.data)
    }
};
export const headerApi={
    getMe(){
        return instance.get(`auth/me`)
            .then(response=>response.data)
    },
    login(email,password,rememberMe=false){
        return instance.post('auth/login',{email,password,rememberMe})
            .then(response=>response.data)
    },
    logout(){
        return instance.delete('auth/login')
            .then(response=>response.data)
    }
};
export const profileApi={
    getProfile(id){
        return instance.get(`profile/${id}`)
            .then(response=>response.data)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`)
            .then(response=>response.data)
    },
    updateStatus(status){
        return instance.put('profile/status',{status})
            .then(response=>response.data)
    }
}