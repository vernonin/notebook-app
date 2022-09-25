import React from 'react'

const Show: React.FC<{
  id?: string
  time?: string
  title?: string
  content?: string
  onClose: () => void
}> = ({ time, title, content, onClose }) => {
  return (
    <div className="show-container">
      <div className="title">{ title }</div>
      <div className="time">{ time }</div>
      <div className="content">{ content }</div>
      <i onClick={onClose} className="iconfont icon-guanbi close-show"></i>
    </div>
  )
}

export default Show
