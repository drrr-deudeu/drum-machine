import { createContext, useState } from "react"
import { presets } from "../../datas/tracks"
import { Time, Transport } from "tone"

/**
 *
 * React Context
 *
 */
export const DataContext = createContext()
/**
 * React component allowing to share values for all pages.
 * @param {JSX.Element} param0
 */
export const DataProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [presetInd, setPresetInd] = useState(0)
  const [tempo, setTempo] = useState(presets[presetInd].preset.bpm)
  const setVolume = (ind, volume) => {
    tracks[ind].volume = volume
    createLoop(tracks[ind])
  }
  const getVolume = (ind) => {
    return tracks[ind].volume
  }
  const play = () => {
    switch (isPlaying) {
      case true:
        break
      case false:
        tracks.map((t) => createLoop(t))
        Transport.context.resume()
        Transport.start()
        break
      default:
        break
    }
    setIsPlaying(true)
  }
  const stop = () => {
    switch (isPlaying) {
      case true:
        Transport.stop()
        break
      case false:
        break
      default:
        break
    }
    setIsPlaying(false)
  }

  const changePreset = (ind) => {
    tracks.map((track) => {
      if (track.loopId !== -1) Transport.clear(track.loopId)
      track.loopId = -1
      return track.loopId
    })
    setPresetInd(ind)
    setTracks(presets[ind].preset.tracks)

    changeTempo(presets[ind].preset.bpm)
  }
  const setStep = (indStep, indTrack) => {
    const t = tracks
    t[indTrack].steps[indStep] = !t[indTrack].steps[indStep]
    createLoop(t[indTrack])
    setTracks(t)
  }
  const [tracks, setTracks] = useState(presets[presetInd].preset.tracks)

  const getData = (t) => {
    const request = new XMLHttpRequest()
    request.open("GET", t.url, true)
    request.responseType = "arraybuffer"
    request.onload = () => {
      const audioData = request.response
      t.ctx.decodeAudioData(
        audioData,
        (buffer) => {
          t.buffer = buffer
        },
        (e) => console.error(`Error with decoding audio data: ${e}`)
      )
    }
    request.send()
  }

  const loadDataTracks = () => {
    tracks.map((t, ind) => {
      getData(t)
      t.gain = t.ctx.createGain()
      t.gain.connect(t.ctx.destination)
      t.gain.gain.value = t.volume
      createLoop(t)
      return ind
    })
  }
  const setup = (t) => {
    t.source = t.ctx.createBufferSource()
    t.source.buffer = t.buffer
    t.source.connect(t.gain)
    t.gain.gain.value = t.volume
  }

  const trigger = (time, t) => {
    // if (t.volume === 0) {
    //   return
    // }
    setup(t)
    t.source.start(time)
    t.source.stop(time + 0.15)
  }

  const changeTempo = (bpm) => {
    Transport.bpm.value = tempo
    setTempo(bpm)
    if (isPlaying) Transport.context.resume()
  }

  const createLoop = (track) => {
    if (track.loopId !== -1) Transport.clear(track.loopId)
    Transport.bpm.value = tempo
    const loop = (time) => {
      track.steps.forEach((s, i) => {
        if (s) {
          trigger(time + i * Time(track.subDivision).toSeconds(), track)
        }
      })
    }
    track.loopId = Transport.schedule(loop, "0")
  }
  Transport.loop = true
  Transport.loopEnd = "2m"

  loadDataTracks()

  return (
    <DataContext.Provider
      value={{
        isPlaying,
        play,
        stop,
        tempo,
        changeTempo,
        tracks,
        setStep,
        changePreset,
        presetInd,
        setVolume,
        getVolume,
      }}>
      {children}
    </DataContext.Provider>
  )
}
