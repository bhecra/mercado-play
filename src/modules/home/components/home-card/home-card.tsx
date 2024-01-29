import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';


const HomeCard = () => {
  return (
    <div className="main-item">
      <Card>
        <CardContent>
          <img className='image-ratio' alt={'Corazon de caballero'} src='https://i.ytimg.com/vi/MVvGSBKV504/sddefault.jpg'/>
          <div>Corazon de caballero</div>
          <div>
            <span>Pelicula | </span>
            <span>Aventura, drama | </span>
            <span> 2h 12 m</span>
          </div>
          <Chip label='+16'/>
        </CardContent>
      </Card>
    </div>
  )
}

export default HomeCard
 