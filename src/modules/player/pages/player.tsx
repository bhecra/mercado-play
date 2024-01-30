import MediaCardComponent, { Props as MultimediaCardProps } from "../../../components/media-card/media-card"
import VideoPlayerComponent from "../../../components/player/video-player"
import VideoDescriptionComponent from "../../../components/video-description/video-description"
import { useEffect, useState } from 'react';
import { userManagementRepository } from "../../multimedia-item/domain/multimedia-item.provider";
import { useNavigate, useParams } from "react-router";

const Player = () => {
  const [multimediaItemsData, setMultimediaItemsData] = useState<MultimediaCardProps[]>()
  const [currentItem, setCurrentItem] = useState<string>()

  const { courseId } = useParams()
  const navigate = useNavigate()

  const onClickCard = (id: number) => {
    navigate(`/player/${id}`)
  }

  useEffect(() => {
    setCurrentItem(`/videos/${courseId}.webm`)
  }, [courseId])

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
        <VideoPlayerComponent sourceFile={currentItem} />
        <VideoDescriptionComponent />
      </div>
      <div className='multimedia-content__list'>
        <h3>También te puede interesar</h3>
        <hr />
        {
          multimediaItemsData && multimediaItemsData.map((multimediaItem, index) => {
            return (
              <div key={index} onClick={() => { onClickCard(index + 1) }}>
                <MediaCardComponent  {...multimediaItem} />
              </div>
            )
          })
        }
      </div>


    </section>
  )
}

export default Player