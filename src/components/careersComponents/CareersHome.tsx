interface CareersHomeProps{
  title: string,
  showSubtitle?:boolean
  details:string,
  showDetails?:boolean,
  subDetails: string,
}
const CareersHome = ({title , showSubtitle = true ,  details, showDetails= true , subDetails}:CareersHomeProps) => {
  return (
    <div className='w-full h-full flex justify-center items-center text-center bg-[rgb(247,236,237)]'>
        <div className='md:px-10 px-6 py-20'>
            <div className='space-y-4'>
                <h1 className='md:text-5xl text-3xl text-black font-bold'>{title} {showSubtitle && "Careers at Velora"}</h1>
                <p className='text-black md:text-base text-sm'>{details} {showDetails && "At Velora, you’ll find purpose in your work, passion in your teammates, and growth in every step."}
                  <span><br />{subDetails}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CareersHome