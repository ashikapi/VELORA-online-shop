
import AboutFooter from '../components/AboutComponents/AboutFooter'
import AboutThought from '../components/AboutComponents/AboutThought'
import AboutMore from '../components/AboutComponents/AboutMore'
import AboutValora from '../components/AboutComponents/AboutValora'
import AboutPurpose from '../components/AboutComponents/AboutPurpose'

const About = () => {
  return (
    <div>
        <div className='h-screen bg-[url("https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/about-bg.jpg")] bg-cover bg-center bg-no-repeat  bg-[rgba(0,0,0,0.7)] bg-blend-overlay flex justify-center items-center text-center'>
            <div className='space-y-6'>
                <h1 className='text-white font-extrabold text-5xl'>Style That <span className='block mt-6'> </span>Moves With <span className='block mt-6'></span> You</h1>
                <p className='text-white text-xl'>Born from a passion for timeless design and <span className='block mt-2'></span> everyday comfort</p>
            </div>
        </div>
        <AboutValora />
        <AboutMore />
        <AboutThought />
        <AboutPurpose />
        <AboutFooter bgColor="" />
    </div>
  )
}

export default About