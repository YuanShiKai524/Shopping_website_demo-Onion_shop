import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import titles from '../../data/titles.json'
import AccountHeader from '../../components/AccountHeader'
import Account from '../../containers/Account'
import './index.css'

const Login = () => {

  // 這邊獲取search參數，包含的是前一個頁面的路徑(透過search參數傳過來的)
  const [search] = useSearchParams()
  const nextUrl = search.get('next') // 獲取到的是已經經過decode的值

  useEffect(() => {
    document.title = titles.login;
  })

  return (
    <div>
      {/* 頂端header部分：Logo圖、登入字樣、需要幫助 */}
      < AccountHeader />
      {/* 登入 */}
      < div className="login-wrapper flex" >
        {/* 登入 容器  */}
        < div className="login-container" >
          {/* 登入文字  */}
          <div className="info-login-word flex">登入</div >
          {/* 資料填寫區塊(Email、密碼輸入欄、送出等按鈕) 容器  */}
          <Account nextUrl={nextUrl === null ? window.location.origin : nextUrl} />
          <div className="go-to-login flex">
            <p>還沒有註冊嗎？
              <Link to={nextUrl === null ? `/signup?next=${encodeURIComponent(window.location.origin)}` : `/signup?next=${encodeURIComponent(nextUrl)}`}>註冊</Link>
            </p>
          </div>
        </div >
      </div >
    </div >
  )
}

export default Login
