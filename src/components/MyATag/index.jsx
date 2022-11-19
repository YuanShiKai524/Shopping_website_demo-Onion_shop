import React from 'react'

const MyATag = (props) => {
  return (
    <a rel="noopener noreferrer" target="_blank" {...props}>{props.children}</a>
  )
}

export default MyATag
