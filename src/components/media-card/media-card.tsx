import './media-card'.scss'

const MediaCardComponent = () => {
  return (
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
  )
}

export default MediaCardComponent