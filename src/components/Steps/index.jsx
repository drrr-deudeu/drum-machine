import { useEffect } from "react"
import Step from "../Step"
export default function Steps({ track, ind }) {
  useEffect(() => {}, [track.steps])
  return (
    <div
      className='btn-group btn-group-sm'
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
