

const AboutThought = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='grid grid-cols-2'>
            <div className='bg-[rgb(17,17,17)] text-white items-center flex justify-center p-10'>
            <div className='pl-10 pr-10'>
                <h1 className='text-5xl font-extrabold mb-6'>Thoughtfully Designed for All</h1>
                <p className='text-gray-300 leading-relaxed text-xl'>Our range covers Men, Women, and Kids, with each piece carefully crafted to combine form, function, and feeling. From the perfect polo to the softest loungewear and statement outerwear, everything at Velora is designed with real life in mind — easy to wear, easy to love. We also believe in the power of details. That’s why we obsess over fit, fabric, and finish — so you don’t have to</p>
            </div>
            </div>
            {/* <div className='h-full'><img className='w-full h-full object-cover' src="https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/about-us-bg-01.jpg" alt="" /></div> */}
            <div>
                <p className='h-screen bg-[url("https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/about-us-bg-01.jpg")] bg-cover bg-center bg-no-repeat flex justify-center items-center text-center'></p>
            </div>
        </div>
    </div>
  )
}

export default AboutThought