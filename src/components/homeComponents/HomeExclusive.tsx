
const HomeExclusive = () => {
  return (
    <div className='w-full h-full relative md:flex justify-start items-center bg-[rgb(247,236,237)]'>
        <div className='md:w-3/4 md:min-h-[650px] w-full min-h-screen inline-block h-full bg-[url("https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/exclusive-jackets.jpg")] bg-cover md:bg-left bg-center md:flex justify-center items-center'>
            {/* <div>
                <img className='' src="" alt="" />
            </div> */}
            
        </div>
        <div className='lg:w-1/3 md:w-1/2 w-full absolute md:right-16 md:p-10 p-5 md:top-auto
        top-40 md:bg-white bg-white/80 md:text-balance text-center rounded-3xl space-y-6'>
                <h1 className='text-2xl text-black font-bold'>The Exclusive Jackets - Starting at just $40</h1>
                <p>Crafted for comfort, designed for impact — this is the outerwear piece that’s redefining everyday style. Our best-selling jacket brings warmth, versatility, and edge to any outfit.</p>
                <button className='px-6 py-3 bg-[rgb(239,35,60)] rounded-3xl text-white uppercase font-semibold mt-10'>Shop the Exclusive Jacket</button>
            </div>
    </div>
  )
}

export default HomeExclusive