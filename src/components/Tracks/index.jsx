import { useContext, useEffect } from "react"
import { DataContext } from "../../utils/dataContext"
import Track from "../Track"
export default function Tracks() {
  const { tracks, presetInd } = useContext(DataContext)

  useEffect(() => {}, [tracks, presetInd])
  return (
    <div className='row'>
      {tracks.map((t, ind) => {
        return <Track key={"Track" + ind} track={t} ind={ind} />
      })}
    </div>
  )
}
