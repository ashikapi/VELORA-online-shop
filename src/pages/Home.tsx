import NewArivals from '../components/homeComponents/HomeNewArivals'
import AboutFooter from '../components/AboutComponents/AboutFooter'
import HomeFooter from '../components/homeComponents/HomeFooter'
import HomeCategories from '../components/homeComponents/HomeCategories'
import HomeExclusive from '../components/homeComponents/HomeExclusive'
import HomeBestsell from '../components/homeComponents/HomeBestsell'

const Home = () => {
  return (
    <div>
        <div className="h-screen bg-[url('https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/home-hero-bg.jpg')] 
        bg-cover bg-center bg-no-repeat  bg-[rgba(0,0,0,0.6)] bg-blend-overlay flex justify-center items-center text-center">
        <div className=''>
        <h1 className='p-4 text-white text-5xl font-extrabold'>Timeless Fashion for the <span><br /> Modern Wardrobe</span></h1>
        <p className='p-4 text-white text-lg font-semibold'>Discover timeless fashion for Men, Women, and Kids – crafted for <span><br /></span> comfort, designed for confidence.</p>
        <button className='px-4 py-2 bg-[rgb(239,35,60)] rounded-3xl text-white text-xl mt-20 uppercase'>Explore the Collection</button>
        </div>
        </div>
        <div><NewArivals /></div>
        <div><HomeCategories /></div>
        <div><HomeBestsell/></div>
        <div><HomeExclusive/></div>
        <div><AboutFooter bgColor="bg-white"></AboutFooter></div>
        <div><HomeFooter/></div>
    </div>
  )
}

export default Home