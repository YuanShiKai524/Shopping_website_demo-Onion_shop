import { LOGIN_STATE, LOGGED_IN_USER } from '../../redux/constant'

export const updateLoginState = (data) => ({type: LOGIN_STATE, data})
export const updateUserInfo = (data) => ({type: LOGGED_IN_USER, data})
