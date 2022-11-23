import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import MyATag from '../MyATag'
import './index.css'

const AccountHeader = () => {

  const [isSignup, setIsSignup] = useState(false);

  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/signup') {
      setIsSignup(true);
    }
    return () => {
      setIsSignup(false);
    }
  })

  return (
    <div className="login-header-wrapper">
      <div className="login-header-container flex">
        {/* logo圖與登入 區塊  */}
        <div className="flex">
          {/* Logo圖  */}
          <Link className="login-header-logo" to="/">
            <img src="/images/logo.png" style={{width: "90px"}} alt="logo" />
          </Link>
          {/* 登入 字樣  */}
          <div className="login-word flex">{isSignup ? "註冊" : "登入"}</div>
        </div>
        {/* 需要幫助  */}
        <div className="login-help-container flex">
          <MyATag>需要幫助？</MyATag>
        </div>
      </div>
    </div>
  )
}

export default AccountHeader
