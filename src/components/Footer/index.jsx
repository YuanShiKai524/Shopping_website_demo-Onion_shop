import React from 'react'
import MyATag from '../MyATag'
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
                <a href="/">關於我們</a>
              </li>
              <li>
                <a href="/">運費&配送資訊</a>
              </li>
              <li>
                <MyATag href="https://shopee.tw/legaldoc/privacy/?__classic__=1">隱私權政策</MyATag>
              </li>
              <li>
                <MyATag href="https://shopee.tw/legaldoc/termsOfService/?__classic__=1">服務條款</MyATag>
              </li>
            </ul>
          </div>
          {/* <!-- 客服中心 --> */}
          <div className="flex">
            客服中心
            <ul>
              <li>
                <a href="/">聯絡我們</a>
              </li>
              <li>
                <MyATag href="https://help.shopee.tw/portal">幫助中心</MyATag>
              </li>
              <li>
                <a href="/">退貨退款</a>
              </li>
            </ul>
          </div>
          {/* <!-- 帳戶中心 --> */}
          <div className="flex">
            帳戶中心
            <ul>
              <li>
                <a href="/">我的帳戶</a>
              </li>
              <li>
                <a href="/">訂單查詢</a>
              </li>
              <li>
                <a href="/">願望清單</a>
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
