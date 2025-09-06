import React from 'react'

const HomeExclusive = () => {
  return (
    <div className='flex justify-center items-center bg-[rgb(247,236,237)]'>
        <div className=' w-280 h-175 -ml-50 bg-[url("https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/exclusive-jackets.jpg")] bg-cover bg-left flex justify-center items-center'>
            <div>
                <img className='w-280' src="" alt="" />
            </div>
            
        </div>
        <div className='w-120 bg-white p-15 -ml-60 rounded-3xl space-y-6'>
                <h1 className='text-2xl text-black font-bold'>The Exclusive Jackets - Starting at just $40</h1>
                <p>Crafted for comfort, designed for impact — this is the outerwear piece that’s redefining everyday style. Our best-selling jacket brings warmth, versatility, and edge to any outfit.</p>
                <button className='px-6 py-3 bg-[rgb(239,35,60)] rounded-3xl text-white uppercase font-semibold mt-10'>Shop the Exclusive Jacket</button>
            </div>
    </div>
  )
}

export default HomeExclusive