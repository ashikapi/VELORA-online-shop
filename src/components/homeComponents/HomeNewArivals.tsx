const NewArivals = () => {
const products = [
    { id: 1, name: 'Flowline Dresses', category:'Women', price: '$49.00-$55.00', sizes: ['M', 'L', 'XL'], colors:['#EF233C', '#3A86FF', '#FFBE0B'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/1.png' },
    { id: 2, name: 'Polo T-Shirt', category:'Men', price: '$29.00-$35.00', sizes: ['S', 'M', 'L', 'XL'], colors:['#000000', '#228B22', '#8B4513'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/polo-tshirt.jpg' },
    { id: 3, name: 'Cream T-Shirt', category:'Men', price: '$25.00-$30.00', sizes: ['S', 'M', 'L'], colors:['#FFFFFF', '#808080', '#FF69B4'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/cream-tshirt.jpg' },
];

  return (
    <div className='-mt-10 pt-20'>
        <div className='flex justify-between items-center p-20'>
            <div className='space-y-4'>
                <h1 className='text-5xl font-extrabold'>New Arrivals</h1>
                <p className='text-[rgb(89,80,83)]'>Be the first to wear this season’s latest looks. Handpicked and <span><br /></span> freshly styled.</p>
            </div>
            <div> <button className='px-6 py-3 border rounded-3xl font-semibold  border-[rgb(239,35,60)] text-[rgb(239,35,60)] hover:bg-[rgb(239,35,60)] hover:text-white uppercase'>See What's New</button></div>
        </div>
        <div className='grid grid-cols-3 gap-6 -mt-6 mb-20 p-20'>{products.map((product, index) => (
            <div  className=''>
            <ul key={index}>
                <li><img src={product.image} alt="img" /></li>
            </ul>
            <div className='space-y-2 mt-4'>
                <h1 className='text-black font-semibold'>{product.name}</h1>
                <p className='text-gray-400'>{product.category}</p>
                <p className='text-black font-semibold'>{product.price}</p>
                <label className='flex justify-baseline gap-5'>{product.sizes.map((size, idx) => (
                <ul key={idx} className=''>
                    <li className='flex justify-center items-center text-center w-7 h-7 border-gray-300 border shadow-2xl'>{size}</li>
                </ul>
                ))}
                </label>
                <label className='flex justify-baseline gap-2'>{product.colors.map((color, inx) => (
                <ul key={inx} className=''>
                    <li className='w-4 h-4 ml-2 rounded-sm'
                style={{ backgroundColor: color }}></li>
                </ul>
                ))}
                </label>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default NewArivals