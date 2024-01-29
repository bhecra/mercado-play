import { useEffect } from "react"
import { userManagementRepository } from "../../multimedia-item/domain/multimedia-item.provider"
import HomeCard from '../components/home-card/home-card';
import HomeKeepWatch from "../components/keep-watch/keep-watch";
import HomeComponent from "../components/home-component/home-component";

const Home = () => {

  useEffect(() => {
    userManagementRepository.search().then(data => {
      console.log(data)

      // const multimedia: MultimediaCardProps[] = data.map(item => {

      //   return {
      //     title: item.title,
      //     description: item.description,
      //     restriction: item.restriction,
      //     category: item.category,
      //     type: item.type,
      //     duration: item.duration,
      //     url: item.url,
      //   }
      // })
      // setMultimediaItemsData(multimedia)
    })
  }, [])

  return (
    <div className="body-desktop">
      <section className="main-component">
        <div className="infinite-scroll_out">
          <div className="infinite-scroll">
            <HomeKeepWatch/>
            <HomeComponent/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
