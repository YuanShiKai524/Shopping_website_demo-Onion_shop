import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {updateLoginState, updateUserInfo} from '../../redux/actions/account'
import './index.css'

const Account = (props) => {

  const {account: {loginState}, updateLoginState, updateUserInfo, nextUrl} = props

  const [isLoginPage, setIsLoginPage] = useState(false)

  const location = useLocation();

  const emailRef = useRef()
  const pwdRef = useRef()

  const navigate = useNavigate();
  // 因為navigate只吃路徑值，所以這邊接收到的nextUrl還得經過處理才能變成路徑去使用
  const nextPath = decodeURIComponent(String(nextUrl).substring(window.location.origin.length))

  useEffect(() => {
    // 檢查路徑是否為登入畫面的，若否，則為註冊畫面用
    if (location.pathname === '/login') {
      setIsLoginPage(true);
    }
    // 如果用戶已登入又想進來登入頁面，就讓他回去原來的頁面
    if (loginState) {
      nextPath.length === 0 ? navigate('/') : navigate(nextPath)
    }
    // 卸載組件前將是否是登入頁面改成false
    return () => {
      setIsLoginPage(false);
    }
  })

  // 比對登入帳密是否正確
  const checkUser = () => {
    const email = emailRef.current.value
    const password = pwdRef.current.value
    // 發送請求users數據
    axios('/data/users.json')
    .then((response) => {
      const users = response.data
      const resultUserInfo = users.find((user) => {
        return user.email === email && user.password === password
      })
      if (resultUserInfo === undefined) {
        alert('帳號密碼有誤！')
        window.location.href = '/login';
      } else {
        // 更新登入狀態
        updateLoginState(true)
        // 更新登入用戶資訊
        updateUserInfo(resultUserInfo);
        // 讓用戶回到原來的瀏覽畫面
        nextPath.length === 0 ? navigate('/') : navigate(nextPath)
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  return (
    <div className="info-container flex">
      <input type={isLoginPage ? "email" : "text"} name={isLoginPage ? "email" : "name"} placeholder={isLoginPage ? "請輸入電子信箱" : "請輸入名字"} size="40" required autoFocus style={isLoginPage ? {} : { width: "293px", marginLeft: "65px", appearance: "auto" }} ref={emailRef} />
      <br />
      <input className="pwd" type="password" name="password" placeholder="請輸入密碼" size="40" required style={isLoginPage ? {} : { width: "293px", marginLeft: "65px", appearance: "auto" }} ref={pwdRef} />
      <br />
      <div className="submit-btn flex">
        {
          isLoginPage ? 
          <input type="submit" value="登入" style={{ cursor: "pointer" }} onClick={checkUser} /> :
          <input type="submit" value="註冊" style={{ cursor: "pointer" }} />
        }
      </div>
    </div>
  )
}

export default connect(
  state => ({account: state.account}),
  {updateLoginState, updateUserInfo}
)(Account)
