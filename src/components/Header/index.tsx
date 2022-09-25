import React, { useState, useRef } from 'react'

import './header.css'

const titleDefaultStyle = {
  left: 'calc(50% - 45px)'
}
const titleSearchStyle = {
  left: '12px'
}

const Header: React.FC<{
  onSearch: (keywords: string) => void
}> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const search = (): void => {
    setIsSearch(!isSearch)
  }
  const onKeyUp = (e: React.KeyboardEvent): void => {
    const value = inputRef?.current?.value
    if (value?.trim() === '') {
      return
    }

    if (e.code === 'Enter') {
      onSearch(value as string)

      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      inputRef?.current && (inputRef.current.value = '')
    }
  }

  return (
    <>
      <div className="header-container">
        <span
          style={isSearch ? titleSearchStyle : titleDefaultStyle}
          className="title">
          我的记事本
        </span>
        {isSearch ? <input className="search-input" type="text" ref={inputRef} onKeyUp={onKeyUp} placeholder='请输入搜索内容~' /> : ''}
        <div className="search-icon" onClick={search}>
          {isSearch ? <span className="cancel">取消</span> : <i className="iconfont icon-sousuo"></i>}
        </div>
      </div>
    </>
  )
}

export default Header
