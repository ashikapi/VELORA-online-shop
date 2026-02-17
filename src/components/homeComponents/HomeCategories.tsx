const HomeCategories = () => {

    const catagory = [
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-01.jpg', name: 'Mens Wear', text: ''},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-02.jpg', name: 'Womens Wear', text: ''},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-03.jpg', name: 'Kids Wear', text: ''},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-04.jpg', name: 'Accessories', text: ''}
    ]

  return (
    <div className='w-full h-full flex justify-center items-center bg-[rgb(247,236,237)] px-20 py-20'>
        <div>
            <div className='pb-10 text-center space-y-4'>
                <h1 className='md:text-5xl text-3xl text-black font-bold'>Our Categories</h1>
                <p className='text-xl p-4'>Explore a wide range of styles, handpicked to suit every taste and need.</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-20'>
                {catagory.map((cata, index)=>(
                    <div key={index} className="relative">
  
  <img 
    className='w-full border-2 border-gray-500 rounded-3xl'
    src={cata.logo} 
    alt={cata.name}
  />

  <div className='bg-white w-60 text-center px-10 py-5 rounded-3xl absolute -bottom-10 left-1/2 -translate-x-1/2 z-10 shadow-lg'>
    <h2 className='lg:text-2xl text-xl font-bold text-black'>{cata.name}</h2>
    <p className='text-[rgb(239,35,60)] cursor-pointer'>Shop Now</p>
  </div>

</div>

                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeCategories