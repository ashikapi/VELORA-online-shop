interface CareersHomeProps{
  title: string,
  showSubtitle?:boolean
  details:string,
  showDetails?:boolean,
  subDetails: string,
}
const CareersHome = ({title , showSubtitle = true ,  details, showDetails= true , subDetails}:CareersHomeProps) => {
  return (
    <div className='flex justify-center items-center text-center bg-[rgb(247,236,237)]'>
        <div className='pt-30 pb-30'>
            <div className='space-y-4'>
                <h1 className='text-5xl text-black font-bold'>{title} {showSubtitle && "Careers at Velora"}</h1>
                <p className='text-black'>{details} {showDetails && "At Velora, you’ll find purpose in your work, passion in your teammates, and growth in every step."}
                  <span><br />{subDetails}</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CareersHome