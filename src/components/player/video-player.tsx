import { IconButton } from "@mui/material"
import Button from "@mui/material/Button"
import { useRef, useState } from "react"
import { PlayCircle } from '@mui/icons-material';

const VideoPlayerComponent = () => {

  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)


  const handlePlay = () => {

    if (videoRef) {
      if (playing) {
        videoRef.current?.play()
      } else {
        videoRef.current?.pause()

      }
    }


    setPlaying(!playing)

  }
  return (
    <div className="meli-player">

      <video
        ref={videoRef}
        width={"100%"}
        controls>
        <source src={'/videos/leo-dan.webm'} />
      </video>

      <IconButton aria-label="Example">
      </IconButton>

      <Button variant="contained" onClick={handlePlay}> <PlayCircle />Play</Button>
    </div>
  )
}

export default VideoPlayerComponent