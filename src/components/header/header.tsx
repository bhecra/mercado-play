
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="header-container">

        <div className="header-container__logo">
          <img src="../../../src/assets/logo_large.webp" width={'134px'} height={'34px'} alt="" />
        </div>
        <div className="header-container__info">
          Christian Burbano
        </div>
      </div>
    </header>
  )
}

export default Header