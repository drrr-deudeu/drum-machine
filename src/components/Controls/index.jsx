import { PlayPause } from "../../components/PlayPause"
import Tempo from "../../components/Tempo"
export default function Controls() {
  return (
    <div className='row align-items-center'>
      <Tempo />
      <PlayPause />
    </div>
  )
}
