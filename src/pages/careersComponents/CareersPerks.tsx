
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const perksDetails = [
    {title:'Employee Discounts', details:'Enjoy exclusive discounts & more on Velora styles.'},
    {title:'Flexible Work', details:'Choose remote, hybrid, or in-office roles that suit your lifestyle .'},
    {title:'Career Growth', details:'Learn, grow, and thrive with clear paths to advancement.'},
    {title:'Wellness Support', details:'Prioritize well-being with access to wellness tools.'},
];



const CareersPerks = () => {
  return (
    <div className='flex justify-center items-center pt-30 pb-30'>
        <div>
            <div className='text-center space-y-4'>
                <h1 className='text-5xl text-black font-bold'>Perks & Benefits</h1>
                <p>Where Great Work Meets Great Rewards</p>
            </div>
            <div className='mt-20 flex justify-center items-center'>
            <div className='w-300 p-6 gap-5 grid grid-cols-4'>
                {perksDetails.map((details, index)=>(
                    
                    <ul className='space-y-2' key={index}>
                            <div>
                                 <h1 className=' w-14 h-14 p-3 bg-[rgb(239,35,60)] rounded-full text-3xl font-bold text-white flex justify-center items-center text-center'><IoCheckmarkCircleOutline /></h1>
                             </div>
                        <h1 className='pt-3 text-xl text-black font-bold'>{details.title}</h1>
                        <p>{details.details}</p>
                    </ul>
                ))}
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default CareersPerks