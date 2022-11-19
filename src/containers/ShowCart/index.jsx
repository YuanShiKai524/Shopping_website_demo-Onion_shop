import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Popover, Badge } from 'antd'

const ShowCart = (props) => {

  const { account: { loginState, userInfo } } = props

  // 通知總覽及購物車氣泡卡片初始狀態
  const initPopover = {
    cartTitle: '',
    cartContent: []
  }
  const [popover, setPopover] = useState(initPopover);

  useEffect(() => {
    checkIsUser();
  }, [loginState, userInfo])

  // 檢查是否是登入的用戶，若是，則用此函數處理數據
  const checkIsUser = () => {
    // 用戶登入後，展示用戶購物車數據
    if (userInfo.name !== 'guest' && userInfo.cart.length !== 0) {
      const cartTitle = <span style={{ color: "lightgrey", display: 'flex', justifyContent: 'center' }}>最近加入的商品</span>
      const cartContent = (
        <div style={{ minWidth: '250px' }}>
          {
            userInfo.cart.map((product) => {
              const { id, imgUrl, name, price } = product
              return (
                <div key={id} className='cart-content' style={{ listStyle: 'none', display: "flex", justifyContent: 'space-between', padding: "10px" }}>
                  <div>
                    <img src={imgUrl} alt="cart-product" style={{ width: "30px", paddingRight: '3px' }} />
                    <div style={{ display: 'inline-block', maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: "nowrap" }}>{name}</div>
                  </div>
                  <div style={{ color: "#bf0000" }}>{`$${price.toLocaleString()}`}</div>
                </div>
              )
            })
          }
          <div className='flex' style={{ padding: "8px 12px", justifyContent: "flex-end" }}>
            <Link to='/cart' className='go-cart-btn flex' style={{ backgroundColor: 'orangered', width: "100px", padding: "8px 12px", borderRadius: "2px", color: 'white' }}>查看我的購物車</Link>
          </div>
        </div>
      )
      setPopover({ cartTitle, cartContent });
    } else {
      // 用戶未登入時的內容
      const cartContent = (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: "200px", minWidth: '250px' }}>尚無商品</div>
      )
      setPopover({ ...initPopover, cartContent })
    }
  }

  return (
    <div className="cart-icon-wrapper flex">
      <Popover placement="bottomRight" title={popover.cartTitle} content={popover.cartContent} trigger="hover">
        <Link to={loginState ? '/cart' : `/login?next=${encodeURIComponent(window.location.origin + '/cart')}`}>
          <Badge size="small" offset={[-2, 5]} count={userInfo.cart.length}>
            <img className="cart-icon flex" src="/images/icons/cart.png" alt="Your shopping cart" style={{ width: "40px" }} />
          </Badge>
        </Link>
      </Popover>
    </div>
  )
}

export default connect(
  state => ({ account: state.account }),
  {}
)(ShowCart)
