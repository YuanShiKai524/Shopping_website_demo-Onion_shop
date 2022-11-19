import { LOGIN_STATE, LOGGED_IN_USER } from '../../redux/constant'

const initState = {
  loginState: false,
  userInfo: {
    "id": "000",
    "name": "guest",
    "password": "",
    "email": "",
    "avatar": "",
    "cart": [],
    "notifications": []
  }
}

const accountReducer = (preState = initState, action) => {
  const { type, data } = action
  switch (type) {
    case LOGIN_STATE:
      return {...preState, loginState: data};

    case LOGGED_IN_USER:
      return {...preState, userInfo: data};

    default:
      return preState;
  }
}

export default accountReducer