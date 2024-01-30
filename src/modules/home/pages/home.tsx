import { useEffect, useState } from "react"
import { userManagementRepository } from "../../multimedia-item/domain/multimedia-item.provider"
import HomeKeepWatch from "../components/keep-watch/keep-watch";
import HomeComponent from "../components/home-component/home-component";
import { MovieProvider } from "../context/movie-provider";
import { MovieCard } from "../interfaces/interfaces";

const Home = () => {

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
