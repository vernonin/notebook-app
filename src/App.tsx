import React, { useState, useCallback } from 'react'
import { nanoid } from 'nanoid'

import Header from './components/Header'
import NoteItem from './components/NoteItem'
import Modal, { AddEdit } from './components/Modal'

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
  const [currNote, setCurrNote] = useState<INote | {}>({})
  const [isAdd, setIsAdd] = useState(true)

  // 打开弹框
  const openAdVisible = useCallback(() => {
    setCurrNote({})
    setIsAdd(true)
    setAdVisible(true)
  }, [])

  // 关闭弹框
  const closeAdVisible = (): void => {
    setAdVisible(false)
  }

  // 添加笔记
  const addNotes = (note: INote): void => {
    if (note.id !== '') {
      const editNotes = notes.map(n => {
        if (n.id === note.id) {
          n.time = note.time
          n.title = note.title
          n.content = note.content
        }

        return n
      })

      setNotes(editNotes)
    } else {
      note.id = nanoid()

      setNotes((notes) => [note, ...notes])
    }
  }
  // 编辑笔记
  const handleEdit = (id: string): void => {
    const cuur = notes.find(n => n.id === id)
    setCurrNote(cuur as INote)

    setIsAdd(false)
    setAdVisible(true)
  }
  // 删除编辑
  const handleDelete = (id: string): void => {
    setNotes((notes) => notes.filter(n => n.id !== id))
  }

  return (
    <>
      <Header />
      <div className="body-main">
        {
          notes.map(note => (
            <NoteItem {...note} key={note.id} onEdit={handleEdit} onDelete={handleDelete} />)
          )
        }
      </div>

      <Modal visible={adVisible}>
        <AddEdit
          titleMsg={isAdd ? '添加事迹' : '编辑笔记'}
          {...currNote}
          onClose={closeAdVisible}
          confirm={addNotes}
        />
      </Modal>
      <AddIcon onAddIcon={openAdVisible} />
    </>
  )
}

export default App
