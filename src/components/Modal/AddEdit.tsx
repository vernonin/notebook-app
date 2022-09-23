import React from 'react'

import './modal.css'

const AddEdit: React.FC = () => {
  return (
    <div className="add-edit">
      <i className="iconfont icon-guanbi"></i>
      <div style={{ paddingTop: '30px' }}>
        <input type="text" className="title-input" placeholder="请输入标题"/>
        <textarea name="" className="textarea" placeholder="请输入内容..." />
      </div>
      <div className="operation">
        <button>取消</button>
        <button className="confim">确定</button>
      </div>
    </div>
  )
}

export default AddEdit
