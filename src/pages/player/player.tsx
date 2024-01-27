import MediaCardComponent from "../../components/media-card/media-card"
import VideoPlayerComponent from "../../components/player/video-player"
import VideoDescriptionComponent from "../../components/video-description/video-description"

const Player = () => {
  return (
    <section className='multimedia-content'>
      <div className='multimedia-content__player'>
        <VideoPlayerComponent/>
        <VideoDescriptionComponent/>
      </div>
      <div className='multimedia-content__list'>
        <h3>También te puede interesar</h3>
        <hr />

        <MediaCardComponent/>

      </div>


    </section>
  )
}

export default Player