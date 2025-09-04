
import FollowUs from './FollowUs';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const ContactSendMessage = () => {


    const info = [
        {title:'Email',info:'contact@info.com', icon:<MdEmail /> },
        {title:'Phone',info:'929-242-6868', icon:<FaPhoneAlt /> },
        {title:'Address',info:'123 Fifth Avenue, New York, NY 10160', icon:<MdLocationOn /> },
        {title:'Follow Us',info:'',add:<FollowUs/> ,icon: <FaHeart />},
    ];
    
  return (
    <div className='flex justify-center items-center  mt-30 mb-30'>
        <div className='w-300 p-4 grid grid-cols-2'>
            <div className='w-150 p-10 bg-[rgb(247,236,237)] rounded-4xl -ml-10 space-y-10'>
                <h1 className='text-2xl font-bold text-black'>Send Us Message</h1>
                <p><input className='w-130 p-2 border border-gray-400 rounded-lg' type="text" name="" id="" placeholder='Name *' /> </p>
                <p> <input className='w-130 p-2 border border-gray-400 rounded-lg' type="text" name="" id="" placeholder='Email *' /> </p>
                <p> <input className='w-130 p-2 border border-gray-400 rounded-lg' type="text" name="" id="" placeholder='Comment *' /> </p>
                <p className='space-x-3 gap-4 font-semibold'>
                    <input className='mr-4 h-4 w-4 accent-[rgb(239,35,60)] rounded' type="checkbox" />
                    Save my name, email and website in this browser
                </p>
                <label className=''>
                <button className='px-4 py-3 rounded-md uppercase text-white font-semibold bg-[rgb(239,35,60)] flex'>Send</button>
                </label>
            </div>
            <div className='bg-[rgb(247,236,237)] p-10 rounded-4xl gap-50'>
                {info.map((info , index)=>(
                    <div  className='' key={index}>
                        <div className='flex justify-between items-center gap-5'>
                        <div className='text-[rgb(239,35,60)] text-2xl w-20  p-4 text-center bg-white rounded-full'>{info.icon}</div>
                        <div className='w-350 p-4 space-y-4'>
                        <h1 className='text-xl text-black font-bold'>{info.title}</h1>
                        <p className='text-xl'>{info.info}</p>
                        <p>{info.add}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ContactSendMessage