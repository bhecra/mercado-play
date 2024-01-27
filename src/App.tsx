import './App.css'
import Header from './components/header/header';
import SubHeaderComponent from './components/sub-header/sub-header';
import Player from './pages/player/player';

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
