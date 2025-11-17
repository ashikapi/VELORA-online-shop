const HomeCategories = () => {

    const catagory = [
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-01.jpg', name: 'Mens Wear', text: ''},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-02.jpg', name: 'Womens Wear', text: ''},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-03.jpg', name: 'Kids Wear', text: ''},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/category-04.jpg', name: 'Accessories', text: ''}
    ]

  return (
    <div className='flex justify-center items-center bg-[rgb(247,236,237)] pb-30 pt-20'>
        <div>
            <div className='pb-10 text-center space-y-4'>
                <h1 className='md:text-5xl text-3xl text-black font-bold'>Our Categories</h1>
                <p className='text-xl'>Explore a wide range of styles, handpicked to suit every taste and need.</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                {catagory.map((cata, index)=>(
                    <div key={index}>
                        <img className='border-2 border-gray-500 rounded-4xl mt-15' src={cata.logo} alt="" />
                        <ul className='w-120 p-4 bg-white text-center space-y-2 pb-5 pt-5 rounded-3xl -mt-15 ml-15 absolute z-10'>
                            <h1 className='text-2xl font-bold text-black'>{cata.name}</h1>
                            <p className='text-[rgb(239,35,60)]'>Shop Now</p>
                        </ul>
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeCategories