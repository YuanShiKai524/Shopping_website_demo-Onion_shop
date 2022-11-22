import React from 'react';
import { Image } from 'antd';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import ImgPlaceHolder from '../../components/ImgPlaceHolder'
import {updateUserInfo} from '../../redux/actions/account'
import './index.css';

const List = (props) => {

  const {account: {userInfo}, updateUserInfo} = props
  const {cart: items} = userInfo

  // 增加商品數量的函數
  const increment = (id, quantity) => {
    const newItems = items.map((item, index) => {
      if (item.id === id) {
        return items[index] = { ...item, quantity: quantity + 1 };
      } else {
        return item;
      }
    })
    updateUserInfo({...userInfo, cart: newItems});
  }

  // 減少商品數量的函數
  const decrement = (id, quantity) => {
    if (quantity > 1) {
      const newItems = items.map((item, index) => {
        if (item.id === id) {
          return items[index] = { ...item, quantity: quantity - 1 };
        } else {
          return item;
        }
      })
      updateUserInfo({...userInfo, cart: newItems});
    } else {
      removeFromCart(id);
    }
  }

  // 移除商品的函數
  const removeFromCart = (id) => {
    let answer = window.confirm("您確定要移除商品?");
    if (answer === true) {
      const newItems = items.filter((item) => { return item.id !== id });
      updateUserInfo({...userInfo, cart: newItems});
    } else {
      return;
    }
  }

  // 更新勾選的函數
  const updateCheckbox = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    })
    updateUserInfo({...userInfo, cart: newItems});
  }

  return (
    <table className='cart-container'>
      <Title />
      <tbody>
        {
          items.map((item) => {
            const {id, name, price, imgUrl, quantity, isChecked} = item
            return (
              <tr key={id} style={{height: "112px"}}>
                <td>
                  <div className="item-checkbox-container">
                    <input className="cart-checkbox btn" type="checkbox" onChange={() => {updateCheckbox(id, isChecked)}} checked={isChecked} />
                    <div style={{width: "100px", height: "100px"}}>
                      <Image className="item-img" src={imgUrl} alt="shoes" preview={false} placeholder={<ImgPlaceHolder style={{width: "100px", height: "100px"}} />} />
                    </div>
                  </div>
                </td>
                <td>{name}</td>
                <td>${price.toLocaleString()}</td>
                <td>
                  <button onClick={() => { decrement(id, quantity) }}>-</button>
                  <span className="item-quantity">{quantity}</span>
                  <button onClick={() => { increment(id, quantity) }}>+</button>
                </td>
                <td>${(price * quantity).toLocaleString()}</td>
                <td>
                  <button onClick={() => { removeFromCart(id) }}>刪除</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default connect(
  state => ({account: state.account}),
  {updateUserInfo}
)(List)
