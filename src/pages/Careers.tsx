import CareersHome from './careersComponents/CareersHome'
import CareersGrow from './careersComponents/CareersGrow'
import CareersLife from './careersComponents/CareersLife'
import CareersPerks from './careersComponents/CareersPerks'
import CareersReady from './careersComponents/CareersReady'

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