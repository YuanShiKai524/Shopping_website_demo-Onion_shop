import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <footer>
      {/* <!-- 頁尾 容器 (內容分上下兩個區塊)--> */}
      <div className="footer-container flex max-width">
        {/* <!-- (上半) 關於我們、客服中心、帳戶中心 區塊 --> */}
        <div className="footer-upside flex">
          {/* <!-- 關於我們 --> */}
          <div className="flex">
            關於我們
            <ul>
              <li>
                <a>關於我們</a>
              </li>
              <li>
                <a>運費&配送資訊</a>
              </li>
              <li>
                <a>隱私權政策</a>
              </li>
              <li>
                <a>服務條款</a>
              </li>
            </ul>
          </div>
          {/* <!-- 客服中心 --> */}
          <div className="flex">
            客服中心
            <ul>
              <li>
                <a>聯絡我們</a>
              </li>
              <li>
                <a>幫助中心</a>
              </li>
              <li>
                <a>退貨退款</a>
              </li>
            </ul>
          </div>
          {/* <!-- 帳戶中心 --> */}
          <div className="flex">
            帳戶中心
            <ul>
              <li>
                <a>我的帳戶</a>
              </li>
              <li>
                <a>訂單查詢</a>
              </li>
              <li>
                <a>願望清單</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-downside">
          {/* <!-- 分隔線 --> */}
          <div className="separator-in-footer"></div>
          {/* <!-- (下半) copyright區 --> */}
          <div className="copyright">
            Powered By OnionShop Inc.<br />
            Onion Shop &copy; 2022{new Date().getFullYear() - 2022 !== 0 ? "-" + new Date().getFullYear() : ""}
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer
