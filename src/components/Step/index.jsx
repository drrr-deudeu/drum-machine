import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../utils/dataContext"

export default function Step({ step, indStep, indTrack, modulo }) {
  const { setStep, presetInd, tracks } = useContext(DataContext)
  const [localState, setLocalState] = useState(step)
  const classNameOn = "btn btn-secondary btn-sm modulo__" + modulo
  const classNameOff = "btn btn-primary btn-sm modulo__" + modulo
  const mod = (indStep % modulo) + 1

  const handleStep = (e, indStep, indTrack) => {
    e.preventDefault()
    setStep(indStep, indTrack)
    setLocalState((prev) => !prev)
  }

  useEffect(() => {
    setLocalState(tracks[indTrack].steps[indStep])
  }, [localState, presetInd, indStep, indTrack, tracks])
  return (
    <button
      type='button'
      className={
        (localState ? classNameOn : classNameOff) +
        (mod === modulo ? " fin__" + modulo : "")
      }
      onClick={(e) => handleStep(e, indStep, indTrack)}>
      {mod}
    </button>
  )
}
