import React from 'react'
import Header from '../../containers/Header'
import Slider from '../../components/Main/Slider'
import Sidebar from '../../containers/Sidebar'
import Sort from '../../containers/Sort'
import ProductList from '../../containers/ProductList'

const Phone = () => {
  return (
    <>
      <Header />
      <Slider />
      {/* 商品展示、排序法選擇區塊 & 側邊分類欄 區塊 */}
      <div className="goods-side-section-container flex max-width">
        {/* 側邊分類欄  */}
        <Sidebar />
        {/* 商品展示、上方排序法選擇 區塊  */}
        <div className="goods-sort-wrapper flex">
          <div className="goods-sort-container">
            {/* 排序法選擇 橫列  */}
            <Sort />
            {/* 商品顯示 區塊  */}
            <ProductList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Phone
