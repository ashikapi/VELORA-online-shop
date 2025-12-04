const HomeBestsell = () => {
const products = [
    { id: 7, name: 'Solid Shirt', category:'Men', price: '$32.00-$40.00', sizes: ['M', 'L', 'XL'], colors:['#000000', '#228B22', '#8B4513'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/solid-shirt-blue-400x465.jpg' },
    { id: 6, name: 'Princess Hoodie', category:'Men', price: '$25.00-$30.00', sizes: ['XS', 'S', 'M'], colors:['rgb(122,111,152)', 'rgb(112,112,112)', 'rgb(151,157,109)'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/princess-hoodie-400x465.jpg' },
    { id: 5, name: 'Summer T-Shirt', category:'Women', price: '$25.00-$30.00', sizes: ['S', 'M', 'L'], colors:['rgb(118,50,93)', 'rgb(47,77,114)', 'rgb(37,102,96)'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/Girl-Purple-400x465.png' },
];

  return (
    <div className='-mt-10 pt-20'>
            <div className='space-y-4 text-center'>
                <h1 className='text-5xl font-extrabold'>Bestsellers</h1>
                <p className='text-[rgb(89,80,83)]'>From cult-favorite jackets to must-have dresses –<span><br /></span> These are our customer faves. </p>
            </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 -mt-6 mb-20 p-20'>{products.map((product, index) => (
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

export default HomeBestsell