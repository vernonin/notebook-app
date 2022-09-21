import React, { useState } from 'react'

import './header.css'

const titleDefaultStyle = {
  left: 'calc(50% - 45px)'
}
const titleSearchStyle = {
  left: '12px'
}

const Header: React.FC = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const onSearch = (): void => {
    setIsSearch(!isSearch)
  }

  return (
    <>
      <div className="header-container">
        <span
          style={isSearch ? titleSearchStyle : titleDefaultStyle}
          className="title">
          我的记事本
        </span>
        {isSearch ? <input className="search-input" type="text" placeholder='请输入搜索内容~' /> : ''}
        <div className="search-icon" onClick={onSearch}>
          {isSearch ? <span className="cancel">取消</span> : <i className="iconfont icon-sousuo"></i>}
        </div>
      </div>
    </>
  )
}

export default Header
