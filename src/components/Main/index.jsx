import React from 'react'
import Slider from './Slider'
import Category from './Category'

const Main = () => {
  return (
    <div className="page-content-wrapper flex">
      <div className="page-content-container flex max-width">
        {/* <!-- 滑動式圖片 --> */}
        <Slider />
        {/* <!-- 商品分類項目 --> */}
        <Category />
      </div>
    </div>
  )
}

export default Main
