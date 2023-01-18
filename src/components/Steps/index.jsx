import { useEffect, useContext } from "react"
import { DataContext } from "../../utils/dataContext"

import Step from "../Step"
export default function Steps({ track, ind }) {
  // const mesSep_3 = 12
  // const mesSep_4 = 16
  // const times_3 = [0, 3, 6, 9]
  // const times_4 = [0, 4, 8, 12]
  const { presetInd } = useContext(DataContext)
  useEffect(() => {}, [track.steps, presetInd])
  return (
    <div
      className='col-12 btn-group btn-group-sm'
      role='group'
      aria-label='First group'>
      {track.steps.map((s, indStep) => {
        return (
          <Step
            key={"s" + indStep}
            step={s}
            indStep={indStep}
            indTrack={ind}
            modulo={track.modulo}
          />
        )
      })}
    </div>
  )
}
