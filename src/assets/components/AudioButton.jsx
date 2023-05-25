import { PlayCircle } from 'react-feather'
import React, { useState } from 'react'

function AudioButton() {
    const [play, setPlay] = useState(false);

  return (
    <span className={play ? 'play-circle' : 'play-circle lighter'} onClick={() => setPlay(!play)}>
        <PlayCircle/>
        </span>
  )
}

export default AudioButton