import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Account from '../../containers/Account'
import AccountHeader from '../../components/AccountHeader'
import MyATag from '../../components/MyATag'
import './index.css'

const Signup = () => {

  // 這邊獲取search參數，包含的是前一個頁面的路徑(透過search參數傳過來的)
  const [search] = useSearchParams()
  const nextUrl = search.get('next') // 獲取到的是已經經過decode的值

  return (
    <div>
      {/* 頂端header部分：Logo圖、註冊字樣、需要幫助 */}
      < AccountHeader />
      {/* 註冊 */}
      < div className="login-wrapper flex" >
        {/* 註冊 容器  */}
        < div className="login-container" >
          {/* 註冊文字  */}
          <div className="info-login-word flex" style={{paddingLeft: "65px"}}>註冊</div >
          {/* 資料填寫區塊(Email、密碼輸入欄、送出等按鈕) 容器  */}
          <Account nextUrl={nextUrl === null ? window.location.origin : nextUrl} />
          {/* 服務條款及隱私權政策確認區塊 */}
          < div className="policy-container flex" >
            <p>點擊註冊，即表示您已閱讀並同意洋蔥購物網的</p>
            <MyATag>服務條款</MyATag>
            <p>與</p>
            <MyATag>隱私權政策</MyATag>
          </div >
          {/* 已有帳號 ? 連接登入 區塊 */}
          < div className="go-to-login flex" >
            <p>已經有帳號了嗎？
              <Link to={nextUrl === null ? `/login?next=${encodeURIComponent(window.location.origin)}` : `/login?next=${encodeURIComponent(nextUrl)}`}>登入</Link>
            </p>
          </div>
        </div >
      </div >
    </div >
  )
}

export default Signup
