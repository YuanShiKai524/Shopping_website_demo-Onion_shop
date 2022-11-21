import React from 'react'
import {Skeleton} from 'antd'


const ImgPlaceHolder = (props) => {
  return (
    <div className='img-placeholder' {...props}><Skeleton.Image style={{backgroundColor: "white"}} /></div>
  )
}

export default ImgPlaceHolder
