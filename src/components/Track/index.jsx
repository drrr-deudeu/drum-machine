import { useContext, useEffect } from "react"
import { DataContext } from "../../utils/dataContext"

import Steps from "../Steps"

export default function Track({ track, ind }) {
  const { presetInd } = useContext(DataContext)
  useEffect(() => {}, [presetInd])
  return (
    <div className='row'>
      {/* <div className='col-1'>{track.id}</div> */}
      <div className='col-2'>{track.name}</div>
      <Steps track={track} ind={ind} />
    </div>
  )
}
