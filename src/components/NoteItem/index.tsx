import React from 'react'

import './item.css'

const NoteItem: React.FC = () => {
  return (
    <div className="note-item">
      <div className="item-content">
        <div className="title">标题</div>
        <div className="content">
        无论世界是否待你温柔，请保持住你的善良，好运会与你不期而遇。活成自己喜欢的样子，有些人出现在你的生命里，只是为了教你成长。
        </div>
      </div>
      <div className="item-footer">
        <div className="time">9-22 20:33</div>
        <div>
          <span className="edit">
            <i className="iconfont icon-bianji"></i>
            编辑
          </span>
          <span className="delete">
            <i className="iconfont icon-icon"></i>
            删除
          </span>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
