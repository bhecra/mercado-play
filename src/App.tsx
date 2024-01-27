import './assets/styles/_main.scss'
import Header from './components/header/header';
import SubHeaderComponent from './components/sub-header/sub-header';
import Player from './modules/player/pages/player';

function App() {

  return (
    <>
      <Header />
      <main>
        <SubHeaderComponent />
        <Player />
      </main>
    </>
  )
}

export default App
