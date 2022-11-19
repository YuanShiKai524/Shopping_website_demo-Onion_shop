import React from 'react'
import { nanoid } from 'nanoid'

const Sidebar = (props) => {

  const { products: phones } = props

  // 計算一共有多少個品牌
  const brandCount = () => {
    const myArr = [];
    for (let phone of phones) {
      if (myArr.includes(phone.brand) === false) {
        myArr.push(phone.brand)
      }
    }
    return myArr.length;
  }

  // 計算每個品牌的商品數量
  const brandNumber = (brand) => {
    const brandArr = phones.filter((phone) => {
      return phone.brand === brand
    })
    return brandArr.length
  }

  return (
    <div className="side-section flex">
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-handbag"
          viewBox="0 0 16 16">
          <path
            d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
        </svg>
        品牌分類
      </h3>
      <hr />
      <ul className="brand-list">
        <li className="all-brand"><a href="/">所有品牌(<span id="allNum">{brandCount()}</span>)</a></li>
        {
          phones.map((phone) => {
            return (
              <li key={nanoid()}><a href="/">{phone.brand}(<span>{brandNumber(phone.brand)}</span>)</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar
