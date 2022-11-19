import React from 'react';
import {connect} from 'react-redux'
import {updateUserInfo} from '../../redux/actions/account'
import './index.css'

const Counter = (props) => {

  const {userInfo, updateUserInfo} = props

  const {cart: items} = userInfo

  // 計算已勾選之商品的數量
  const checkedCount = items.reduce((preVal, item) => {
    return preVal + (item.isChecked ? 1 : 0);
  }, 0)

  // 計算總金額
  const totalPrice = items.reduce((preVal, item) => {
    const { price, quantity } = item;
    if(item.isChecked === true) {
      return preVal + (price * quantity);
    } else {
      return preVal;
    }
  }, 0).toLocaleString();

  // 處理全選的函數
  const handleCheckAll = (isAllChecked) => {
    const newItems = items.map((item) => {
      return { ...item, isChecked: isAllChecked };
    })
    updateUserInfo({...userInfo, cart: newItems});
  }

  return (
    <div className="counter-bar">
      <div className="all-select-container">
        <div className="counter-checkbox-container">
          <input className="cart-checkbox counter-checkbox btn" type="checkbox" onChange={(event) => { handleCheckAll(event.target.checked) }} checked={checkedCount === items.length && checkedCount !== 0 ? true : false} />
        </div>
        <div className="allSelect-word-container">
          <div>全選({items.length})</div>
        </div>
      </div>
      <div className="go-buy-container">
        <div className="total-price-container">
          <span>總金額({checkedCount} 個商品):</span>
          <span className="total-price">${totalPrice}</span>
        </div>
        <div className="btn go-buy-btn-container">
          <div>去買單</div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  state => ({userInfo: state.account.userInfo}),
  {updateUserInfo}
)(Counter);
