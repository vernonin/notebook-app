import { useState } from 'react'

export const NOTES_DATA = 'notesData'

const useStorage = <T>(initState: T): [T, (data: T) => void] => {
  const [data, setData] = useState(initState)

  localStorage.setItem(NOTES_DATA, JSON.stringify(data))

  const updateDate = (data: T): void => {
    setData(data)
  }

  return [data, updateDate]
}

export default useStorage
