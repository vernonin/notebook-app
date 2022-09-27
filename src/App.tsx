import React, { useState, useCallback } from 'react'
import { nanoid } from 'nanoid'
import useStorage, { NOTES_DATA } from './hooks/useStorage'

import Header from './components/Header'
import NoteItem from './components/NoteItem'
import Modal, { AddEdit, Show } from './components/Modal'

import { INote } from './components/Modal/types'

const getStorageData = (): INote[] | [] => {
  return JSON.parse(localStorage.getItem(NOTES_DATA) as string)
}

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
  const [isAdd, setIsAdd] = useState(true)
  const [adVisible, setAdVisible] = useState(false)
  const [showVisible, setShowVisible] = useState(false)

  const [notes, setNotes] = useStorage<INote[]>(getStorageData())
  const [currNote, setCurrNote] = useState<INote | {}>({})

  // 打开弹框
  const openAdVisible = useCallback(() => {
    setCurrNote({})
    setIsAdd(true)
    setAdVisible(true)
  }, [])

  // 搜索
  const handleSearch = useCallback((keywords: string): void => {
    const data = notes.filter(n => n.title.includes(keywords))
    setNotes(data)
  }, [])

  // 添加笔记
  const addNotes = useCallback((note: INote): void => {
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

      setNotes([note, ...notes])
    }
  }, [notes])

  // 查看
  const handleShow = useCallback((id: string): void => {
    const cuur = notes.find(n => n.id === id)
    setCurrNote(cuur as INote)
    setShowVisible(true)
  }, [])

  // 编辑笔记
  const handleEdit = useCallback((id: string): void => {
    const cuur = notes.find(n => n.id === id)
    setCurrNote(cuur as INote)

    setIsAdd(false)
    setAdVisible(true)
  }, [notes])

  // 删除编辑
  const handleDelete = useCallback((id: string): void => {
    const data = notes.filter(n => n.id !== id)
    setNotes(data)
  }, [notes])

  return (
    <>
      <Header onSearch={handleSearch}/>
      <div className="body-main">
        {
          notes.map(note => (
            <NoteItem
              {...note}
              key={note.id}
              onShow={handleShow}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />)
          )
        }
      </div>

      <Modal visible={adVisible}>
        <AddEdit
          titleMsg={isAdd ? '添加事迹' : '编辑笔记'}
          {...currNote}
          onClose={() => setAdVisible(false)}
          confirm={addNotes}
        />
      </Modal>

      <Modal visible={showVisible}>
        <Show {...currNote} onClose={() => setShowVisible(false)}/>
      </Modal>

      <AddIcon onAddIcon={openAdVisible} />
    </>
  )
}

export default App
