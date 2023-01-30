import { useContext, useEffect } from "react"
import { DataContext } from "../../utils/dataContext"
import Select from "react-select"

export default function Swing() {
  const { swing, changeSwing } = useContext(DataContext)
  const swingPreset = [
    { value: 0, label: "&#9836;" },
    { value: 1, label: "(+&frac16;)" },
    { value: 2, label: "+&frac14;" },
    { value: 3, label: "+&frac13;" },
    { value: 4, label: "+&frac12;" },
  ]
  const onChangeSwing = (v) => {
    changeSwing(v.value)
  }
  useEffect(() => {}, [swing])
  return (
    <div className='col-3'>
      <label htmlFor='swing' className='col'>
        8th swing
      </label>

      <div className='col'>
        <Select
          id='swing'
          className='swing'
          defaultValue={swing}
          onChange={(e) => onChangeSwing(e)}
          options={swingPreset}
          formatOptionLabel={function (data) {
            return <span dangerouslySetInnerHTML={{ __html: data.label }} />
          }}
        />
      </div>
    </div>
  )
}
