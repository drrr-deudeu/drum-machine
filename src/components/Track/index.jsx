import { useState, useContext, useEffect } from "react"
import { DataContext } from "../../utils/dataContext"

import Steps from "../Steps"

export default function Track({ track, ind }) {
  const { presetInd, setVolume, getVolume } = useContext(DataContext)
  const [localVolume, setLocalVolume] = useState(getVolume(ind))
  const [localPresetInd, setLocalPresetInd] = useState(presetInd)
  const muteHandler = (e) => {
    e.preventDefault()
    if (localVolume) {
      setVolume(ind, 0)
      setLocalVolume(0)
    } else {
      setVolume(ind, 1)
      setLocalVolume(1)
    }
  }

  useEffect(() => {
    if (localPresetInd !== presetInd) {
      setLocalVolume(getVolume(ind))
      setLocalPresetInd(presetInd)
    }
  }, [presetInd, ind, localVolume, getVolume, localPresetInd])
  return (
    <div className='row'>
      <div className='col-2'>
        <button
          type='button'
          className={
            "col-2 btn-sm mute " +
            (localVolume === 0 ? "btn-danger" : "btn-success")
          }
          onClick={(e) => muteHandler(e)}>
          {localVolume ? "M" : "P"}
        </button>
      </div>
      <div className='col-2'>{track.name}</div>
      <Steps track={track} ind={ind} />
    </div>
  )
}
