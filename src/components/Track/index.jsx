import Steps from "../Steps"

export default function Track({ track, ind }) {
  return (
    <div className='row'>
      <div className='col-1'>{track.id}</div>
      <div className='col-2'>{track.name}</div>

      <Steps track={track} ind={ind} />
    </div>
  )
}
