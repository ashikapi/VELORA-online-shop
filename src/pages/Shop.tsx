

const Shop = () => {

    const products = [
    { id: 1, name: 'Flowline Dresses', category:'Women', price: '$49.00-$55.00', sizes: ['M', 'L', 'XL'], colors:['#EF233C', '#3A86FF', '#FFBE0B'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/1.png' },
    { id: 2, name: 'Polo T-Shirt', category:'Men', price: '$29.00-$35.00', sizes: ['S', 'M', 'L', 'XL'], colors:['#000000', '#228B22', '#8B4513'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/polo-tshirt.jpg' },
    { id: 3, name: 'Cream T-Shirt', category:'Men', price: '$25.00-$30.00', sizes: ['S', 'M', 'L'], colors:['#FFFFFF', '#808080', '#FF69B4'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/cream-tshirt.jpg' },
    { id: 4, name: 'T Jacket Combo', category:'Men', price: '$22.00-$28.00', sizes: ['M', 'L', 'XL'], colors:['rgb(225,156,228)', 'rgb(96,139,172)', 'rgb(117,188,149)'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/Jack-Main-400x465.png' },
    { id: 5, name: 'Summer T-Shirt', category:'Women', price: '$25.00-$30.00', sizes: ['S', 'M', 'L'], colors:['rgb(118,50,93)', 'rgb(47,77,114)', 'rgb(37,102,96)'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/Girl-Purple-400x465.png' },
    { id: 6, name: 'Princess Hoodie', category:'Men', price: '$25.00-$30.00', sizes: ['XS', 'S', 'M'], colors:['rgb(122,111,152)', 'rgb(112,112,112)', 'rgb(151,157,109)'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/princess-hoodie-400x465.jpg' },
    { id: 7, name: 'Solid Shirt', category:'Men', price: '$32.00-$40.00', sizes: ['M', 'L', 'XL'], colors:['#000000', '#228B22', '#8B4513'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/solid-shirt-blue-400x465.jpg' },
    { id: 8, name: 'Mini Jackets', category:'Men', price: '$25.00-$32.00', sizes: ['M', 'L', 'XL'], colors:['rgb(118,50,93)', 'rgb(47,77,114)', 'rgb(37,102,96)'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/mini-jacket-400x465.jpg' },
    { id: 9, name: 'Funky Hoodie', category:'Men', price: '$20.00-$25.00', sizes: ['S', 'M', 'L', 'XL'], colors:['rgb(122,111,152)', 'rgb(112,112,112)', 'rgb(151,157,109)'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/funky-hoodie-400x465.jpg' },
    { id: 10, name: 'Formal Shirt', category:'Women', price: '$25.00-$35.00', sizes: ['S', 'M', 'L'], colors:['#000000', '#228B22', '#8B4513'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/formal-shirt-400x465.jpg' },
    { id: 11, name: 'Dot Skirt', category:'Women', price: '$38.00-$45.00', sizes: ['M', 'L', 'XL'], colors:['rgb(122,111,152)', 'rgb(112,112,112)', 'rgb(151,157,109)'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/Skirt-Pic-400x465.png' },
    { id: 12, name: 'Black Hoodie', category:'Women', price: '$25.00-$30.00', sizes: ['M', 'L', 'XL'], colors:['Black'], image: 'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/black-hoodie-400x465.jpg' },
];

  return (
    <div className='w-full h-full xl:px-40 lg:px-20 md:px-16 px-5 py-10'>
        <div className='flex justify-between items-center'>
            <div className='space-y-4'>
                <h1 className='text-3xl font-extrabold'>Shop</h1>
            </div>
        </div>
        <div className="w-full text-gray-400 border-0.5 py-4 "><hr /></div>
        <div className="flex justify-between items-center mb-4">
            <p>Showing 1–9 of 12 results</p>
            <select className="w-50 p-2" name="" id="" defaultValue="option1">
                <option value="option1"
                 className="text-end"
                >Sort by latest</option>
                </select></div>
        <div className='grid grid-cols-3 grid-rows-3 gap-6 mb-20'>{products.map((product, index) => (
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
                    <li className='w-4 h-4 p-2 ml-2 rounded-sm'
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

export default Shop