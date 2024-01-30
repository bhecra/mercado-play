import { ReactElement, useReducer } from 'react'
import { MovieContext } from './movie-context'
import { MovieCard } from '../interfaces/interfaces'
import { movieReducer } from './movie-reducer'

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
  
  return (
    <MovieContext.Provider value={state}>
        { children }
    </MovieContext.Provider>
  )
}
