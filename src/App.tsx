import React from 'react'

import Header from './components/Header'
import NoteItem from './components/NoteItem'

const AddIcon: React.FC = () => {
  return (
    <div className="add-icon">
      <i className="iconfont icon-bianjishuru"></i>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="body-main">
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </div>
      <AddIcon />
    </>
  )
}

export default App
