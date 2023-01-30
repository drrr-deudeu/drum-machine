import { useContext, useEffect } from "react"
import { DataContext } from "../../utils/dataContext"
export default function Tempo() {
  const { tempo, changeTempo } = useContext(DataContext)
  useEffect(() => {}, [tempo])
  return (
    <div className='col-2'>
      <label htmlFor='tempo' className='col'>
        BPM
      </label>
      <input
        type='number'
        className='tempo'
        id='tempo'
        value={tempo}
        aria-describedby='tempoHelp'
        placeholder='Enter BPM'
        onChange={(e) => {
          e.preventDefault()
          changeTempo(e.target.value)
        }}></input>
    </div>
  )
}
