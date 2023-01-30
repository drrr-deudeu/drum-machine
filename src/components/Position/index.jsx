import { useContext, useEffect } from "react"
import { DataContext } from "../../utils/dataContext"
import { Transport } from "tone"
export function Position() {
  const { position, setPosition } = useContext(DataContext)

  useEffect(() => {
    setInterval(() => {
      setPosition(Transport.position)
    }, 100)
  }, [position, setPosition])
  return <div className='col-3'>{position}</div>
}
