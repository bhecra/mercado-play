import './App.css'
import Header from './components/header/header';
import VideoPlayer from './components/player/video-player';

function App() {

  return (
    <>


      <Header></Header>

      <main>
        <section className='sub-header-desktop'>
          <div className='sub-header__search'>
            <div> <h1>Mercado Play</h1></div>
            <input type="text" placeholder='¿Qué quieres ver hoy?' />
          </div>
        </section>
        <section className='multimedia-content'>
          <div className='primary-content'>
            <VideoPlayer></VideoPlayer>

            <div className='primary-content__description'>
              <div>

                <div>Lo mejor de mi vida</div>
                <div>Película | Drama | 1h 55m</div>
                <div>+14</div>
              </div>
              <p> Un novelista ganador de un Pulitzer y viudo, lucha contra una enfermedad al mismo tiempo que intenta criar a su hija.</p>
              <a> Conocer más</a>
            </div>

          </div>
          <div className='secondary-content'>
            <h3>También te puede interesar</h3>
            <hr />
            <div className='horizontal-media-card__content'>
              <div className='horizontal-media-card__image-container'>
                <img src="../src/assets/logo_large.webp" alt="" />
              </div>
              <div className='horizontal-media-card__description'>
                <span>Ultima canción</span>
                <p>Pelicula | Drama | Musica</p>
                <p>+14</p>
              </div>
            </div>
          </div>


        </section>

      </main>


      <h1>Hola mundo probando Meli play</h1>
      <h2>Hola mundo probando Meli play</h2>
      <p>Hola mundo probando Meli play</p>

    </>
  )
}

export default App
