import Navbar2 from "../layout/Navbar2"
import Hero from "../components/home/Hero"
import CuratedList from "../components/home/CuratedList"
import PopularLocation from "../components/home/PopularLocation"

const Home = () => {
  return (
    <div>
        <Navbar2 />
        <Hero />
        <CuratedList />
        <PopularLocation />
    </div>
  )
}

export default Home