
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div>
        <div className='w-50 p-1 grid grid-cols-4 text-xl'>
            <FaInstagram /> <FaFacebook /> <IoLogoLinkedin /> <FaTwitter />
        </div>
    </div>
  )
}

export default FollowUs