import { PlayPause } from "../../components/PlayPause"
import Tempo from "../../components/Tempo"
import PresetSelection from "../PresetSelection"
export default function Controls() {
  return (
    <div className='row align-items-center'>
      <Tempo />
      <PlayPause />
      <PresetSelection />
    </div>
  )
}
