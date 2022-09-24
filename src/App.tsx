import React, { useState } from 'react'

import Modal, { AddEdit } from './components/Modal'
import Header from './components/Header'
import NoteItem from './components/NoteItem'

import { INote } from './components/Modal/types'

const AddIcon: React.FC<{
  onAddIcon: () => void
}> = ({ onAddIcon }) => {
  return (
    <div className="add-icon" onClick={onAddIcon}>
      <i className="iconfont icon-bianjishuru"></i>
    </div>
  )
}

const App: React.FC = () => {
  const [adVisible, setAdVisible] = useState(false)
  const [notes, setNotes] = useState<INote[]>([])

  // 关闭弹框
  const openAdVisible = (): void => {
    setAdVisible(true)
  }
  // 打开弹框
  const closeAdVisible = (): void => {
    setAdVisible(false)
  }

  // 添加笔记
  const addNotes = (note: INote): void => {
    setNotes((notes) => [note, ...notes])
  }

  return (
    <>
      <Header />
      <div className="body-main">
        {
          notes.map(note => (<NoteItem {...note} key={note.id}/>))
        }
      </div>

      <Modal visible={adVisible}>
        <AddEdit titleMsg="添加事迹" onClose={closeAdVisible} confirm={addNotes}/>
      </Modal>
      <AddIcon onAddIcon={openAdVisible} />
    </>
  )
}

export default App
