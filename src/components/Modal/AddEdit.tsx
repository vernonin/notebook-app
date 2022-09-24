import React, { useState } from 'react'
import useFormatTime from '../../hooks/useFormatTime'
import { INote } from './types'
import './modal.css'

type changeInput = React.ChangeEvent<HTMLInputElement>
type changeTextarea = React.ChangeEvent<HTMLTextAreaElement>

const getTime = (): number => {
  return new Date().getTime()
}

const AddEdit: React.FC<{
  id?: string
  title?: string
  content?: string
  titleMsg: string
  onClose: () => void
  confirm: (note: INote) => void
}> = ({ id, title, content, titleMsg, onClose, confirm }) => {
  const [inpTitle, setInpTitle] = useState(() => (title != null) ? title : '')
  const [inpContent, setContent] = useState(() => (content != null) ? content : '')

  const [time, setTime] = useFormatTime(getTime())

  const onConfirm = (): void => {
    if (inpTitle.trim() === '') {
      return
    }
    if (inpContent.trim() === '') {
      return
    }

    // 更新 time
    setTime(getTime())

    const cId = (id != null) ? id : ''

    confirm({ id: cId, time, title: inpTitle, content: inpContent })
    onClose()
  }

  return (
    <div className="add-edit">
      <span>{ titleMsg }</span>
      <i onClick={onClose} className="iconfont icon-guanbi"></i>
      <div style={{ paddingTop: '12px' }}>
        <input
          type="text"
          className="title-input"
          placeholder="请输入标题"
          value={inpTitle}
          onChange={ (e: changeInput) => setInpTitle(e.target.value) }
        />
        <textarea
          className="textarea"
          placeholder="请输入内容..."
          value={inpContent}
          onChange={ (e: changeTextarea) => setContent(e.target.value) }
        />
      </div>
      <div className="operation">
        <button onClick={onClose}>取消</button>
        <button className="confirm" onClick={onConfirm}>确定</button>
      </div>
    </div>
  )
}

export default AddEdit
