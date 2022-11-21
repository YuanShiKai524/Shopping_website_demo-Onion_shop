import React from 'react'
import {Skeleton} from 'antd'


const ImgPlaceHolder = (props) => {
  return (
    <div className='img-placeholder' {...props}><Skeleton.Image style={{backgroundColor: "#f2f2f2"}} /></div>
  )
}

export default ImgPlaceHolder
