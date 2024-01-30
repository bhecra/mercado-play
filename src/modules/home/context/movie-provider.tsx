import { ReactElement, useEffect, useReducer } from 'react'
import { MovieContext } from './movie-context'
import { MovieCard } from '../interfaces/interfaces'
import { movieReducer } from './movie-reducer'
import { userManagementRepository } from '../../multimedia-item/domain/multimedia-item.provider'

const INITIAL_STATE: MovieCard ={
  id: '2',
  title: 'Inception',
  description: 'A thief enters the dreams of others to steal their secrets.',
  category: 'Sci-Fi',
  duration: '2h 28min',
  type: 'Movie',
  url: 'https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EKQC727E3JGH3PZQO2IEAGAQOM.jpg',
  restriction: '+14',
}

interface props {
    children:  ReactElement | ReactElement[]
}



export const MovieProvider = ({ children}: props) => {
  
  const [state, dispatch] = useReducer(movieReducer, [INITIAL_STATE])


  useEffect(() => {
    userManagementRepository.search().then(data => {

      const multimedia: MovieCard[] = data.map(item => {

        return {
          id:item.id,
          title:item.title,
          description:item.description,
          category:item.category,
          duration:item.duration,
          restriction:item.restriction,
          type:item.type,
          url: item.url,
          data: item.data,
        }
      })
      dispatch({type:'ITEMS_REQUEST',payload: multimedia})
    })
  }, [])
  
  return (
    <MovieContext.Provider value={state}>
        { children }
    </MovieContext.Provider>
  )
}
