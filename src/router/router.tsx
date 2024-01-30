import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Player from '../modules/player/pages/player'
import Home from '../modules/home/pages/home'

const RouterComponent = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/player/:courseId' element={ <Player/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterComponent
