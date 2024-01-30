import { useEffect, useState } from "react"
import { userManagementRepository } from "../../multimedia-item/domain/multimedia-item.provider"
import HomeKeepWatch from "../components/keep-watch/keep-watch";
import HomeComponent from "../components/home-component/home-component";
import { MovieProvider } from "../context/movie-provider";
import { MovieCard } from "../interfaces/interfaces";

const Home = () => {
  const [multimediaHome, setMultimediaHome] = useState<MovieCard[]>([])

  useEffect(() => {
    userManagementRepository.search().then(data => {
      console.log(data)

      const multimedia: MovieCard[] = data.map(item => {

        return {
          id:item.id,
          title:item.title,
          description:item.description,
          category:item.category,
          duration:item.duration,
          restriction:item.restriction,
          type:item.type,
          url: item.url,
          data: item.data,
        }
      })
      setMultimediaHome(multimedia)
    })
  }, [])

  return (
    <div className="body-desktop">
      <section className="main-component">
        <div className="infinite-scroll_out">
          <div className="infinite-scroll">
            <MovieProvider >
              <HomeKeepWatch/>
              <HomeComponent/>
            </MovieProvider>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
