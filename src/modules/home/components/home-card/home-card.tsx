import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import { FC } from 'react';
import { MovieCard } from '../../interfaces/interfaces';

export interface Props {
  id: string
  title: string
  description: string
  category: string
  duration: string
  type: string
  url: string
  data: string
  restriction: string
}


const HomeCard : FC<MovieCard> = ({
  id,
  title,
  description,
  category,
  duration,
  restriction,
  type,
  url,
}) => {

  console.log(title)
  return (
    <div className="main-item">
      <Card key={id}>
        <CardContent>
          <img className='image-ratio' alt={title} src={url}/>
          <div className='main-item__text'>
            <div className="main-item__principal-title">{title}</div>
            <div className="main-item__tags">
              <span>{category} | </span>
              <span>{ type } | </span>
              <span> {duration} </span>
            </div>
            <Chip className="main-item__chip" label={restriction}/>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HomeCard
 