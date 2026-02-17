import CareersHome from '../components/careersComponents/CareersHome'
import CareersGrow from '../components/careersComponents/CareersGrow'
import CareersLife from '../components/careersComponents/CareersLife'
import CareersPerks from '../components/careersComponents/CareersPerks'
import CareersReady from '../components/careersComponents/CareersReady'

const Careers = () => {
  return (
    <div>
        <CareersHome title='Careers at Velora'  details= 'At Velora, you’ll find purpose in your work, passion in your teammates, and growth in every step.'  subDetails='' showSubtitle = {false} showDetails = {false} />
        <CareersGrow />
        <CareersLife />
        <CareersPerks />
        <CareersReady />
    </div>
  )
}

export default Careers