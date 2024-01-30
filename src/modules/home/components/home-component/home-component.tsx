import { useContext } from 'react'
import HomeCard from '../home-card/home-card'
import { MovieContext } from '../../context/movie-context'

const HomeComponent = () => {

	const multimediaItems = useContext(MovieContext)
	console.log({multimediaItems})
	return (
		<>
			<div  className="main__item main__item--title">Tambien te puede interesar..</div>
			{multimediaItems && multimediaItems.map(item => (
				<HomeCard key={item.id} {...item}/>
			))}
		</>
	)
}

export default HomeComponent
