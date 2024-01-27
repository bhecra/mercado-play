import Search from "../search/search"
import './sub-header.css'

const SubHeaderComponent = () => {
  return (
    <section className='sub-header-desktop'>
        <div className="sub-header-desktop__title"> <h1>Mercado Play</h1></div>
        <span className="sub-header-desktop__vertical-divider"></span>
        <div className="sub-header-desktop__search">
          <Search />
        </div>
    </section>
  )
}

export default SubHeaderComponent