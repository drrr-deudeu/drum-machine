import { useContext } from "react"
import { DataContext } from "../../utils/dataContext"
import Track from "../Track"
export default function Tracks() {
  const { tracks } = useContext(DataContext)
  return (
    <div className='row'>
      {tracks.map((t, ind) => {
        return <Track key={"Track" + ind} track={t} ind={ind} />
      })}
    </div>
  )
}
