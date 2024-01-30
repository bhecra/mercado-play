import {  useContext } from 'react'
import HomeCard from '../home-card/home-card'
import { MovieContext } from '../../context/movie-context'
import  {useNavigate}  from 'react-router'

const HomeComponent = () => {

	const navigate  = useNavigate()

	const multimediaItems = useContext(MovieContext)
	return (
		<>
			<div className="main__item main__item--title">Tambien te puede interesar..</div>
			{multimediaItems && multimediaItems.map(item => (
				<div onClick={()=>navigate(`player/${item.id}`)}>
					<HomeCard key={item.id} {...item} />
				</div>
			))}
		</>
	)
}

export default HomeComponent
