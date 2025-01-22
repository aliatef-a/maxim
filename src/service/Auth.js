import apiClient from "../api/apiClient"

const login = (data) => {
    return apiClient.post("/login", data)
}

const register = (data) => {
    return apiClient.post("/register", data);
};

const AuthService = {
    register,
    login
};

export default AuthService