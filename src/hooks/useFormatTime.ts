import { useState } from 'react'

const useFormatTime = (initState: number): [string, (a: number) => void] => {
  const [time, setTime] = useState(initState)

  const dateTime = new Date(time)
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const hour = dateTime.getHours()
  const minute = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes()

  const timeStr = `${month}-${day} ${hour}:${minute}`

  const changeTime = (t: number): void => {
    setTime(t)
  }

  return [timeStr, changeTime]
}

export default useFormatTime
