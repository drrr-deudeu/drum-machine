const myCtx = new AudioContext()
// export const instruments = [
//   { id: 0, name: "Kick", url: "/sounds/Dry-Kick.wav" },
//   { id: 1, name: "Snare", url: "/sounds/Hip-Hop-Snare-2.wav" },
//   { id: 2, name: "CloseHiHat", url: "/sounds/Closed-Hi-Hat-5.wav" },
//   { id: 3, name: "Clap", url: "/sounds/Clap-1.wav" },
//   { id: 5, name: "Bell", url: "/sounds/Cowbell-1.wav" },
// ]

export const gogo1 = {
  bpm: 80,
  name: "Gogo 1",
  tracks: [
    {
      id: 1,
      name: "Kick",
      url: "/sounds/Dry-Kick.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        true,
        false,
        false,

        false,
        false,
        true,
        true,

        false,
        false,
        false,
        false,

        false,
        false,
        true,
        false,

        /* second bar */
        true,
        true,
        false,
        false,

        false,
        false,
        true,
        true,

        false,
        false,
        false,
        true,

        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 2,
      name: "Snare",
      url: "/sounds/Hip-Hop-Snare-2.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        true,
        false,
        false,

        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 3,
      name: "CloseHiHat",
      url: "/sounds/Closed-Hi-Hat-5.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        /* second bar */
        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,
      ],
    },
    {
      id: 4,
      name: "Clap",
      url: "/sounds/Clap-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 5,
      name: "Bell",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        true,
        true,
        false,
      ],
    },
    {
      id: 6,
      name: "Bell",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 3,
      subDivision: "8t",
      steps: [
        false,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,

        true,
        false,
        false,

        false,
        false,
        false,

        true,
        true,
        true,
      ],
    },
  ],
}
export const gogo2 = {
  bpm: 80,
  name: "Gogo 2",
  tracks: [
    {
      id: 1,
      name: "Kick",
      url: "/sounds/Dry-Kick.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        true,
        false,

        false,
        true,
        true,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        /* second bar */
        true,
        false,
        true,
        false,

        false,
        true,
        true,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 2,
      name: "Snare",
      url: "/sounds/Hip-Hop-Snare-2.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        true,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 3,
      name: "CloseHiHat",
      url: "/sounds/Closed-Hi-Hat-5.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        /* second bar */
        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,
      ],
    },
    {
      id: 4,
      name: "Clap",
      url: "/sounds/Clap-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 5,
      name: "Bell",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        true,
        true,
        false,
      ],
    },
  ],
}

export const defaultPreset = {
  bpm: 100,
  name: "default",
  tracks: [
    {
      id: 1,
      name: "Kick",
      url: "/sounds/Dry-Kick.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 2,
      name: "Snare",
      url: "/sounds/Hip-Hop-Snare-2.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        false,

        false,
        false,
        false,
        true,

        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        false,
        true,

        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 3,
      name: "CloseHiHat",
      url: "/sounds/Closed-Hi-Hat-5.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,
      ],
    },
    {
      id: 4,
      name: "Clap",
      url: "/sounds/Clap-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
      ],
    },
    {
      id: 5,
      name: "Bell",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 3,
      subDivision: "8t",
      steps: [
        false,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,

        true,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,
      ],
    },
  ],
}
export const metronomeSet = {
  bpm: 100,
  name: "Metronome",
  tracks: [
    {
      id: 1,
      name: "Kick",
      url: "/sounds/Dry-Kick.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 2,
      name: "Snare",
      url: "/sounds/Hip-Hop-Snare-2.wav",
      volume: 0,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        false,

        false,
        false,
        false,
        true,

        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        false,
        true,

        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 3,
      name: "CloseHiHat",
      url: "/sounds/Closed-Hi-Hat-5.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 4,
      name: "Clap",
      url: "/sounds/Clap-1.wav",
      volume: 0,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 5,
      name: "Bell",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 3,
      subDivision: "8t",
      steps: [
        false,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,

        false,
        false,
        false,
      ],
    },
  ],
}
export const tresilloSet = {
  bpm: 100,
  name: "Tresillo",
  tracks: [
    {
      id: 1,
      name: "Kick",
      url: "/sounds/Dry-Kick.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 2,
      name: "Snare",
      url: "/sounds/Hip-Hop-Snare-2.wav",
      volume: 0,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,
      ],
    },
    {
      id: 3,
      name: "CloseHiHat",
      url: "/sounds/Closed-Hi-Hat-5.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 4,
      name: "Clap",
      url: "/sounds/Clap-1.wav",
      volume: 0,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 5,
      name: "Bell1",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 6,
      name: "Bell2",
      url: "/sounds/Cowbell-2.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
  ],
}
export const cinquilloSet = {
  bpm: 100,
  name: "Cinquillo",
  tracks: [
    {
      id: 1,
      name: "Kick1",
      url: "/sounds/Dry-Kick.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 2,
      name: "Kick2",
      url: "/sounds/Kick-Drum-13.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 3,
      name: "Snare",
      url: "/sounds/Hip-Hop-Snare-2.wav",
      volume: 0,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,
      ],
    },
    {
      id: 4,
      name: "CloseHiHat",
      url: "/sounds/Closed-Hi-Hat-5.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 5,
      name: "Clap",
      url: "/sounds/Clap-1.wav",
      volume: 0,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 6,
      name: "Bell1",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
      ],
    },
    {
      id: 7,
      name: "Bell2",
      url: "/sounds/Cowbell-2.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,
      ],
    },
  ],
}

