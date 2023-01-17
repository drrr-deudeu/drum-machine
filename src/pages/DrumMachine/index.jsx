import Controls from "../../components/Controls"
import Header from "../../components/Header"
import Tracks from "../../components/Tracks"

export default function DrumMachine() {
  return (
    <div className='container'>
      <Header />
      <Controls />
      <Tracks />
    </div>
  )
}
