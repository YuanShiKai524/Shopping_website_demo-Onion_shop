import React from 'react'
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div className="flex" style={{ flex: 1, justifyContent: "center", alignItems: "center", height: '400px', width: "100%"}}>
      <Spin size="large" />
    </div>
  )
}

export default Loading
