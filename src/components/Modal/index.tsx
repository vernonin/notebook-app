import React, { ReactNode } from 'react'

import AddEditFC from './AddEdit'
import './modal.css'

const Modal: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <div className="modal-container">
      {children}
    </div>
  )
}

export const AddEdit = AddEditFC
export default Modal
