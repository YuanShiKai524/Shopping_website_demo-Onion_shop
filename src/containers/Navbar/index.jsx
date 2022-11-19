import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { nanoid } from 'nanoid';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Popover } from 'antd';
import MyATag from '../../components/MyATag'
import { updateLoginState, updateUserInfo } from '../../redux/actions/account';
import {updateIsHome} from '../../redux/actions/navbar'

const Navbar = (props) => {

  const { account: { loginState, userInfo }, isHome, updateLoginState, updateUserInfo, updateIsHome } = props

  const location = useLocation();

  const nextSearchParams = encodeURIComponent(window.location.href);
  
  // 通知總覽及購物車氣泡卡片初始狀態
  const initPopover = {
    notifTitle: '',
    notifContent: ''
  }
  const [popover, setPopover] = useState(initPopover);

  useEffect(() => {
    // 檢查是否是首頁
    checkIsHomepage();
    checkIsUser();
  }, [loginState, userInfo]);

  // 檢查是否是首頁的函數
  const checkIsHomepage = () => {
    if (location.pathname === '/') {
      updateIsHome(true);
    } else {
      updateIsHome(false);
    }
  }

  // 用來展示右上角用戶登入後hover顯示的區塊內容
  const accountContents = (
    <div style={{ width: "130px" }}>
      <div className='navbar-account-content' style={{ padding: "10px 15px", cursor: "pointer" }}>我的帳戶</div>
      <div className='navbar-account-content' style={{ padding: "10px 15px", cursor: "pointer" }}>購買清單</div>
      <div className='navbar-account-content' style={{ padding: "10px 15px", cursor: "pointer" }} onClick={() => { logout() }}>登出</div>
    </div>
  )

  // 檢查是否是登入的用戶，若是，則用此函數處理數據
  const checkIsUser = () => {
    // 用戶登入後，展示用戶通知數據
    if (userInfo.name !== 'guest') {
      const notifTitle = <span style={{ color: "lightgrey" }}>最近收到的通知</span>
      const notifContent = (
        <div style={{ minHeight: "200px", minWidth: '250px' }}>
          {
            userInfo.notifications.map((notif) => {
              const { id, imgUrl, title, content } = notif
              return (
                <div key={id} className='flex cart-content' style={{ flexDirection: 'row', padding: "10px", cursor: "pointer" }}>
                  <div>
                    <img src={imgUrl} alt="notification icon" style={{ width: "30px", paddingRight: '5px', paddingTop: '3px' }} />
                  </div>
                  <div style={{ maxWidth: "500px", fontSize: '12px' }}>
                    <b>{title}</b>
                    <div style={{ fontSize: '8px' }}>{content}</div>
                  </div>
                </div>
              )
            })
          }
          <Link to='/' className='flex cart-content' style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(249, 249, 249)', padding: "10px 0px", cursor: "pointer", color: "black" }}>查看全部</Link>
        </div>
      )
      setPopover({ notifTitle, notifContent });
    } else {
      // 用戶未登入時的內容
      const notifContent = (
        <div className='flex' style={{ flexDirection: 'column', minHeight: "200px", minWidth: '250px' }}>
          <div className='flex' style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>若要查看通知訊息，請先登入</div>
          <div className='flex' style={{ justifyContent: "space-between" }}>
            <Link className='notifi' to={`/signup?next=${nextSearchParams}`} style={{ backgroundColor: 'rgb(240, 237, 237)', width: "100%", textAlign: 'center', padding: "5px 0px", color: "#222", fontSize: "14px", fontWeight: "bold" }}>註冊</Link>
            <Link className='notifi' to={`/login?next=${nextSearchParams}`} style={{ backgroundColor: 'rgb(240, 237, 237)', width: "100%", textAlign: 'center', padding: "5px 0px", color: "#222", fontSize: "14px", fontWeight: "bold" }}>登入</Link>
          </div>
        </div>
      )
      setPopover({ ...initPopover, notifContent })
    }
  }

  // 登出函數
  const logout = () => {
    updateLoginState(false);
    updateUserInfo({ id: nanoid(), name: 'guest', cart: [] })
  }

  return (
    <div className={isHome ? "navbar-section-container flex navbar fixed" : "navbar-section-container flex navbar"} style={{minWidth: '952px'}}>
      {/* <!-- 導覽區塊(左側部分:賣家中心、下載(QRcode &下載頁面)、追蹤我們) --> */}
      <div className="flex">
        {/* <!-- 賣家中心連結 --> */}
        <MyATag className="seller-center-link navbar-section-decoration navbar-hover-decoration" href="https://seller.shopee.tw/account/signin?next=%2F">賣家中心</MyATag>
        {/* <!-- 下載 --> */}
        <div className="flex">
          <MyATag className="download-link navbar-section-decoration" href="https://shopee.tw/web">
            <div className="navbar-hover-decoration">下載</div>
          </MyATag>
        </div>
        {/* <!-- 追蹤我們 --> */}
        <div className="flex follow-us-container">
          <div className="flex navbar-section-decoration" style={{ marginRight: "4px" }}>追蹤我們</div>
          {/* <!-- Facebook --> */}
          <MyATag className="fb-link" href="https://facebook.com">
            <div className="flex">
              <img src="/images/icons/fb.png" style={{ width: "16px" }} alt="header_icon" />
            </div>
          </MyATag>
          {/* <!-- Instagram --> */}
          <MyATag className="ig-link" href="https://instagram.com">
            <div className="flex">
              <img src="/images/icons/instagram.png" style={{ width: "16px" }} alt="header_icon" />
            </div>
          </MyATag>
          {/* <!-- Line 官方帳號 --> */}
          <MyATag className="line-link" href="https://page.line.me/shopee?openQrModal=true">
            <div className="flex">
              <img src="/images/icons/line.png" style={{ width: "16px" }} alt="header_icon" />
            </div>
          </MyATag>
        </div>
      </div>
      {/* <!-- 導覽區塊(右側部分:通知總覽、幫助中心、註冊|登入) --> */}
      <div className="flex">
        {/* <!-- 通知總覽區塊（通知總覽文字和圖標、hover後產生的登入提醒與註冊/登入的連結） --> */}
        <Popover placement="bottomRight" title={popover.notifTitle} content={popover.notifContent} trigger="hover">
          <div className="notification-section-container">
            {/* <!-- 通知總覽文字和圖標（上半塊） --> */}
            <div className="flex">
              {/* <!-- 通知總覽圖標 --> */}
              <div className="flex">
                <img className="notification-icon" src="/images/icons/notification.png" style={{ width: "16px" }} alt="header_icon" />
              </div>
              {/* <!-- 通知總覽文字部分 --> */}
              <span className="notification-word navbar-section-decoration navbar-hover-decoration">通知總覽</span>
            </div>
          </div>
        </Popover>
        {/* <!-- 幫助中心 --> */}
        <div className="help-center-container flex">
          <img className="help-center-icon" src="/images/icons/help_icon.png" style={{ width: "16px" }} alt="header_icon" />
          <MyATag className="help-center-link navbar-section-decoration navbar-hover-decoration" href="https://help.shopee.tw/portal">幫助中心</MyATag>
        </div>
        {/* <!-- 註冊/登入區塊 --> */}
        {/* <!-- 註冊連結 --> */}
        {
          userInfo.name === "guest" ?
            <><Link className="signup-link navbar-section-decoration navbar-hover-decoration" to={`/signup?next=${nextSearchParams}`}>註冊</Link>
              {/* 連結分開器：| */}
              <div className="link-separator"></div>
              {/* <!-- 登入連結 --> */}
              <Link className="login-link navbar-section-decoration navbar-hover-decoration" to={`/login?next=${nextSearchParams}`}>登入</Link></> :
            <div className='navbar-username-container'>
              <Popover placement="bottom" content={accountContents} arrowPointAtCenter>
                <Avatar size="small" icon={<UserOutlined />} src={userInfo.avatar} />
                <span className='navbar-username navbar-section-decoration'>{userInfo.name}</span>
              </Popover>
            </div>
        }
      </div>
    </div>
  )
}

export default connect(
  state => ({ account: state.account, isHome: state.isHome }),
  { updateLoginState, updateUserInfo, updateIsHome }
)(Navbar)
