import { IS_HOME } from "../constant";

const initState = false;

const navbarReducer = (preState = initState, action) => {
  const {type, data} = action
  switch (type) {
    case IS_HOME:
      return data;
  
    default:
      return preState;
  }
}

export default navbarReducer