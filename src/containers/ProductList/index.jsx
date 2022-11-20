import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd'
import { updateUserInfo } from '../../redux/actions/account'

const ProductList = (props) => {

  const { products, isGrid, loginState, userInfo, updateUserInfo } = props
  const { cart } = userInfo

  const navigate = useNavigate()

  const addToCart = (product) => {
    if (!loginState) {
      navigate(`/login?next=${encodeURIComponent(window.location.href)}`)
    } else {
      const id = product.id
      const result = cart.find((product) => {
        return product.id === id
      })
      // 如果找不到會是undefined，表示是新的新增品項，則直接加入變新的數組
      if (result === undefined) {
        const newCart = [...cart, product]
        updateUserInfo({ ...userInfo, cart: newCart })
        Modal.success({
          content: '商品已加入購物車！',
        });
      } else {
        // 若有找到一樣的，則數量加一
        const newCart = cart.map((product) => {
          if (product.id === id) {
            const newProduct = { ...product, quantity: product.quantity + 1 }
            return newProduct
          } else {
            return product
          }
        })
        updateUserInfo({ ...userInfo, cart: newCart })
        Modal.success({
          content: '商品已加入購物車！',
        });
      }
    }
  }

  return (
    <div className="phones-container flex" style={isGrid ? { flexDirection: 'row' } : { flexDirection: 'column' }}>
      {/* 商品 區塊 */}
      {
        products.map((product) => {
          return (
            <div key={product.id} className="phone-container" style={isGrid ? { flexDirection: 'column', margin: "0 5px" } : { flexDirection: 'row', margin: "6.5px 30px" }}>
              {/* 圖片  */}
              <div className="phone-img">
                <img alt="洋蔥購物網" src={product.imgUrl} />
              </div>
              {/* 名稱、價格、加入購物車,願望清單 區塊  */}
              <div className="name-price-cartSection-container" style={isGrid ? { display: "", flexDirection: "", flex: "", marginLeft: "" } : { display: "flex", flexDirection: "column", flex: "1", marginLeft: "10px" }}>
                {/* 名稱  */}
                <div className="phone-name google-phone" style={isGrid ? { flex: "" } : { flex: "1" }}>
                  <a href="/"><span style={isGrid ? { fontSize: "14px" } : { fontSize: '16px' }}>{product.name}</span></a>
                </div>
                {/* 價格  */}
                <div className="phone-price" style={isGrid ? { flex: "" } : { flex: "1" }}>
                  <span>$</span>
                  {(product.price).toLocaleString()}
                </div>
                {/* 加入購物車、加入願望清單(我的最愛) 區塊  */}
                <div className="add-to-cart-wish-list-container" style={isGrid ? { flex: "" } : { flex: "1" }}>
                  {/* 加入購物車 按鈕  */}
                  <button className="add-cart" style={isGrid ? { flex: "" } : { flex: "5" }} onClick={() => { addToCart(product) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-cart4" viewBox="0 0 16 16">
                      <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                    <span>加入購物車</span>
                  </button>
                  {/* 加入願望清單 按鈕  */}
                  <button className="add-wish-list" style={isGrid ? { flex: "" } : { flex: "2" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      className="bi bi-heart" viewBox="0 0 16 16">
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default connect(
  state => ({ products: state.sort.products, isGrid: state.sort.sorts.isGrid, userInfo: state.account.userInfo, loginState: state.account.loginState }),
  { updateUserInfo }
)(ProductList)