import React from 'react'

import { INote } from '../Modal/types'
import './item.css'

type NoteItemProps = Omit<INote, 'id'>

const NoteItem: React.FC<NoteItemProps> = ({
  time, title, content
}) => {
  return (
    <div className="note-item">
      <div className="item-content">
        <div className="title">{ title }</div>
        <div className="content">
        { content }
        </div>
      </div>
      <div className="item-footer">
        <div className="time">{ time }</div>
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