export const groove1Set = {
  bpm: 100,
  name: "Groove1",
  tracks: [
    {
      id: 1,
      name: "Kick1",
      url: "/sounds/Dry-Kick.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        true,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        true,

        true,
        false,
        false,
        true,

        true,
        false,
        false,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        false,
        true,
      ],
    },
    {
      id: 2,
      name: "Kick2",
      url: "/sounds/Kick-Drum-13.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        true,
        true,
        false,
        true,

        false,
        true,
        false,
        false,

        false,
        true,
        false,
        false,

        true,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 3,
      name: "Snare",
      url: "/sounds/Hip-Hop-Snare-2.wav",
      volume: 0,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        false,
        false,
        true,

        false,
        false,
        true,
        false,

        true,
        true,
        false,
        true,

        false,
        false,
        true,
        false,
      ],
    },
    {
      id: 4,
      name: "CloseHiHat",
      url: "/sounds/Closed-Hi-Hat-5.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        true,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        true,
        false,

        true,
        false,
        true,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        true,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        true,
        false,
      ],
    },
    {
      id: 5,
      name: "Clap",
      url: "/sounds/Clap-1.wav",
      volume: 0,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 6,
      name: "Bell1",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
      ],
    },
    {
      id: 7,
      name: "Bell2",
      url: "/sounds/Cowbell-2.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,
      ],
    },
  ],
}

export const gogo3 = {
  bpm: 90,
  name: "Gogo 3",
  tracks: [
    {
      id: 1,
      name: "Kick",
      url: "/sounds/Dry-Kick.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        true,
        false,
        false,
        false,

        false,
        true,
        false,
        false,

        false,
        false,
        false,
        true,

        false,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,
        false,

        false,
        true,
        false,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        false,
        false,
      ],
    },
    {
      id: 2,
      name: "Snare",
      url: "/sounds/Hip-Hop-Snare-2.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        true,
        true,

        /* second bar */
        false,
        false,
        true,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        true,
        false,
        true,
        false,
      ],
    },
    {
      id: 3,
      name: "CloseHiHat",
      url: "/sounds/Closed-Hi-Hat-5.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        /* second bar */
        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,

        false,
        false,
        true,
        false,
      ],
    },
    {
      id: 4,
      name: "Clap",
      url: "/sounds/Clap-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,
      ],
    },
    {
      id: 5,
      name: "Bell",
      url: "/sounds/Cowbell-1.wav",
      volume: 1,
      ctx: myCtx,
      loopId: -1,
      modulo: 4,
      subDivision: "16n",
      steps: [
        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        /* second bar */
        false,
        false,
        false,
        false,

        true,
        false,
        false,
        false,

        false,
        false,
        false,
        false,

        true,
        true,
        true,
        false,
      ],
    },
  ],
}

export const presets = [
  { value: 0, label: defaultPreset.name, preset: defaultPreset },
  { value: 1, label: metronomeSet.name, preset: metronomeSet },
  { value: 2, label: gogo1.name, preset: gogo1 },
  { value: 3, label: gogo2.name, preset: gogo2 },
  { value: 4, label: gogo3.name, preset: gogo3 },
  { value: 5, label: tresilloSet.name, preset: tresilloSet },
  { value: 6, label: cinquilloSet.name, preset: cinquilloSet },
  { value: 7, label: groove1Set.name, preset: groove1Set },
]
