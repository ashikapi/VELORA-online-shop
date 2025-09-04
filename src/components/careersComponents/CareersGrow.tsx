import { IoIosCheckmarkCircle } from "react-icons/io";
const CareersGrow = () => {
  return (
    <div className='flex justify-center items-center mt-20 mb-20'>
        <div className='w-310 p-2 flex justify-center items-center'>
        <div className='grid grid-cols-2 gap-6'>
            <div>
                <img className='w-140 rounded-2xl' src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/pexels-cottonbro-4622225-1536x1024.jpg" alt="" />
            </div>
            <div className='mt-5 space-y-5'>
                <h1 className='text-5xl text-black font-bold'>Grow Your Career with Us</h1>
                <p>Whether you’re helping a customer find their perfect fit or designing our next best-selling piece, 
                 your work matters here. We value creativity, collaboration, and people who bring fresh ideas to the table.</p>
                 <ul className='w-50 p-4 grid grid-cols-2 gap-4'>
                    <li className='flex justify-baseline items-center gap-2'><span className='text-2xl text-[rgb(239,35,60)]'><IoIosCheckmarkCircle /></span>Fun</li>
                    <li className='flex justify-baseline items-center gap-2'><span className='text-2xl text-[rgb(239,35,60)]'><IoIosCheckmarkCircle /></span>Flexibility</li>
                    <li className='flex justify-baseline items-center gap-2'><span className='text-2xl text-[rgb(239,35,60)]'><IoIosCheckmarkCircle /></span>ESPOS</li>
                    <li className='flex justify-baseline items-center gap-2'><span className='text-2xl text-[rgb(239,35,60)]'><IoIosCheckmarkCircle /></span>Growth</li>
                 </ul>
                 <button className='mt-3 px-6 py-3 rounded-3xl bg-[rgb(239,35,60)] text-white uppercase font-semibold'>View Open positions</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CareersGrow