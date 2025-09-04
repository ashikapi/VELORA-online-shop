
import { FaArrowRight } from "react-icons/fa6";

const CareersReady = () => {

    const readyDetails = [
        {title:'Graphic Designer – Apparel',details:'Remote or NYC'},
        {title:'Customer Experience Associate',details:'Full-Time, Remote'},
        {title:'Warehouse Coordinator',details:'Los Angeles'},
        {title:'Social Media Manager',details:'Full-Time, Hybrid'},
    ];

  return (
    <div className='flex justify-center items-center bg-[rgb(247,236,237)] pt-25 pb-25'>
        <div>
            <div className='grid grid-cols-2 gap-20 '>
            <div className='space-y-6'>
                <h1 className='text-5xl text-black font-bold'>Ready to Join Us?</h1>
                <p className='text-lg'>Let’s Make Something Great Together</p>
            </div>
            <div>
                {readyDetails.map((ready,index)=>(
                    <div className='w-140 p-2' key={index}>
                        <div className='flex justify-between items-center'>
                            <div className='text-xl'>
                        <h1 className='text-black font-bold'>{ready.title}</h1>
                        <p>{ready.details}</p>
                        </div>
                        <div className='text-[rgb(239,35,60)] text-3xl'><FaArrowRight /></div>
                        </div>
                        <hr className='mt-5 text-gray-400' />
                    </div>
                ))}
            </div>
            </div>
            <div className='text-center mt-20 space-y-3'>
                <h1 className='text-2xl text-black font-bold'>Don’t see the right role?</h1>
                <p className='ml-120 w-61 text-center text-[rgb(239,35,60)] uppercase border-b'>Email us at jobs@velora.com</p>
            </div>
        </div>
    </div>
  )
}

export default CareersReady