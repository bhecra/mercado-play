import { useEffect } from "react"
import HomeKeepWatch from "../components/keep-watch/keep-watch";
import HomeComponent from "../components/home-component/home-component";
import { MovieProvider } from "../context/movie-provider";
import { httpAdapter } from "../../../utils/http/factory";

const Home = () => {

  
  useEffect(() => {
    const http = httpAdapter<string>()
    http.get({ url: 'https://pokeapi.co/api/v2/pokemon/ditto', args: '' }).then(response => console.log(response))
  }, [])

  return (
    <div className="body-desktop">
      <section className="main-component">
        <div className="infinite-scroll_out">
          <div className="infinite-scroll">
            <MovieProvider >
              <HomeKeepWatch />
              <HomeComponent />
            </MovieProvider>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
