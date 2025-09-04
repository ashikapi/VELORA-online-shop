
import Header from '../components/mainComponents/Header'
import { Outlet } from 'react-router'
import Footer from '../components/mainComponents/Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <main className='pt-31'><Outlet /></main>
        <Footer />    
    </>
  )
}

export default Layout