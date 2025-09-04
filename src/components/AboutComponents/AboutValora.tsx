import logo1 from "../../Images/laundry.png"
import logo2 from "../../Images/woman-clothes.png"
import logo3 from "../../Images/dressmaker.png"
import logo4 from "../../Images/people.png"



const AboutValora = () => {
    const details = [
        {logo:logo1 , name:'Premium Quality' , description:'Crafted with care using soft, durable fabrics designed to last and feel amazing.' },
        {logo:logo2 , name:'Timeless Style' , description:'Clean silhouettes and versatile pieces you can wear season after season.' },
        {logo:logo3 , name:'In-House Design' , description:'Every detail is imagined by our in-house design team to bring you standout staples.' },
        {logo:logo4 , name:'For Every Body' , description:'Inclusive fits and sizes designed to flatter all shapes, ages, and styles.' },
    ];
  return (
    <div className='bg-[rgb(255,255,255)] flex justify-center items-center text-center mt-40 mb-40'>
        <div className=''>
            <div className='space-y-4'>
                <h1 className='text-4xl font-bold text-black'>What Makes Velora Stand Out</h1>
                <p className='text-stone-400 mb-10 text-xl'>Style, Comfort & More – Here’s Why You’ll Love Us</p>
            </div>
            <div className='w-240 grid grid-cols-4 gap-4 justify-center items-center text-center'>{details.map((det , index)=>(
                <ul key={index} className='p-1 border border-gray-300 rounded-2xl space-y-4'>
                    <h1 className=' mt-4 flex justify-center items-center text-center'><img className='w-20' src={det.logo} alt="" /></h1>
                    <li className='text-black text-2xl font-bold mt-4'>{det.name}</li>
                    <li className='mb-10'>{det.description}</li>
                </ul>
            ))}</div>
        </div>
    </div>
    
  )
}
export default AboutValora

