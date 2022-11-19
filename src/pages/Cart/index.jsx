import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../containers/Navbar'
import List from '../../containers/List';
import Counter from '../../containers/Counter';
import Footer from '../../components/Footer'
import './index.css'

const Cart = (props) => {

  const { account: { loginState, userInfo: { cart: items } } } = props

  const navigate = useNavigate()

  useEffect(() => {
    if (!loginState) {
      navigate('/', { replace: true })
    }
  })

  // 檢查購物車內是否有商品之函數
  const checkCart = () => {
    return (
      items.length === 0 ?
        <div style={{ width: "100%", display: "flex", justifyContent: "center", height: "250px", alignItems: "center" }}>
          <h2>您的購物車內沒有商品，快去購物吧！</h2>
        </div> :
        <>
          <List />
          <Counter />
        </>
    )
  }

  return (
    <div>
      <Navbar />
      {/* <!-- Logo圖 --> */}
      <div className="flex" style={{ backgroundColor: "#bb7944" }}>
        <div style={{margin: "0 30px 0 50px"}}>
          <Link to='/'>
            <img src="/images/logo.png" alt="Onion Shop LOGO" style={{ width: "90px" }} />
          </Link>
        </div>
        <div className='flex' style={{width: "100px", fontSize: '23px', alignItems: 'center', color: "#f2f2f2"}}>購物車</div>
      </div>
      {checkCart()}
      <Footer />
    </div >
  );
}

export default connect(
  state => ({ account: state.account }),
  {}
)(Cart);
