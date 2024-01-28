import MediaCardComponent, { Props as MultimediaCardProps } from "../../../components/media-card/media-card"
import VideoPlayerComponent from "../../../components/player/video-player"
import VideoDescriptionComponent from "../../../components/video-description/video-description"
import { useEffect, useState } from 'react';
import { userManagementRepository } from "../../multimedia-item/domain/multimedia-item.provider";

const Player = () => {
  const [multimediaItemsData, setMultimediaItemsData] = useState<MultimediaCardProps[]>()

  useEffect(() => {
    userManagementRepository.search().then(data => {

      const multimedia: MultimediaCardProps[] = data.map(item => {

        return {
          title: item.title,
          description: item.description,
          restriction: item.restriction,
          category: item.category,
          type: item.type,
          duration: item.duration,
          url: item.url,
        }
      })
      setMultimediaItemsData(multimedia)
    })
  }, [])


  return (
    <section className='multimedia-content'>
      <div className='multimedia-content__player'>
        <VideoPlayerComponent />
        <VideoDescriptionComponent />
      </div>
      <div className='multimedia-content__list'>
        <h3>También te puede interesar</h3>
        <hr />
        {
          multimediaItemsData && multimediaItemsData.length && multimediaItemsData.map(multimediaItem => <MediaCardComponent {...multimediaItem} />)
        }
      </div>


    </section>
  )
}

export default Player