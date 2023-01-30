import { PlayPause } from "../../components/PlayPause"
import Tempo from "../../components/Tempo"
import PresetSelection from "../PresetSelection"
import Swing from "../Swing"
import { Position } from "../Position"
export default function Controls() {
  return (
    <div className='controls'>
      <Tempo />
      <PlayPause />
      <Swing />
      <PresetSelection />
      <Position />
    </div>
  )
}
