import Select from "react-select"

import { presets } from "../../datas/tracks"
import { useContext } from "react"
import { DataContext } from "../../utils/dataContext"

export default function PresetSelection() {
  const { presetInd, changePreset } = useContext(DataContext)

  const onChangePreset = (v) => {
    changePreset(v.value)
  }

  return (
    <div className='col-3'>
      <label htmlFor='preset' className='col'>
        preset
      </label>
      <div className='col'>
        <Select
          id='preset'
          className='preset_select'
          defaultValue={presetInd}
          onChange={(e) => onChangePreset(e)}
          options={presets}
        />
      </div>
    </div>
  )
}
