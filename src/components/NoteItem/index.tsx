import React from 'react'

import { INote } from '../Modal/types'
import './item.css'

interface IItemProps extends INote {
  onShow: (id: string) => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const NoteItem: React.FC<IItemProps> = ({
  id, time, title, content, onShow, onEdit, onDelete
}) => {
  return (
    <div className="note-item">
      <div className="item-content" onClick={() => onShow(id)}>
        <div className="title">{ title }</div>
        <div className="content">
        { content }
        </div>
      </div>
      <div className="item-footer">
        <div className="time">{ time }</div>
        <div>
          <span className="edit">
            <i className="iconfont icon-bianji" onClick={() => onEdit(id)}></i>
            编辑
          </span>
          <span className="delete">
            <i className="iconfont icon-icon" onClick={() => onDelete(id)}></i>
            删除
          </span>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
