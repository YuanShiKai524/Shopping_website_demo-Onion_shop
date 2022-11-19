import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import MyCarousel from './MyCarousel'

const Slider = () => {

  // 鼠標是否移入的狀態
  const [hasMouseEnter, setHasMouseEnter] = useState(false);

  const location = useLocation()

  // 讓箭頭出現的函數
  const showArrow = () => {
    setHasMouseEnter(true);
  }
  // 讓箭頭隱藏的函數
  const hideArrow = () => {
    setHasMouseEnter(false);
  }

  return (
    <div className={location.pathname === '/' ? "home-slide-img-container" : "slide-img-container max-width"} onMouseEnter={showArrow} onMouseLeave={hideArrow}>
      <MyCarousel hasMouseEnter={hasMouseEnter} />
    </div>
  )
}

export default Slider
