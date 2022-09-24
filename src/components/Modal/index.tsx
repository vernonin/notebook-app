import React, { ReactNode } from 'react'

import AddEditFC from './AddEdit'
import './modal.css'

const Modal: React.FC<{
  visible: boolean
  children: ReactNode
}> = ({ visible, children }) => {
  return (
    <>
      {
        visible
          ? (
              <div className="modal-container">
                { children }
              </div>
            )
          : ''
      }
    </>
  )
}

export const AddEdit = AddEditFC
export default Modal
