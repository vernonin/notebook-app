import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import useFormatTime from '../../hooks/useFormatTime'
import { INote } from './types'
import './modal.css'

type changeInput = React.ChangeEvent<HTMLInputElement>
type changeTextarea = React.ChangeEvent<HTMLTextAreaElement>

const getTime = (): number => {
  return new Date().getTime()
}

const AddEdit: React.FC<{
  titleMsg: string
  onClose: () => void
  confirm: (note: INote) => void
}> = ({ titleMsg, onClose, confirm }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [time, setTime] = useFormatTime(getTime())

  const onConfirm = (): void => {
    if (title.trim() === '') {
      return
    }
    if (content.trim() === '') {
      return
    }

    // 更新 time
    setTime(getTime())

    confirm({ id: nanoid(), time, title, content })
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
          onChange={ (e: changeInput) => setTitle(e.target.value) }
        />
        <textarea
          className="textarea"
          placeholder="请输入内容..."
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
