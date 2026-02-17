import NewArivals from '../components/homeComponents/HomeNewArivals'
import AboutFooter from '../components/AboutComponents/AboutFooter'
import HomeFooter from '../components/homeComponents/HomeFooter'
import HomeCategories from '../components/homeComponents/HomeCategories'
import HomeExclusive from '../components/homeComponents/HomeExclusive'
import HomeBestsell from '../components/homeComponents/HomeBestsell'
import HomeHero from '../components/homeComponents/HomeHero'

const Home = () => {
  return (
    <>
      <HomeHero />
      <NewArivals />
      <HomeCategories />
      <HomeBestsell/>
      <HomeExclusive/>
      <AboutFooter bgColor="bg-white"></AboutFooter>
      <HomeFooter/>
    </>
  )
}

export default Home