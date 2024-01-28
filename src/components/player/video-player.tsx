import Button from "@mui/material/Button"
import { useRef, useState } from "react"
import { PlayCircle } from '@mui/icons-material';
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
  return (
    <div className="meli-player">
      <video
        autoPlay={true}
        ref={videoRef}
        width={"100%"}
        src={sourceFile || '/videos/leo-dan.webm'}
        onError={onError}
        controls>
        No se ecnotró el video <code>video</code>.
      </video>
      <Button variant="contained" onClick={handlePlay}> <PlayCircle />Play</Button>
    </div>
  )
}

export default VideoPlayerComponent