import React, { useEffect, useRef, useState } from 'react';
import { Carousel, Button, Spin } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import axios from 'axios'


const MyCarousel = (props) => {

  const { hasMouseEnter } = props

  const carouselRef = useRef();

  const location = useLocation()

  const [allState, setAllState] = useState({
    allSlideImgs: {}, // 輪播圖片數據初始值
    isLoading: true, // 是否處於加載中
    err: '' // 存儲請求相關的錯誤訊息
  })
  

  useEffect(() => {
    // 發送請求獲取輪播圖片數據
    axios('/data/slideImages.json')
    .then((response) => {
      setAllState({...allState, isLoading: false, allSlideImgs: response.data})
    }).catch((err) => {
      setAllState({...allState, isLoading: false, err})
    });
  }, [])

  // 往後一張圖(antd所用的API自帶的方法)
  const next = () => {
    carouselRef.current.next()
  }
  // 往前一張圖(antd所用的API自帶的方法)
  const prev = () => {
    carouselRef.current.prev()
  }

  return (
    <>
      <Carousel autoplay pauseOnHover={false} autoplaySpeed={5000} ref={carouselRef}>
        {
          allState.isLoading ? <Spin /> :
          allState.err ? <h1>{allState.err}</h1> :
          allState.allSlideImgs[decodeURIComponent(location.pathname)].map((img) => {
            return (
              <div key={nanoid()}>
                <a href="/"><img style={location.pathname === '/' ? { height: "270px" } : { height: "360px" }} src={img} alt='slideImage' /></a>
              </div>
            )
          })
        }
      </Carousel>
      <Button style={{ display: hasMouseEnter ? "flex" : "none" }} className={location.pathname === '/' ? 'home-slide-arrow right' : 'arrow right'} onClick={next} icon={<RightOutlined />} />
      <Button style={{ display: hasMouseEnter ? "flex" : "none" }} className={location.pathname === '/' ? 'home-slide-arrow left' : 'arrow left'} onClick={prev} icon={<LeftOutlined />} />
    </>
  )
}

export default MyCarousel;