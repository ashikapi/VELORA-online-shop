
const CareersLife = () => {
  return (
    <div className='flex justify-center items-center bg-[rgb(247,236,237)] pt-20 pb-20'>
        <div>
            <div className='text-center space-y-5'>
                <h1 className='text-5xl font-bold text-black'>Life at Velora​</h1>
                <p>Get a behind-the-scenes look at what it’s like to work at Velora. From collaborative design sessions to launch-day celebrations,
                    <span> <br />we believe in doing great work — and enjoying the journey along the way.</span>
                </p>
            </div>
            <div className='mt-20 flex justify-center items-center'>
            <div className='grid grid-cols-3 gap-5'>
                <div><img className='border-2 border-black rounded-3xl' src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/About-Pic-1.png" alt="" /></div>
                <div className='space-y-5'>
                    <div>
                        <img className='border-2 border-black rounded-3xl' src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/About-Pic-2.png" alt="" />
                    </div>
                    <div>
                        <img className='border-2 border-black rounded-3xl' src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/About-Pic-3.png" alt="" />    
                    </div>
                </div>
                <div><img className='border-2 border-black rounded-3xl' src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/About-Pic-4.png" alt="" /></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CareersLife