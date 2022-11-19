import React from 'react'
import { Spin } from 'antd';




const Loading = () => {
  return (
    <div className="flex" style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: "40px" }}>
      <Spin size="large" />
    </div>
  )
}

export default Loading
