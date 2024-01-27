import { useRef, useState } from "react"

const VideoPlayer = () => {

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
        autoPlay
        controls>
        <source src={'/videos/leo-dan.webm'} />
      </video>

      <button onClick={handlePlay}> Play</button>
    </div>
  )
}

export default VideoPlayer