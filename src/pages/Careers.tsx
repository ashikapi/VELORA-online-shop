import CareersHome from '../components/careersComponents/CareersHome'
import CareersGrow from '../components/careersComponents/CareersGrow'
import CareersLife from '../components/careersComponents/CareersLife'
import CareersPerks from '../components/careersComponents/CareersPerks'
import CareersReady from '../components/careersComponents/CareersReady'

const Careers = () => {
  return (
    <div>
        <CareersHome title  details  subDetails showSubtitle showDetails />
        <CareersGrow />
        <CareersLife />
        <CareersPerks />
        <CareersReady />
    </div>
  )
}

export default Careers