import { GrDeliver } from "react-icons/gr";
import { BsFillGiftFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const HomeFooter = () => {

    const details = [
        {id:1, icon:<GrDeliver /> ,name:'Free Standard Delivery', txt:'On all Orders Over $100'},
        {id:2, icon:<BsFillGiftFill /> ,name:'Quick Delivery', txt:'Delivery within 3 Days across US'},
        {id:3, icon:<MdOutlinePayment /> ,name:'Secure Payments', txt:'Secure Payment Methods'},
        {id:4, icon:<RiCustomerService2Fill /> ,name:'Top Rated Customer Service', txt:'Quick Responses & Solutions'},
    ]

  return (
    <div className='bg-[rgb(254,239,241)] flex justify-center items-center'>
        <div>
            <div className='grid md:grid-cols-4 grid-cols-2 pt-20 pb-20'>
                {details.map((detail, index)=>(
                    <ul className='w-96 p-4 space-y-4' key={index}>
                        <div className='flex justify-center items-center'>
                        <li className='text-4xl font-extrabold text-[rgb(239,35,60)]'>{detail.icon}</li>
                        </div>
                        <div className='text-center text-black space-y-2'>
                        <li className='text-xl font-bold'>{detail.name}</li>
                        <p>{detail.txt}</p>
                        </div>
                    </ul>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeFooter