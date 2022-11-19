import {combineReducers} from 'redux'
import account from './account'
import isHome from './navbar'
import sort from './sort'

export default combineReducers({account, isHome, sort});