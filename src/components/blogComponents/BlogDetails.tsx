const BlogDetails = () => {

    const property = [
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/blog-post-06.jpg',name:'Top 5 Accessories That Elevate Any Look',date:'May 15, 2025 | 2 minutes of reading',txt:'1. Statement Earrings: The Instant Game-Changer Nothing draws attention quite like a pair of bold statement earrings. Whether you prefer […]'},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/blog-post-05.jpg',name:'Mix, Match, Repeat: Building Outfits with Fewer Pieces',date:'May 15, 2025 | 1 minute of reading',txt:'Make the Most of What You Have Creating stylish outfits doesn’t require an overflowing closet—it’s all about making smart choices'},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/blog-post-04.jpg',name:'Velora Kids: Fashion Meets Functionality',date:'May 15, 2025 | 2 minutes of reading',txt:'Designed for Play, Styled for Life At Velora Kids, we believe children’s clothing should never make you choose between looking'},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/blog-post-03.jpg',name:'Our Favorite Summer Looks: Light, Breezy & Bold',date:'May 15, 2025 | 2 minutes of reading',txt:'Effortless Chic: The Power of Linen & Cotton When the temperature rises, comfort meets style in the form of lightweight'},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/blog-post-02.jpg',name:'How to Style One Jacket Three Ways',date:'May 15, 2025 | 2 minutes of reading',txt:'Look 1: Casual Day Out Whether you’re grabbing a coffee or heading to a weekend market, your go-to jacket can'},
        {logo:'https://websitedemos.net/clothing-store-04/wp-content/uploads/sites/1538/2025/05/blog-post-01.jpg',name:'5 Must-Have Staples for a Capsule Wardrobe',date:'May 15, 2025 | 2 minutes of reading',txt:'1. The Classic White Shirt A crisp white shirt is a timeless essential that effortlessly transitions from professional to casual.'},
    ]

  return (
    <div>
        <div className='flex justify-center items-center pt-20 pb-20'>
            <div className='w-300 p-6 grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {property.map((prop, index)=>(
                    <div className='shadow-sm shadow-gray-200 bg-white space-y-2 rounded-2xl' key={index}>
                        <img className='rounded-t-2xl' src={prop.logo} alt="" />
                        <div className='p-4 space-y-6'>
                        <h1 className='text-2xl font-bold text-black'>{prop.name}</h1>
                        <p className='text-black font-bold'>{prop.date}</p>
                        <p>{prop.txt}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default BlogDetails