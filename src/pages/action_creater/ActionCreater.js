import { LOGIN, LOGOUT, REGISTER } from "../constant/constants"


export const LoginActionCreator = () => {
    return {
        type : LOGIN
    }
}

export const RegisterActionCreater = () => {
    return {
        type:REGISTER
    }
}

export const LogoutActionCreator = () => {
    return {
        type:LOGOUT
    }
}