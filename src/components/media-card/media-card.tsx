import { FC } from 'react'
import './media-card.scss'

export interface Props {
  title: string
  description: string
  restriction: string
  category: string
  type: string
  duration: string
  url: string
}

const MediaCardComponent: FC<Props> = ({
  title,
  restriction,
  category,
  duration,
  url,
  type,
}) => {

  return (
    <div className='horizontal-media-card__content'>
      <div className='horizontal-media-card__image-container'>
        <img src={url || "../src/assets/logo_large.webp"} alt="" />
      </div>
      <div className='horizontal-media-card__description'>
        <span>{title}</span>
        <p>{type} | {category} | {duration}</p>
        <p className='horizontal-media-card__description--tag'>{restriction}</p>
      </div>
    </div>
  )
}

export default MediaCardComponent