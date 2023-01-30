import { useContext } from "react"
import { DataContext } from "../../utils/dataContext"
export function PlayPause() {
  const { isPlaying, play, stop } = useContext(DataContext)
  return (
    <div className='playpause'>
      {isPlaying ? (
        <button
          onClick={(e) => {
            e.preventDefault()
            stop()
          }}
          type='button'
          className='btn btn-success'>
          <img
            src='assets/icons/pause-solid.svg'
            width='32'
            height='32'
            alt='Pause'></img>
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.preventDefault()
            play()
          }}
          type='button'
          className='btn btn-primary'>
          <img
            src='assets/icons/play-solid.svg'
            width='32'
            height='32'
            alt='Play'></img>
        </button>
      )}
    </div>
  )
}
