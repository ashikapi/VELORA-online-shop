
import CareersHome from './careersComponents/CareersHome'
import ContactExplore from './contactComponents/ContactExplore'
import ContactSendMessage from './contactComponents/ContactSendMessage'

const Contact = () => {
  return (
    <div>
        <CareersHome title = 'Contact Us' details = "Have a question about your order, sizing, shipping, or just want to say" subDetails="hello? Our team at Velora is always happy to hear from you." showSubtitle = {false} showDetails = {false}/>
        <ContactSendMessage />
        <ContactExplore />
    </div>
  )
}

export default Contact