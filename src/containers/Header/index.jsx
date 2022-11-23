import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import Searchbar from '../../components/Searchbar'
import Navbar from '../Navbar'
import ShowCart from '../ShowCart'
import {updateIsHome} from '../../redux/actions/navbar'

const Header = (props) => {

  const { account: {loginState, userInfo}, isHome, updateIsHome } = props

  const location = useLocation();

  useEffect(() => {
    // 檢查是否是首頁
    checkIsHomepage();
  }, [location.pathname, loginState, userInfo]);

  // 檢查是否是首頁的函數
  const checkIsHomepage = () => {
    if (location.pathname === '/') {
      updateIsHome(true);
    } else {
      updateIsHome(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className={isHome ? "logo-search-cart-container fixed flex" : "logo-search-cart-container flex"} style={{minWidth: '952px'}}>
        {/* <!-- Logo圖 --> */}
        {
          isHome ?
          <a href="/">
            <div className="logo flex">
              <img src="/images/logo.png" alt="Onion Shop LOGO" style={{ width: "90px" }} />
            </div>
          </a> :
          <Link to="/">
            <div className="logo flex">
              <img src="/images/logo.png" alt="Onion Shop LOGO" style={{ width: "90px" }} />
            </div>
          </Link>
        }
        {/* <!-- 搜尋區塊：搜尋欄、搜尋鍵 --> */}
        <Searchbar />
        {/* <!-- 購物車 --> */}
        <ShowCart />
      </div>
    </>
  )
}

export default connect(
  state => ({ account: state.account, isHome: state.isHome }),
  {updateIsHome}
)(Header)
