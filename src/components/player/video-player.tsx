import Button from "@mui/material/Button"
import { useRef, useState } from "react"
import { PauseCircle, PlayCircle } from '@mui/icons-material';
import './video-player.scss'

const VideoPlayerComponent = ({ sourceFile }) => {

  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const onError = (error) => {
    console.error('Controled Error', error);
  }


  const handlePlay = () => {

    if (videoRef) {
      if (playing) {
        videoRef.current?.pause()
      } else {
        videoRef.current?.play()
      }
    }
    setPlaying(!playing)
  }

  const fullScreenButton = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  }


  const muted = () => {

    console.log(videoRef.current.muted);

    if (videoRef) {

      videoRef.current.muted = !videoRef.current.muted
    }
  }
  return (


    <div className="meli-player">
      <video
        autoPlay={true}
        ref={videoRef}
        width={"100%"}
        src={sourceFile || '/videos/leo-dan.webm'}
        onError={onError}
        
      >
        No se ecnotró el video <code>video</code>.
      </video>
      <div className="custom-controls">
        <Button id="playPause" variant="contained" onClick={handlePlay}>{videoRef.current?.paused ? <PlayCircle /> : <PauseCircle />}</Button>
        <input type="range" id="seek-bar" value={videoRef.current.currentTime} />
        <button id="mute" onClick={muted}>Mute</button>
        {/* <button id="full-screen" onClick={fullScreenButton}>Fullscreen</button> */}
        <div className="time-indicator">0:00 / 0:00</div>
      
        <button id="volume">🔊</button>

        <button id="full-screen" onClick={fullScreenButton}>⛶</button>
      </div>
    </div>

  )
}

export default VideoPlayerComponent