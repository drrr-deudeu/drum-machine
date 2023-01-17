import { useContext } from "react"
import { DataContext } from "../../utils/dataContext"
export default function Tempo() {
  const { tempo, changeTempo } = useContext(DataContext)
  return (
    <>
      <label htmlFor='tempo' className='col-1'>
        BPM
      </label>
      <input
        type='number'
        className='col-2'
        id='tempo'
        defaultValue={tempo}
        aria-describedby='tempoHelp'
        placeholder='Enter BPM'
        onChange={(e) => {
          e.preventDefault()
          changeTempo(e.target.value)
        }}></input>
    </>
  )
}