import React, { ReactNode } from 'react'

import AddEditFC from './AddEdit'
import ShowFC from './Show'
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

export const Show = ShowFC
export const AddEdit = AddEditFC

export default Modal
